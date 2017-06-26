/// <reference types="react" />
import * as React from "react";
import { BaseHeader, BaseHeaderProps, BaseHeaderState } from "../abstractions/base-header";
import { HTMLElementProps } from "../contracts";
export interface DropdownHeaderProps extends BaseHeaderProps, HTMLElementProps<HTMLDivElement> {
    ref?: React.Ref<DropdownHeader>;
}
export declare class DropdownHeader extends BaseHeader<DropdownHeaderProps, BaseHeaderState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement>;
    render(): JSX.Element;
}
