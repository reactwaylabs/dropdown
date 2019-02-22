import React, { useContext } from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";
import { ClassNameProps } from "../contracts";

export interface DropdownHeaderProps extends ClassNameProps {
    children?: React.ReactNode;
}

export const DropdownHeader = (props: DropdownHeaderProps): JSX.Element => {
    const handlerContext = useContext(DropdownContext);

    return (
        <div
            className={classNames(props.className, {
                [props.openClassName || ""]: handlerContext.isOpen,
                [props.closedClassName || ""]: !handlerContext.isOpen,
                [props.disabledClassName || ""]: handlerContext.isDisabled
            })}
            onClick={() => handlerContext.onHeaderClick()}
        >
            {props.children}
        </div>
    );
};
