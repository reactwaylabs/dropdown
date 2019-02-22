import { useState, useRef, Dispatch, SetStateAction, RefObject } from "react";

import { DropdownOnToggleHandler, DropdownEventSource } from "../contracts";
import { ESCAPE_KEYCODE } from "../helpers";
import { useKeyboardKeyUp } from "./use-keyboard-keyup";
import { useWindowClick } from "./use-window-click";

function useDropdownOpenState(
    isOpen: boolean | undefined = undefined,
    defaultIsOpen: boolean = false,
    disabled: boolean = false
): [boolean, OpenStateUpdater] {
    const [isOpenValue, setOpen] = useState(defaultIsOpen);

    const updater: OpenStateUpdater = value => {
        if (disabled || isOpen != null) {
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

function isElementInContainer(container: HTMLElement | null, element: Element): boolean {
    if (container == null) {
        return false;
    }
    const containerElement: HTMLElement = container;

    return containerElement.contains(element);
}

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
    containerRef: RefObject<HTMLElement>;
}

type RequiredUndefined<TT> = { [TKey in keyof TT]: TT[TKey] | undefined };

export function useDropdownHandler(options: RequiredUndefined<DropdownHandlerOptions>): DropdownHandlerResult {
    const [isOpen, setOpen] = useDropdownOpenState(options.isOpen, options.defaultIsOpen, options.disabled);
    const ref = useRef<HTMLDivElement>(null);

    const updateOpenState: DropdownOnToggleHandler = (nextOpenState, eventSource) => {
        if (options.disabled) {
            return;
        }

        if (options.onToggle != null) {
            options.onToggle(nextOpenState, eventSource);
        }

        setOpen(nextOpenState);
    };

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

    return {
        containerRef: ref,
        isOpen: isOpen,
        updateOpenState: updateOpenState
    };
}
