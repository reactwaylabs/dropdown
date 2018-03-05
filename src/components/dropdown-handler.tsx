import * as React from "react";
import { HandlerBase, HandlerBaseProps } from "../abstractions/handler-base";

// tslint:disable-next-line: no-empty-interface
export interface DropdownHandlerProps
    extends HandlerBaseProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

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
