import * as React from "react";
import * as PropTypes from "prop-types";

// tslint:disable-next-line: no-empty-interface
export interface SectionBaseProps {}

// tslint:disable-next-line: no-empty-interface
export interface SectionBaseState {}

export interface SectionBaseContext {
    dropdownOnSectionClickCallback: Function;
    dropdownOpen: boolean;
}

export class SectionBase<
    TProps extends SectionBaseProps = SectionBaseProps,
    TState extends SectionBaseState = SectionBaseState
> extends React.Component<TProps, TState> {
    /**
     * @throws
     */
    constructor(props: TProps, context: SectionBaseContext) {
        super(props);

        if (context.dropdownOnSectionClickCallback == null || context.dropdownOpen == null) {
            throw new Error(
                `simplr-dropdown: (BaseHeader) ${(this.constructor as any).name}` + ` must be inside DropdownHandler component.`
            );
        }
    }

    public context!: SectionBaseContext;

    public static contextTypes: PropTypes.ValidationMap<SectionBaseContext> = {
        dropdownOnSectionClickCallback: PropTypes.func.isRequired,
        dropdownOpen: PropTypes.bool.isRequired
    };

    /**
     * This callback MUST be called when container element is clicked.
     */
    protected onSectionClick(): void {
        this.context.dropdownOnSectionClickCallback();
    }

    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    protected isOpen(): boolean {
        return this.context.dropdownOpen;
    }

    protected getRestProps(props: SectionBaseProps): {} {
        return props;
    }
}
