import * as React from "react";
import * as PropTypes from "prop-types";
import * as classNames from "classnames";

import { ClassNameProps } from "../contracts";

// tslint:disable-next-line no-empty-interface
export interface HeaderBaseProps extends ClassNameProps {}

export interface HeaderBaseContext {
    dropdownIsOpen: boolean;
    dropdownIsDisabled: boolean;
    dropdownOnHeaderClickCallback: () => void;
}

export class HeaderBase<TProps extends HeaderBaseProps = {}, TState = {}> extends React.Component<TProps, TState> {
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
        dropdownIsDisabled: PropTypes.bool.isRequired,
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

    protected getRestProps(props: HeaderBaseProps): {} {
        const {
            className,
            closedClassName,
            disabledClassName,
            openClassName,
            ...restProps
        } = props;

        return restProps;
    }

    protected getClassName(props: ClassNameProps): string {
        return classNames(props.className, {
            [props.openClassName || ""]: this.isOpen(),
            [props.closedClassName || ""]: !this.isOpen(),
            [props.disabledClassName || ""]: this.isDisabled()
        });
    }
}
