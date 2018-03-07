import * as React from "react";
import { HandlerBase, HandlerBaseProps } from "../abstractions/handler-base";
import { HTMLElementProps } from "../contracts";

export interface DropdownHandlerProps extends HandlerBaseProps, HTMLElementProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownHandler>;
}

export class DropdownHandler extends HandlerBase<DropdownHandlerProps> {
    public element: HTMLElement | null = null;

    private setElementRef = (element: HTMLDivElement | null) => {
        this.element = element;
    };

    public render(): JSX.Element {
        return (
            <div {...this.getRestProps(this.props)} ref={this.setElementRef}>
                {this.props.children}
            </div>
        );
    }
}
