/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export declare type BaseHeaderProps = {};
export declare type BaseHeaderState = {};
export interface BaseHeaderContext {
    DropdownOnHeaderClickCallback: Function;
    DropdownOpen: boolean;
}
export declare class BaseHeader<TProps extends BaseHeaderProps, TState extends BaseHeaderState> extends React.Component<TProps, TState> {
    context: BaseHeaderContext;
    static contextTypes: PropTypes.ValidationMap<BaseHeaderContext>;
    constructor(props: TProps, context: BaseHeaderContext);
    static SimplrDropdownBaseSection(): void;
    protected GetHTMLProps(props: BaseHeaderProps): {};
    /**
     * This callback MUST be called when container element is clicked.
     */
    protected OnHeaderClick(): void;
    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    protected IsOpen(): boolean;
}
