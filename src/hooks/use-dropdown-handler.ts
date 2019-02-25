import { RefObject } from "react";

import { useKeyboardKeyUp } from "./use-keyboard-keyup";
import { useWindowClick } from "./use-window-click";
import { useDropdownOpenState } from "./use-dropdown-state";
import { DropdownOnToggleHandler, DropdownEventSource } from "../contracts";
import { ESCAPE_KEYCODE, isElementInContainer } from "../helpers";

export interface DropdownHandlerOptions {
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onToggle?: DropdownOnToggleHandler;
    disabled?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnEscapeClick?: boolean;
    containerRef: RefObject<HTMLElement | undefined>;
}

export interface DropdownHandlerResult {
    updateOpenState: (isOpen: boolean, eventSource: DropdownEventSource) => void;
    isOpen: boolean;
    containerRef: RefObject<HTMLElement | undefined>;
}

export function useDropdownHandler(options: DropdownHandlerOptions): DropdownHandlerResult {
    const [isOpen, setOpen] = useDropdownOpenState(options.isOpen, options.defaultIsOpen);

    const updateOpenState: DropdownOnToggleHandler = (nextOpenState, eventSource) => {
        if (options.disabled) {
            return;
        }

        setOpen(nextOpenState);
        if (options.onToggle != null) {
            options.onToggle(nextOpenState, eventSource);
        }
    };

    //#region Effects
    useKeyboardKeyUp(event => {
        if (!options.closeOnEscapeClick || isOpen === false || event.keyCode !== ESCAPE_KEYCODE) {
            return;
        }

        updateOpenState(false, DropdownEventSource.EscapeClick);
    });
    useWindowClick(event => {
        if (
            !options.closeOnOutsideClick ||
            isElementInContainer(options.containerRef.current, event.target as Element) ||
            isOpen === false
        ) {
            return;
        }

        updateOpenState(false, DropdownEventSource.EscapeClick);
    });
    //#endregion

    return {
        containerRef: options.containerRef,
        isOpen: isOpen,
        updateOpenState: updateOpenState
    };
}
