import { useState, Dispatch, SetStateAction } from "react";

export type OpenStateUpdater = Dispatch<SetStateAction<boolean>>;

export function useDropdownOpenState(isOpen: boolean | undefined = undefined, defaultIsOpen: boolean = false): [boolean, OpenStateUpdater] {
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

