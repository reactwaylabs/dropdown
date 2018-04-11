import * as React from "react";
import * as PropTypes from "prop-types";
import * as classNames_ from "classnames";
const classNames = classNames_;

import { ClassNameProps } from "../contracts";

// tslint:disable-next-line no-empty-interface
export interface SectionBaseProps extends ClassNameProps {}

export interface SectionBaseContext {
    dropdownIsOpen: boolean;
    dropdownIsDisabled: boolean;
    dropdownOnSectionClickCallback: () => void;
}

export class SectionBase<TProps extends SectionBaseProps = {}, TState = {}> extends React.Component<TProps, TState> {
    /**
     * @throws
     */
    constructor(props: TProps, context: SectionBaseContext) {
        super(props);

        if (context.dropdownOnSectionClickCallback == null || context.dropdownIsOpen == null) {
            throw `simplr-dropdown: (BaseHeader) "${this.constructor.name}" must be inside DropdownHandler component.`;
        }
    }

    public context!: SectionBaseContext;

    public static contextTypes: PropTypes.ValidationMap<SectionBaseContext> = {
        dropdownOnSectionClickCallback: PropTypes.func.isRequired,
        dropdownIsDisabled: PropTypes.bool.isRequired,
        dropdownIsOpen: PropTypes.bool.isRequired
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
        return this.context.dropdownIsOpen;
    }

    protected isDisabled(): boolean {
        return this.context.dropdownIsDisabled;
    }

    protected getRestProps(props: SectionBaseProps): {} {
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
