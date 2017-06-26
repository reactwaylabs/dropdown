/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import * as Contracts from "../contracts";
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
    Open: boolean;
}
export interface BaseHandlerChildContext {
    DropdownOpen: boolean;
    DropdownOnHeaderClickCallback: Function;
    DropdownOnSectionClickCallback: Function;
}
export declare abstract class BaseHandler<TProps extends BaseHandlerProps, TState extends BaseHandlerState> extends React.Component<TProps, TState> {
    abstract Element: HTMLElement | null;
    static defaultProps: BaseHandlerProps;
    static childContextTypes: PropTypes.ValidationMap<BaseHandlerChildContext>;
    constructor(props: TProps);
    componentWillReceiveProps(nextProps: TProps): void;
    componentWillUnmount(): void;
    getChildContext(): BaseHandlerChildContext;
    /**
     * To close dropdown.
     */
    Close(): void;
    /**
     * To close dropdown.
     */
    Open(): void;
    /**
     * Get a boolean if dropdown is open or not.
     */
    IsOpen(): boolean;
    /**
     * This MUST be used if spread props are being used on element.
     */
    protected GetHTMLProps(props: BaseHandlerProps): {};
    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected GetInitialOpenValue(): boolean;
    /**
     * Return true if dropdown is controlled outside of this component.
     */
    protected IsControlled(): boolean;
    /**
     * Checks if passed element is in container element.
     */
    protected IsElementInContainer(element: Element): boolean;
    /**
     * Handles window click event.
     */
    protected OnOutsideClick: (event: MouseEvent) => void;
    /**
     * Handles window keyboard events.
     */
    private OnWindowKeyUp;
    /**
     * Triggers this method when header is clicked.
     */
    protected OnHeaderClick(): void;
    /**
     * Triggers this method when section is clicked.
     */
    protected OnSectionClick(): void;
    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     */
    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource): void;
    /**
     * Updates state if dropdown is not controlled.
     */
    protected UpdateOpenState(open: boolean): void;
    protected SetElementRef: (element: HTMLElement | null) => void;
}
