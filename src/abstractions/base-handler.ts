import * as React from "react";
import * as PropTypes from "prop-types";

import * as Contracts from "../contracts";
import * as Utils from "../utils";

export interface Dictionary {
    [key: string]: any;
}

export interface BaseHandlerProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpen?: (source: Contracts.EventSource) => void;
    onClose?: (source: Contracts.EventSource) => void;
    onToggle?: (isOpened: boolean, source: Contracts.EventSource) => void;
    toggleOnHeaderClick?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnSectionClick?: boolean;
    closeOnEscapeClick?: boolean;
}

export interface BaseHandlerState {
    open: boolean;
}

export interface BaseHandlerChildContext {
    dropdownOpen: boolean;
    dropdownOnHeaderClickCallback: Function;
    dropdownOnSectionClickCallback: Function;
}

// TODO: Fix state spread.

export abstract class BaseHandler<TProps extends BaseHandlerProps, TState extends BaseHandlerState> extends React.Component<
    TProps,
    TState
> {
    public abstract element: HTMLElement | null;

    public static defaultProps: BaseHandlerProps = {
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

    constructor(props: TProps) {
        super(props);
        if (Utils.CAN_I_USE_WINDOW_LISTENERS) {
            window.addEventListener("click", this.onOutsideClick);
            // TODO: Move keyup to listener to handler container
            window.addEventListener("keyup", this.onWindowKeyUp);
        }

        this.state = {
            open: this.GetInitialOpenValue()
        } as TState;
    }

    public componentWillReceiveProps(nextProps: TProps): void {
        if (nextProps.open != null && this.props.open !== nextProps.open) {
            this.setState(state => ({
                open: nextProps.open!
            }));
        }
    }

    public componentWillUnmount(): void {
        if (Utils.CAN_I_USE_WINDOW_LISTENERS) {
            window.removeEventListener("click", this.onOutsideClick);
            window.removeEventListener("keyup", this.onWindowKeyUp);
        }
    }

    public getChildContext(): BaseHandlerChildContext {
        return {
            dropdownOpen: this.state.open,
            dropdownOnHeaderClickCallback: this.OnHeaderClick.bind(this),
            dropdownOnSectionClickCallback: this.OnSectionClick.bind(this)
        };
    }

    /**
     * To close dropdown.
     */
    public Close(): void {
        if (!this.state.open) {
            return;
        }

        this.setState(state => ({
            open: false
        }));
    }

    /**
     * To close dropdown.
     */
    public Open(): void {
        if (this.state.open) {
            return;
        }
        this.setState(state => ({
            open: true
        }));
    }

    /**
     * Get a boolean if dropdown is open or not.
     */
    public IsOpen(): boolean {
        return this.state.open;
    }

    /**
     * This MUST be used if spread props are being used on element.
     */
    protected GetHTMLProps(props: BaseHandlerProps): {} {
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

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected GetInitialOpenValue(): boolean {
        const props: TProps = this.props;
        let open = false;

        if (props.defaultOpen != null) {
            open = props.defaultOpen;
        }

        if (props.open != null) {
            open = props.open;
        }

        return open;
    }

    /**
     * Return true if dropdown is controlled outside of this component.
     */
    protected IsControlled(): boolean {
        return this.props.open != null;
    }

    /**
     * Checks if passed element is in container element.
     */
    protected IsElementInContainer(element: Element): boolean {
        if (this.element == null) {
            return false;
        }
        const containerElement: HTMLElement = this.element;

        return containerElement.contains(element);
    }

    /**
     * Handles window click event.
     */
    protected onOutsideClick = (event: MouseEvent) => {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnOutsideClick || this.IsElementInContainer(event.target as Element)) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.OutsideClick);
        this.UpdateOpenState(open);
    };

    /**
     * Handles window keyboard events.
     */
    private onWindowKeyUp = (event: KeyboardEvent) => {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnEscapeClick) {
            return;
        }

        if (event.keyCode === 27 && props.closeOnEscapeClick) {
            this.TriggerCallbacks(open, Contracts.EventSource.EscapeClick);
            this.UpdateOpenState(open);
        }
    };

    /**
     * Triggers this method when header is clicked.
     */
    protected OnHeaderClick(): void {
        const props: TProps = this.props;
        const open = !this.state.open;

        if (!props.toggleOnHeaderClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.HeaderClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers this method when section is clicked.
     */
    protected OnSectionClick(): void {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnSectionClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.SectionClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     */
    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource): void {
        const props: TProps = this.props;

        if (open && props.onOpen != null) {
            props.onOpen(source);
        }
        if (!open && props.onClose != null) {
            props.onClose(source);
        }
        if (props.onToggle != null) {
            props.onToggle(open, source);
        }
    }

    /**
     * Updates state if dropdown is not controlled.
     */
    protected UpdateOpenState(open: boolean): void {
        if (this.state.open !== open && !this.IsControlled()) {
            this.setState(state => ({
                open: open
            }));
        }
    }

    protected setElementRef = (element: HTMLElement | null) => {
        this.element = element;
    };
}
