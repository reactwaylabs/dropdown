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
    abstract Element: any;
    static defaultProps: BaseHandlerProps;
    static childContextTypes: {
        DropdownOpen: PropTypes.Validator<any>;
        DropdownOnHeaderClickCallback: PropTypes.Validator<any>;
        DropdownOnSectionClickCallback: PropTypes.Validator<any>;
    };
    constructor(props: TProps);
    componentWillReceiveProps(nextProps: TProps): void;
    componentWillUnmount(): void;
    getChildContext(): BaseHandlerChildContext;
    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    Close(): void;
    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    Open(): void;
    /**
     * Get a boolean if dropdown is open or not.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    IsOpen(): TState["Open"];
    /**
     * This MUST be used if spread props are being used on element.
     *
     * @protected
     * @param {Array<string>} [excludeProps]
     * @returns {Dictionary}
     *
     * @memberOf BaseHandler
     */
    protected GetHTMLProps(excludeProps?: Array<string>): Dictionary;
    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected GetInitialOpenValue(): boolean;
    /**
     * Return true if dropdown is controlled outside of this component.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected IsControlled(): boolean;
    /**
     * Checks if passed element is in container element.
     *
     * @protected
     * @param {Element} element
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected IsElementInContainer(element: Element): boolean;
    /**
     * Handles window click event.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    protected OnOutsideClick: (event: MouseEvent) => void;
    /**
     * Handles window keyboard events.
     *
     * @private
     *
     * @memberOf BaseHandler
     */
    private OnWindowKeyUp;
    /**
     * Triggers this method when header is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    protected OnHeaderClick(): void;
    /**
     * Triggers this method when section is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    protected OnSectionClick(): void;
    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     *
     * @protected
     * @param {boolean} open
     * @param {Contracts.EventSource} source
     *
     * @memberOf BaseHandler
     */
    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource): void;
    /**
     * Updates state if dropdown is not controlled.
     *
     * @protected
     * @param {boolean} open
     *
     * @memberOf BaseHandler
     */
    protected UpdateOpenState(open: boolean): void;
    protected SetElementRef: (element: any) => void;
    /**
     * Checks if top children are BaseHeader and BaseSection based components.
     * MUST be used to render children for BaseHandler component.
     *
     * @protected
     * @param {React.ReactNode} children
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected RenderChildren(children: React.ReactNode): React.ReactChild[];
}
