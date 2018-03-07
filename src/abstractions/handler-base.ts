import * as React from "react";
import * as PropTypes from "prop-types";

import { EventSource, DropdownOnToggleHandler, DropdownOnCloseHandler, DropdownOnOpenHandler } from "../contracts";
import { CAN_I_USE_WINDOW_LISTENERS, ESCAPE_KEYCODE } from "../helpers";

export interface HandlerBaseProps {
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onOpen?: DropdownOnOpenHandler;
    onClose?: DropdownOnOpenHandler;
    onToggle?: DropdownOnToggleHandler;
    toggleOnHeaderClick?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnSectionClick?: boolean;
    closeOnEscapeClick?: boolean;
}

export interface HandlerBaseState {
    isOpen: boolean;
}

export interface BaseHandlerChildContext {
    dropdownIsOpen: boolean;
    dropdownOnHeaderClickCallback: () => void;
    dropdownOnSectionClickCallback: () => void;
}

export abstract class HandlerBase<
    TProps extends HandlerBaseProps = HandlerBaseProps,
    TState extends HandlerBaseState = HandlerBaseState
> extends React.Component<TProps, TState> {
    constructor(props: TProps) {
        super(props);
        if (CAN_I_USE_WINDOW_LISTENERS) {
            window.addEventListener("click", this.onOutsideClick.bind(this));
            window.addEventListener("keyup", this.onWindowKeyUp.bind(this));
        }

        this.state = {
            isOpen: this.getInitialOpenValue()
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
        dropdownIsOpen: PropTypes.bool.isRequired,
        dropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        dropdownOnSectionClickCallback: PropTypes.func.isRequired
    };

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected getInitialOpenValue(): boolean {
        let open = false;

        if (this.props.defaultIsOpen != null) {
            open = Boolean(this.props.defaultIsOpen);
        }

        if (this.props.isOpen != null) {
            open = Boolean(this.props.isOpen);
        }

        return open;
    }

    public getChildContext(): BaseHandlerChildContext {
        return {
            dropdownIsOpen: this.state.isOpen,
            dropdownOnHeaderClickCallback: this.onHeaderClick.bind(this),
            dropdownOnSectionClickCallback: this.onSectionClick.bind(this)
        };
    }

    /**
     * Triggers this method when header is clicked.
     */
    protected onHeaderClick(): void {
        const isOpen = !this.state.isOpen;
        if (!this.props.toggleOnHeaderClick) {
            return;
        }

        this.triggerCallbacks(isOpen, EventSource.HeaderClick);
        this.updateOpenState(isOpen);
    }

    /**
     * Triggers this method when section is clicked.
     */
    protected onSectionClick(): void {
        const isOpen = false;

        if (!this.props.closeOnSectionClick) {
            return;
        }

        this.triggerCallbacks(isOpen, EventSource.SectionClick);
        this.updateOpenState(isOpen);
    }

    /**
     * Handles window click event.
     */
    protected onOutsideClick(event: MouseEvent): void {
        const isOpen = false;

        if (!this.props.closeOnOutsideClick || this.isElementInContainer(event.target as Element)) {
            return;
        }

        this.triggerCallbacks(isOpen, EventSource.OutsideClick);
        this.updateOpenState(isOpen);
    }

    /**
     * Handles window keyboard events.
     */
    private onWindowKeyUp(event: KeyboardEvent): void {
        const isOpen = false;

        if (!this.props.closeOnEscapeClick) {
            return;
        }

        if (event.keyCode === ESCAPE_KEYCODE && this.props.closeOnEscapeClick) {
            this.triggerCallbacks(isOpen, EventSource.EscapeClick);
            this.updateOpenState(isOpen);
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
    protected triggerCallbacks(isOpen: boolean, source: EventSource): void {
        if (isOpen && this.props.onOpen != null) {
            this.props.onOpen(source);
        }
        if (!isOpen && this.props.onClose != null) {
            this.props.onClose(source);
        }
        if (this.props.onToggle != null) {
            this.props.onToggle(isOpen, source);
        }
    }

    /**
     * Updates state if dropdown is not controlled.
     */
    protected updateOpenState(isOpen: boolean): void {
        if (this.state.isOpen !== isOpen && !this.isControlled()) {
            this.setState((state: HandlerBaseState) => ({
                ...state,
                isOpen: isOpen
            }));
        }
    }

    /**
     * Return true if dropdown is controlled outside of this component.
     */
    protected isControlled(): boolean {
        return this.props.isOpen != null;
    }

    protected getRestProps(props: HandlerBaseProps): {} {
        const {
            closeOnEscapeClick,
            closeOnOutsideClick,
            closeOnSectionClick,
            defaultIsOpen,
            onClose,
            onOpen,
            onToggle,
            isOpen,
            toggleOnHeaderClick,
            ...restProps
        } = props;

        return restProps;
    }
}
