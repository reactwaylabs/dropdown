export enum EventSource {
    HeaderClick = 8,
    SectionClick = 16,
    OutsideClick = 24,
    EscapeClick = 32,
    ManualTrigger = 64
}

export type DropdownOnToggleHandler = (isOpen: boolean, source: EventSource) => void;
export type DropdownOnOpenHandler = (source: EventSource) => void;
export type DropdownOnCloseHandler = (source: EventSource) => void;

export interface HTMLElementProps<TElement> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ref?: React.Ref<any>;
}
