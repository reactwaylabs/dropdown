import React, { createRef, useState } from "react";
import classNames from "classnames";

import { DropdownContext } from "../contexts/dropdown-context";

import { useKeyboardKeyUp } from "../hooks/use-keyboard-keyup";
import { useWindowClick } from "../hooks/use-window-click";
import { DropdownOnOpenHandler, DropdownOnToggleHandler, DropdownEventSource, ClassNameProps } from "../contracts";
import { ESCAPE_KEYCODE } from "../helpers";

export interface DropdownHandlerProps extends ClassNameProps {
    children: React.ReactNode;
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onOpen?: DropdownOnOpenHandler;
    onClose?: DropdownOnOpenHandler;
    onToggle?: DropdownOnToggleHandler;
    disabled?: boolean;
    toggleOnHeaderClick?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnSectionClick?: boolean;
    closeOnEscapeClick?: boolean;
}

export const DropdownHandler = (props: DropdownHandlerProps) => {
    const ref = createRef<HTMLDivElement>();
    const [isOpen, setOpen] = useState(false);

    const isControlled: boolean = props.isOpen != null;
    const triggerCallbacks = (nextOpenState: boolean, eventSource: DropdownEventSource): void => {
        if (props.disabled) {
            return;
        }

        if (nextOpenState && props.onOpen != null) {
            props.onOpen(eventSource);
        }

        if (!nextOpenState && props.onClose != null) {
            props.onClose(eventSource);
        }

        if (props.onToggle != null) {
            props.onToggle(nextOpenState, eventSource);
        }
    };

    const isElementInContainer = (element: Element): boolean => {
        if (ref.current == null) {
            return false;
        }
        const containerElement: HTMLElement = ref.current;

        return containerElement.contains(element);
    };

    const updateOpenState = (nextOpenState: boolean): void => {
        if (isOpen !== nextOpenState && !isControlled && !props.disabled) {
            setOpen(nextOpenState);
        }
    };

    //#region Effects
    useKeyboardKeyUp(event => {
        if (!props.closeOnEscapeClick || isOpen === false || event.keyCode !== ESCAPE_KEYCODE) {
            return;
        }

        triggerCallbacks(false, DropdownEventSource.EscapeClick);
        updateOpenState(false);
    });
    useWindowClick(event => {
        if (!props.closeOnOutsideClick || isElementInContainer(event.target as Element) || isOpen === false) {
            return;
        }

        triggerCallbacks(false, DropdownEventSource.OutsideClick);
        updateOpenState(false);
    });
    //#endregion

    //#region Children clicks
    const onHeaderClick = () => {
        if (!props.toggleOnHeaderClick) {
            return;
        }

        // Toggle open state
        triggerCallbacks(isOpen, DropdownEventSource.HeaderClick);
        updateOpenState(isOpen);
    };

    const onSectionClick = () => {
        if (!props.closeOnSectionClick || isOpen === false) {
            return;
        }

        triggerCallbacks(false, DropdownEventSource.SectionClick);
        updateOpenState(false);
    };
    //#endergion

    return (
        <div
            ref={ref}
            className={classNames(props.className, {
                [props.openClassName || ""]: isOpen,
                [props.closedClassName || ""]: !isOpen,
                [props.disabledClassName || ""]: props.disabled
            })}
        >
            <DropdownContext.Provider
                value={{
                    isOpen: isOpen,
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
