import { useRef, RefObject } from "react";

import { useKeyboardKeyUp } from "./use-keyboard-keyup";
import { useWindowClick } from "./use-window-click";
import { useDropdownOpenState } from "./use-dropdown-state";
import { DropdownOnToggleHandler, DropdownEventSource, RequiredUndefined } from "../contracts";
import { ESCAPE_KEYCODE, isElementInContainer } from "../helpers";

export interface DropdownHandlerOptions {
    defaultIsOpen: boolean;
    isOpen: boolean;
    onToggle: DropdownOnToggleHandler;
    disabled: boolean;
    closeOnOutsideClick: boolean;
    closeOnEscapeClick: boolean;
}

export interface DropdownHandlerResult {
    updateOpenState: (isOpen: boolean, eventSource: DropdownEventSource) => void;
    isOpen: boolean;
    containerRef: RefObject<HTMLElement | undefined>;
}

export function useDropdownHandler(options: RequiredUndefined<DropdownHandlerOptions>): DropdownHandlerResult {
    const [isOpen, setOpen] = useDropdownOpenState(options.isOpen, options.defaultIsOpen);
    const ref = useRef<HTMLElement>();

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
        if (!options.closeOnOutsideClick || isElementInContainer(ref.current, event.target as Element) || isOpen === false) {
            return;
        }

        updateOpenState(false, DropdownEventSource.EscapeClick);
    });
    //#endregion

    return {
        containerRef: ref,
        isOpen: isOpen,
        updateOpenState: updateOpenState
    };
}
