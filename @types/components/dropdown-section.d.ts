/// <reference types="react" />
import * as React from "react";
import { BaseSection, BaseSectionProps, BaseSectionState } from "../abstractions/base-section";
export interface DropdownSectionProps extends BaseSectionProps, React.HTMLProps<HTMLDivElement> {
    ref?: (component: any) => void;
}
export declare class DropdownSection extends BaseSection<DropdownSectionProps, BaseSectionState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement>;
    render(): JSX.Element | null;
}
