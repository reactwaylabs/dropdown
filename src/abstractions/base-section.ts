import * as React from "react";

export interface BaseSectionProps { }

export interface BaseSectionState { }

export interface BaseSectionContext {
    DropdownOnSectionClickCallback: Function;
    DropdownOpen: boolean;
}

export class BaseSection<TProps extends BaseSectionProps, TState extends BaseSectionState>
    extends React.Component<TProps, TState> {
    context: BaseSectionContext;

    static contextTypes = {
        DropdownOnSectionClickCallback: React.PropTypes.func,
        DropdownOpen: React.PropTypes.bool
    };

    constructor(props: TProps, context: BaseSectionContext) {
        super(props);

        if (context.DropdownOnSectionClickCallback == null ||
            context.DropdownOpen == null) {
            throw new Error(`simplr-dropdown: (BaseHeader) ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    static SimplrDropdownBaseHeader() { }

    /**
     * This callback MUST be called when container element is clicked.
     * 
     * @protected
     * 
     * @memberOf BaseSection
     */
    protected OnSectionClick() {
        this.context.DropdownOnSectionClickCallback();
    }

    /**
     * Gets from DropdownHandler if dropdown is open.
     * 
     * @protected
     * @returns 
     * 
     * @memberOf BaseSection
     */
    protected IsOpen() {
        return this.context.DropdownOpen;
    }
}
