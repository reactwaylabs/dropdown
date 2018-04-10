import * as React from "react";
import * as PropTypes from "prop-types";

export interface HeaderBaseContext {
    dropdownIsOpen: boolean;
    dropdownIsDisabled: boolean;
    dropdownOnHeaderClickCallback: () => void;
}

export class HeaderBase<TProps = {}, TState = {}> extends React.Component<TProps, TState> {
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
        dropdownIsOpen: PropTypes.bool.isRequired,
        dropdownIsDisabled: PropTypes.bool,
        dropdownOnHeaderClickCallback: PropTypes.func.isRequired
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
        return this.context.dropdownIsOpen;
    }

    protected isDisabled(): boolean {
        return this.context.dropdownIsDisabled;
    }

    protected getRestProps(props: TProps): {} {
        return props;
    }
}
