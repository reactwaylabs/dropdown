import React, { useContext } from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";
import { ClassNameProps } from "../contracts";

export interface DropdownSectionProps extends ClassNameProps {
    children?: React.ReactNode;
}

export const DropdownSection = (props: DropdownSectionProps): JSX.Element | null => {
    const handlerContext = useContext(DropdownContext);

    if (!handlerContext.isOpen) {
        return null;
    }

    return (
        <div
            className={classNames(props.className, {
                [props.openClassName || ""]: handlerContext.isOpen,
                [props.closedClassName || ""]: !handlerContext.isOpen,
                [props.disabledClassName || ""]: handlerContext.isDisabled
            })}
            onClick={() => handlerContext.onSectionClick()}
        >
            {props.children}
        </div>
    );
};
