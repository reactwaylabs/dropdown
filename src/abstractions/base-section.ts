import * as React from "react";
import * as PropTypes from "prop-types";

export type BaseSectionProps = {};

export type BaseSectionState = {};

export interface BaseSectionContext {
    dropdownOnSectionClickCallback: Function;
    dropdownOpen: boolean;
}

export class BaseSection<TProps extends BaseSectionProps, TState extends BaseSectionState>
    extends React.Component<TProps, TState> {
    public context!: BaseSectionContext;

    public static contextTypes: PropTypes.ValidationMap<BaseSectionContext> = {
        dropdownOnSectionClickCallback: PropTypes.func.isRequired,
        dropdownOpen: PropTypes.bool.isRequired
    };

    constructor(props: TProps, context: BaseSectionContext) {
        super(props);

        if (context.dropdownOnSectionClickCallback == null ||
            context.dropdownOpen == null) {
            throw new Error(`simplr-dropdown: (BaseHeader) ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    // tslint:disable-next-line:no-empty
    public static SimplrDropdownBaseHeader(): void { }

    protected GetHTMLProps(props: BaseSectionProps): {} {
        return props;
    }

    /**
     * This callback MUST be called when container element is clicked.
     */
    protected OnSectionClick(): void {
        this.context.dropdownOnSectionClickCallback();
    }

    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    protected IsOpen(): boolean {
        return this.context.dropdownOpen;
    }
}
