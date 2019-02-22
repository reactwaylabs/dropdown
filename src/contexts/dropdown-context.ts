import { createContext } from "react";

export interface DropdownContextDto {
    isOpen: boolean;
    isDisabled: boolean;
    onHeaderClick: () => void;
    onSectionClick: () => void;
}

export const DropdownContext = createContext<DropdownContextDto>({
    isOpen: false,
    isDisabled: false,
    onHeaderClick: () => undefined,
    onSectionClick: () => undefined
});
