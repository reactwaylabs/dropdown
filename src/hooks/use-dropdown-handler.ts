import { useState, useRef, Dispatch, SetStateAction, RefObject } from "react";

import { DropdownOnToggleHandler, DropdownEventSource } from "../contracts";
import { ESCAPE_KEYCODE, isElementInContainer } from "../helpers";
import { useKeyboardKeyUp } from "./use-keyboard-keyup";
import { useWindowClick } from "./use-window-click";

function useDropdownOpenState(isOpen: boolean | undefined = undefined, defaultIsOpen: boolean = false): [boolean, OpenStateUpdater] {
    const [isOpenValue, setOpen] = useState(defaultIsOpen);

    const updater: OpenStateUpdater = value => {
        if (isOpen != null) {
            return;
        }

        if (typeof value === "function") {
            setOpen(value(isOpenValue));
        } else {
            setOpen(value);
        }
    };

    return [isOpen != null ? isOpen : isOpenValue, updater];
}

type OpenStateUpdater = Dispatch<SetStateAction<boolean>>;

export interface DropdownHandlerOptions {
    defaultIsOpen: boolean;
    isOpen: boolean;
    onToggle: DropdownOnToggleHandler;
    disabled: boolean;
    toggleOnHeaderClick: boolean;
    closeOnOutsideClick: boolean;
    closeOnSectionClick: boolean;
    closeOnEscapeClick: boolean;
}

export interface DropdownHandlerResult {
    updateOpenState: (isOpen: boolean, eventSource: DropdownEventSource) => void;
    isOpen: boolean;
    containerRef: RefObject<HTMLElement | undefined>;
}

type RequiredUndefined<TT> = { [TKey in keyof TT]: TT[TKey] | undefined };

export function useDropdownHandler(options: RequiredUndefined<DropdownHandlerOptions>): DropdownHandlerResult {
    const [isOpen, setOpen] = useDropdownOpenState(options.isOpen, options.defaultIsOpen);
    const ref = useRef<HTMLElement>();

    const updateOpenState: DropdownOnToggleHandler = (nextOpenState, eventSource) => {
        if (options.disabled) {
            return;
        }

        if (options.onToggle != null) {
            options.onToggle(nextOpenState, eventSource);
        }

        setOpen(nextOpenState);
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
