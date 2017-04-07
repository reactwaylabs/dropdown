/// <reference types="react" />
import * as React from "react";
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
        DropdownOpen: React.Requireable<any>;
        DropdownOnHeaderClickCallback: React.Requireable<any>;
        DropdownOnSectionClickCallback: React.Requireable<any>;
    };
    constructor(props: TProps);
    componentWillReceiveProps(nextProps: TProps): void;
    componentWillUnmount(): void;
    getChildContext(): BaseHandlerChildContext;
    Close(): void;
    Open(): void;
    IsOpen(): TState["Open"];
    protected GetHTMLProps(excludeProps?: Array<string>): Dictionary;
    protected GetInitialOpenValue(): boolean;
    protected IsControlled(): boolean;
    protected IsElementInContainer(element: Element): boolean;
    protected OnOutsideClick: (event: MouseEvent) => void;
    private OnWindowKeyUp;
    protected OnHeaderClick: () => void;
    protected OnSectionClick: () => void;
    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource): void;
    protected UpdateOpenState(open: boolean): void;
    protected SetElementRef: (element: any) => void;
}
