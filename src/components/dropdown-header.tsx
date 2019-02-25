import React, { useContext } from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";
import { ClassNameProps, HTMLProps } from "../contracts";

function extractHTMLProps(props: DropdownHeaderProps): {} {
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

export interface DropdownHeaderProps extends ClassNameProps {
    children?: React.ReactNode;
}

export const DropdownHeader = React.forwardRef<HTMLDivElement, DropdownHeaderProps & HTMLProps<HTMLDivElement>>((props, ref) => {
    const handlerContext = useContext(DropdownContext);
    const htmlElementProps = extractHTMLProps(props);

    return (
        <div
            ref={ref}
            className={classNames(props.className, {
                [props.openClassName || ""]: handlerContext.isOpen,
                [props.closedClassName || ""]: !handlerContext.isOpen,
                [props.disabledClassName || ""]: handlerContext.isDisabled
            })}
            onClick={() => handlerContext.onHeaderClick()}
            {...htmlElementProps}
        >
            {props.children}
        </div>
    );
});
