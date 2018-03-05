import * as React from "react";

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

export abstract class HandlerBase<TProps extends HandlerBaseProps, TState extends HandlerBaseState> extends React.Component<
    TProps,
    TState
> {
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

    /**
     * Container element.
     */
    public abstract element: HTMLElement | null;

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected getInitialOpenValue(): boolean {
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
     * Handles window click event.
     */
    protected onOutsideClick(event: MouseEvent): void {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnOutsideClick || this.isElementInContainer(event.target as Element)) {
            return;
        }

        this.triggerCallbacks(open, EventSource.OutsideClick);
        this.updateOpenState(open);
    };

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
    };

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
}
