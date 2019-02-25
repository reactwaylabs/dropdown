import React, { useContext } from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";
import { ClassNameProps, HTMLProps } from "../contracts";

function extractHTMLProps(props: DropdownSectionProps): {} {
    // prettier-ignore
    const {
        children,
        className,
        closedClassName,
        disabledClassName,
        openClassName,
        ...restProps
    } = props;

    return restProps;
}

export interface DropdownSectionProps extends ClassNameProps, HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
}

export const DropdownSection = (props: DropdownSectionProps & HTMLProps<HTMLDivElement>): JSX.Element | null => {
    const handlerContext = useContext(DropdownContext);
    const htmlElementProps = extractHTMLProps(props);

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
            {...htmlElementProps}
        >
            {props.children}
        </div>
    );
};
