/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
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
        DropdownOnSectionClickCallback: PropTypes.Validator<any>;
        DropdownOpen: PropTypes.Validator<any>;
    };
    constructor(props: TProps, context: BaseSectionContext);
    static SimplrDropdownBaseHeader(): void;
    /**
     * This callback MUST be called when container element is clicked.
     *
     * @protected
     *
     * @memberOf BaseSection
     */
    protected OnSectionClick(): void;
    /**
     * Gets from DropdownHandler if dropdown is open.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseSection
     */
    protected IsOpen(): boolean;
}
