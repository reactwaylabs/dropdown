/// <reference types="react" />
export declare enum EventSource {
    HeaderClick = 8,
    SectionClick = 16,
    OutsideClick = 24,
    EscapeClick = 32,
}
export declare const BASE_HEADER_FUNC = "SimplrDropdownBaseHeader";
export declare const BASE_SECTION_FUNC = "SimplrDropdownBaseSection";
export interface HTMLElementProps<TElement> extends React.HTMLProps<TElement> {
    ref?: React.Ref<any>;
    children?: React.ReactNode;
}
