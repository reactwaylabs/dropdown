/// <reference types="react" />
import * as React from "react";
export interface BaseHeaderProps {
}
export interface BaseHeaderState {
}
export interface BaseHeaderContext {
    DropdownOnHeaderClickCallback: Function;
}
export declare class BaseHeader<TProps extends BaseHeaderProps, TState extends BaseHeaderState> extends React.Component<TProps, TState> {
    context: BaseHeaderContext;
    static contextTypes: {
        DropdownOnHeaderClickCallback: React.Requireable<any>;
    };
    constructor(props: TProps, context: BaseHeaderContext);
    static SimplrDropdownBaseSection(): void;
    /**
     * This callback MUST be called when container element is clicked.
     *
     * @protected
     *
     * @memberOf BaseHeader
     */
    protected OnHeaderClick(): void;
}
