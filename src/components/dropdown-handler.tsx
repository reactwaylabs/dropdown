import React from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";

import { useDropdownHandler, DropdownHandlerOptions } from "../hooks/use-dropdown-handler";
import { ClassNameProps, DropdownOnOpenHandler, DropdownEventSource } from "../contracts";

export interface DropdownHandlerProps extends ClassNameProps, Partial<DropdownHandlerOptions> {
    children?: React.ReactNode;
    onOpen?: DropdownOnOpenHandler;
    onClose?: DropdownOnOpenHandler;
    toggleOnHeaderClick?: boolean;
    closeOnSectionClick?: boolean;
}

export const DropdownHandler = (_props: DropdownHandlerProps) => {
    const props = {
        toggleOnHeaderClick: true,
        closeOnSectionClick: false,
        closeOnOutsideClick: true,
        closeOnEscapeClick: true,
        ..._props
    };

    const dropdown = useDropdownHandler({
        defaultIsOpen: props.defaultIsOpen,
        isOpen: props.isOpen,
        onToggle: (isOpen, eventSource) => {
            if (props.onToggle != null) {
                props.onToggle(isOpen, eventSource);
            }

            if (props.onOpen != null && props.isOpen) {
                props.onOpen(eventSource);
            }

            if (props.onClose != null && !props.isOpen) {
                props.onClose(eventSource);
            }
        },
        disabled: props.disabled,
        closeOnEscapeClick: props.closeOnEscapeClick,
        closeOnOutsideClick: props.closeOnOutsideClick
    });

    //#region Children clicks
    const onHeaderClick = () => {
        if (!props.toggleOnHeaderClick) {
            return;
        }
        // Toggle open state
        dropdown.updateOpenState(!dropdown.isOpen, DropdownEventSource.HeaderClick);
    };

    const onSectionClick = () => {
        if (!props.closeOnSectionClick || dropdown.isOpen === false) {
            return;
        }

        dropdown.updateOpenState(false, DropdownEventSource.SectionClick);
    };
    //#endregion

    return (
        <div
            ref={dropdown.containerRef as React.RefObject<HTMLDivElement>}
            className={classNames(props.className, {
                [props.openClassName || ""]: dropdown.isOpen,
                [props.closedClassName || ""]: !dropdown.isOpen,
                [props.disabledClassName || ""]: props.disabled
            })}
        >
            <DropdownContext.Provider
                value={{
                    isOpen: dropdown.isOpen,
                    isDisabled: props.disabled || false,
                    onHeaderClick: onHeaderClick,
                    onSectionClick: onSectionClick
                }}
            >
                {props.children}
            </DropdownContext.Provider>
        </div>
    );
};
