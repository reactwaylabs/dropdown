/// <reference types="react" />
import * as React from "react";
import { BaseHandler, BaseHandlerProps, BaseHandlerState } from "../abstractions/base-handler";
import { HTMLElementProps } from "../contracts";
export interface DropdownHandlerProps extends BaseHandlerProps, HTMLElementProps<HTMLDivElement> {
    ref?: React.Ref<DropdownHandler>;
}
export declare class DropdownHandler extends BaseHandler<DropdownHandlerProps, BaseHandlerState> {
    Element: HTMLDivElement;
    render(): JSX.Element;
}
