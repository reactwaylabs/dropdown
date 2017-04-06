/// <reference types="react" />
import * as React from "react";
import { BaseHeader, BaseHeaderProps, BaseHeaderState } from "../abstractions/base-header";
export interface DropdownHeaderProps extends BaseHeaderProps, React.HTMLProps<HTMLDivElement> {
    ref?: (component: any) => void;
}
export declare class DropdownHeader extends BaseHeader<DropdownHeaderProps, BaseHeaderState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement>;
    render(): JSX.Element;
}
