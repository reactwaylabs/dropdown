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

    constructor(props: TProps) {
        super(props);

        if (this.context.DropdownOnSectionClickCallback == null ||
            this.context.DropdownOpen == null) {
            throw new Error(`simplr-dropdown: (BaseHeader) ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    protected OnSectionClick() {
        this.context.DropdownOnSectionClickCallback();
    }

    protected IsOpen() {
        return this.context.DropdownOpen;
    }
}
