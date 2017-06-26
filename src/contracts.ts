export enum EventSource {
    HeaderClick = 8,
    SectionClick = 16,
    OutsideClick = 24,
    EscapeClick = 32
}

export const BASE_HEADER_FUNC = "SimplrDropdownBaseHeader";
export const BASE_SECTION_FUNC = "SimplrDropdownBaseSection";

export interface HTMLElementProps<TElement> extends React.HTMLProps<TElement> {
    // When extending HTMLProps interface there is an Element ref and it is not overriden by component ref.
    ref?: React.Ref<any>;
    children?: React.ReactNode;
}
