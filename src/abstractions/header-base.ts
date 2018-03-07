import * as React from "react";
import * as PropTypes from "prop-types";

// tslint:disable-next-line: no-empty-interface
export interface HeaderBaseProps {}

// tslint:disable-next-line: no-empty-interface
export interface HeaderBaseState {}

export interface HeaderBaseContext {
    dropdownOnHeaderClickCallback: Function;
    dropdownOpen: boolean;
}

export class HeaderBase<TProps extends HeaderBaseProps = {}, TState extends HeaderBaseState = {}> extends React.Component<TProps, TState> {
    /**
     * @throws
     */
    constructor(props: TProps, context: HeaderBaseContext) {
        super(props, context);

        if (context.dropdownOnHeaderClickCallback == null) {
            throw `simplr-dropdown: (HeaderBase) "${this.constructor.name}" must be inside DropdownHandler component.`;
        }
    }

    public context!: HeaderBaseContext;

    public static contextTypes: PropTypes.ValidationMap<HeaderBaseContext> = {
        dropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        dropdownOpen: PropTypes.bool.isRequired
    };

    /**
     * This callback MUST be called when container element is clicked.
     */
    protected onHeaderClick(): void {
        this.context.dropdownOnHeaderClickCallback();
    }

    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    protected isOpen(): boolean {
        return this.context.dropdownOpen;
    }

    protected getRestProps(props: HeaderBaseProps): {} {
        return props;
    }
}
