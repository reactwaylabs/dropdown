/// <reference types="react" />
import * as React from "react";
import { BaseSection, BaseSectionProps, BaseSectionState } from "../abstractions/base-section";
import { HTMLElementProps } from "../contracts";
export interface DropdownSectionProps extends BaseSectionProps, HTMLElementProps<HTMLDivElement> {
    ref?: React.Ref<DropdownSection>;
}
export declare class DropdownSection extends BaseSection<DropdownSectionProps, BaseSectionState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement>;
    render(): JSX.Element | null;
}
