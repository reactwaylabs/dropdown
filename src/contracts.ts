export enum DropdownEventSource {
    HeaderClick = 8,
    SectionClick = 16,
    OutsideClick = 24,
    EscapeClick = 32,
    ManualTrigger = 64
}

export type DropdownOnToggleHandler = (isOpen: boolean, source: DropdownEventSource) => void;
export type DropdownOnOpenHandler = (source: DropdownEventSource) => void;
export type DropdownOnCloseHandler = (source: DropdownEventSource) => void;

export interface ClassNameProps {
    className?: string;
    openClassName?: string;
    closedClassName?: string;
    disabledClassName?: string;
}
