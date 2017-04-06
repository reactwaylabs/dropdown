/// <reference types="react" />
import * as React from "react";
import { BaseHandler, BaseHandlerProps, BaseHandlerState } from "../abstractions/base-handler";
export interface DropdownHandlerProps extends BaseHandlerProps, React.HTMLProps<HTMLDivElement> {
    ref?: (component: any) => void;
}
export declare class DropdownHandler extends BaseHandler<DropdownHandlerProps, BaseHandlerState> {
    Element: HTMLDivElement;
    render(): JSX.Element;
}
