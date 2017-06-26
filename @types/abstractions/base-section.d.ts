/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export declare type BaseSectionProps = {};
export declare type BaseSectionState = {};
export interface BaseSectionContext {
    DropdownOnSectionClickCallback: Function;
    DropdownOpen: boolean;
}
export declare class BaseSection<TProps extends BaseSectionProps, TState extends BaseSectionState> extends React.Component<TProps, TState> {
    context: BaseSectionContext;
    static contextTypes: PropTypes.ValidationMap<BaseSectionContext>;
    constructor(props: TProps, context: BaseSectionContext);
    static SimplrDropdownBaseHeader(): void;
    protected GetHTMLProps(props: BaseSectionProps): {};
    /**
     * This callback MUST be called when container element is clicked.
     */
    protected OnSectionClick(): void;
    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    protected IsOpen(): boolean;
}
