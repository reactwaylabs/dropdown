import * as React from "react";

import { BaseHandler, BaseHandlerProps, BaseHandlerState } from "../abstractions/base-handler";
import { HTMLElementProps } from "../contracts";

export interface DropdownHandlerProps extends BaseHandlerProps, HTMLElementProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownHandler>;
}

export class DropdownHandler extends BaseHandler<DropdownHandlerProps, BaseHandlerState> {
    public Element: HTMLDivElement;

    public render(): JSX.Element {
        return <div
            ref={this.SetElementRef}
            {...this.GetHTMLProps(this.props) }
        >
            {this.RenderChildren(this.props.children)}
        </div>;
    }
}
