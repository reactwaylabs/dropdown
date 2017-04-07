/// <reference types="react" />
import * as React from "react";
export interface BaseSectionProps {
}
export interface BaseSectionState {
}
export interface BaseSectionContext {
    DropdownOnSectionClickCallback: Function;
    DropdownOpen: boolean;
}
export declare class BaseSection<TProps extends BaseSectionProps, TState extends BaseSectionState> extends React.Component<TProps, TState> {
    context: BaseSectionContext;
    static contextTypes: {
        DropdownOnSectionClickCallback: React.Requireable<any>;
        DropdownOpen: React.Requireable<any>;
    };
    constructor(props: TProps, context: BaseSectionContext);
    static SimplrDropdownBaseHeader(): void;
    protected OnSectionClick(): void;
    protected IsOpen(): boolean;
}
