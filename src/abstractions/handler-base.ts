import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";

import { EventSource, DropdownOnToggleHandler, DropdownOnCloseHandler, DropdownOnOpenHandler, ClassNameProps } from "../contracts";
import { CAN_I_USE_WINDOW_LISTENERS, ESCAPE_KEYCODE } from "../helpers";

export interface HandlerBaseProps extends ClassNameProps {
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onOpen?: DropdownOnOpenHandler;
    onClose?: DropdownOnOpenHandler;
    onToggle?: DropdownOnToggleHandler;
    disabled?: boolean;
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
    dropdownIsDisabled: boolean;
    dropdownOnHeaderClickCallback: () => void;
    dropdownOnSectionClickCallback: () => void;
}

export abstract class HandlerBase<
    TProps extends HandlerBaseProps = HandlerBaseProps,
    TState extends HandlerBaseState = HandlerBaseState
> extends React.Component<TProps, TState> {
    constructor(props: TProps) {
        super(props);

        this.onOutsideClickHandler = this.onOutsideClick.bind(this);
        this.onWindowKeyUpHandler = this.onEscapeHandler.bind(this);

        if (CAN_I_USE_WINDOW_LISTENERS) {
            window.addEventListener("click", this.onOutsideClickHandler);
            window.addEventListener("keyup", this.onWindowKeyUpHandler);
        }

        this.state = {
            isOpen: this.getInitialOpenValue()
        } as TState;
    }

    public static getDerivedStateFromProps(nextProps: HandlerBaseProps, prevState: HandlerBaseState): HandlerBaseState {
        return {
            isOpen: nextProps.isOpen || prevState.isOpen
        };
    }

    public componentWillUnmount(): void {
        if (CAN_I_USE_WINDOW_LISTENERS) {
            window.removeEventListener("click", this.onOutsideClickHandler);
            window.removeEventListener("keyup", this.onWindowKeyUpHandler);
        }
    }

    private onOutsideClickHandler: () => void;
    private onWindowKeyUpHandler: () => void;

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
        dropdownIsDisabled: PropTypes.bool.isRequired,
        dropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        dropdownOnSectionClickCallback: PropTypes.func.isRequired
    };

    public getChildContext(): BaseHandlerChildContext {
        return {
            dropdownIsOpen: this.state.isOpen,
            dropdownIsDisabled: (this.props.disabled as boolean) || false,
            dropdownOnHeaderClickCallback: this.onHeaderClick.bind(this),
            dropdownOnSectionClickCallback: this.onSectionClick.bind(this)
        };
    }

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

    /**
     * Triggers this method when header is clicked.
     */
    protected onHeaderClick(): void {
        if (!this.props.toggleOnHeaderClick) {
            return;
        }

        // Toggle open state
        const isOpen = !this.state.isOpen;
        this.triggerCallbacks(isOpen, EventSource.HeaderClick);
        this.updateOpenState(isOpen);
    }

    /**
     * Triggers this method when section is clicked.
     */
    protected onSectionClick(): void {
        if (!this.props.closeOnSectionClick || this.state.isOpen === false) {
            return;
        }

        this.triggerCallbacks(false, EventSource.SectionClick);
        this.updateOpenState(false);
    }

    /**
     * Handles outside click.
     */
    protected onOutsideClick(event: MouseEvent): void {
        if (!this.props.closeOnOutsideClick || this.isElementInContainer(event.target as Element) || this.state.isOpen === false) {
            return;
        }

        this.triggerCallbacks(false, EventSource.OutsideClick);
        this.updateOpenState(false);
    }

    /**
     * Handles escape button click.
     */
    private onEscapeHandler(event: KeyboardEvent): void {
        if (!this.props.closeOnEscapeClick || this.state.isOpen === false || event.keyCode !== ESCAPE_KEYCODE) {
            return;
        }

        this.triggerCallbacks(false, EventSource.EscapeClick);
        this.updateOpenState(false);
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
        if (this.props.disabled) {
            return;
        }

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
        if (this.state.isOpen !== isOpen && !this.isControlled() && !this.props.disabled) {
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
            className,
            closedClassName,
            disabled,
            disabledClassName,
            openClassName,
            ...restProps
        } = props;

        return restProps;
    }

    protected getClassName(props: ClassNameProps): string {
        return classNames(props.className, {
            [props.openClassName || ""]: this.isOpen,
            [props.closedClassName || ""]: !this.isOpen,
            [props.disabledClassName || ""]: this.props.disabled
        });
    }

    //#region Public API
    /**
     * Is dropdown open.
     */
    public get isOpen(): boolean {
        return this.state.isOpen;
    }

    /**
     * To open dropdown.
     */
    public open(): void {
        if (this.state.isOpen) {
            return;
        }

        this.triggerCallbacks(true, EventSource.ManualTrigger);
        this.updateOpenState(true);
    }

    /**
     * To close dropdown.
     */
    public close(): void {
        if (!this.state.isOpen) {
            return;
        }

        this.triggerCallbacks(false, EventSource.ManualTrigger);
        this.updateOpenState(false);
    }
    //#endregion
}
