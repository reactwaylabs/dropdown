import * as React from "react";
import * as PropTypes from "prop-types";

import { EventSource } from "../contracts";
import { CAN_I_USE_WINDOW_LISTENERS, ESCAPE_KEYCODE } from "../helpers";

export interface HandlerBaseProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpen?: (source: EventSource) => void;
    onClose?: (source: EventSource) => void;
    onToggle?: (isOpened: boolean, source: EventSource) => void;
    toggleOnHeaderClick?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnSectionClick?: boolean;
    closeOnEscapeClick?: boolean;
}

export interface HandlerBaseState {
    open: boolean;
}

export interface BaseHandlerChildContext {
    dropdownOpen: boolean;
    dropdownOnHeaderClickCallback: Function;
    dropdownOnSectionClickCallback: Function;
}

export abstract class HandlerBase<
    TProps extends HandlerBaseProps = HandlerBaseProps,
    TState extends HandlerBaseState = HandlerBaseState
> extends React.Component<TProps, TState> {
    constructor(props: TProps) {
        super(props);
        if (CAN_I_USE_WINDOW_LISTENERS) {
            window.addEventListener("click", this.onOutsideClick.bind(this));
            // TODO: Move keyup to listener to handler container
            window.addEventListener("keyup", this.onWindowKeyUp.bind(this));
        }

        this.state = {
            open: this.getInitialOpenValue()
        } as TState;
    }

    public componentWillUnmount(): void {
        if (CAN_I_USE_WINDOW_LISTENERS) {
            window.removeEventListener("click", this.onOutsideClick.bind(this));
            window.removeEventListener("keyup", this.onWindowKeyUp.bind(this));
        }
    }

    /**
     * Container element.
     */
    public abstract element: HTMLElement | null;

    public static defaultProps: HandlerBaseProps = {
        toggleOnHeaderClick: true,
        closeOnSectionClick: false,
        closeOnOutsideClick: true,
        closeOnEscapeClick: true
    };

    public static childContextTypes: PropTypes.ValidationMap<BaseHandlerChildContext> = {
        dropdownOpen: PropTypes.bool.isRequired,
        dropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        dropdownOnSectionClickCallback: PropTypes.func.isRequired
    };

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected getInitialOpenValue(): boolean {
        let open = false;

        if (this.props.defaultOpen != null) {
            open = this.props.defaultOpen as boolean;
        }

        if (this.props.open != null) {
            open = this.props.open as boolean;
        }

        return open;
    }

    public getChildContext(): BaseHandlerChildContext {
        return {
            dropdownOpen: this.state.open,
            dropdownOnHeaderClickCallback: this.onHeaderClick.bind(this),
            dropdownOnSectionClickCallback: this.onSectionClick.bind(this)
        };
    }

    /**
     * Triggers this method when header is clicked.
     */
    protected onHeaderClick(): void {
        const open = !this.state.open;
        if (!this.props.toggleOnHeaderClick) {
            return;
        }

        this.triggerCallbacks(open, EventSource.HeaderClick);
        this.updateOpenState(open);
    }

    /**
     * Triggers this method when section is clicked.
     */
    protected onSectionClick(): void {
        const open = false;

        if (!this.props.closeOnSectionClick) {
            return;
        }

        this.triggerCallbacks(open, EventSource.SectionClick);
        this.updateOpenState(open);
    }

    /**
     * Handles window click event.
     */
    protected onOutsideClick(event: MouseEvent): void {
        const open = false;

        if (!this.props.closeOnOutsideClick || this.isElementInContainer(event.target as Element)) {
            return;
        }

        this.triggerCallbacks(open, EventSource.OutsideClick);
        this.updateOpenState(open);
    }

    /**
     * Handles window keyboard events.
     */
    private onWindowKeyUp(event: KeyboardEvent): void {
        const open = false;

        if (!this.props.closeOnEscapeClick) {
            return;
        }

        if (event.keyCode === ESCAPE_KEYCODE && this.props.closeOnEscapeClick) {
            this.triggerCallbacks(open, EventSource.EscapeClick);
            this.updateOpenState(open);
        }
    }

    /**
     * Checks if passed element is in container element.
     */
    protected isElementInContainer(element: Element): boolean {
        if (this.element == null) {
            return false;
        }
        const containerElement: HTMLElement = this.element;

        return containerElement.contains(element);
    }

    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     */
    protected triggerCallbacks(open: boolean, source: EventSource): void {
        if (open && this.props.onOpen != null) {
            this.props.onOpen(source);
        }
        if (!open && this.props.onClose != null) {
            this.props.onClose(source);
        }
        if (this.props.onToggle != null) {
            this.props.onToggle(open, source);
        }
    }

    /**
     * Updates state if dropdown is not controlled.
     */
    protected updateOpenState(open: boolean): void {
        if (this.state.open !== open && !this.isControlled()) {
            this.setState((state: HandlerBaseState) => ({
                ...state,
                open: open
            }));
        }
    }

    /**
     * Return true if dropdown is controlled outside of this component.
     */
    protected isControlled(): boolean {
        return this.props.open != null;
    }

    protected getRestProps(props: HandlerBaseProps): {} {
        const {
            closeOnEscapeClick,
            closeOnOutsideClick,
            closeOnSectionClick,
            defaultOpen,
            onClose,
            onOpen,
            onToggle,
            open,
            toggleOnHeaderClick,
            ...restProps
        } = props;

        return restProps;
    }
}
