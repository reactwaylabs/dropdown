import * as React from "react";

import { BaseHandler, BaseHandlerProps, BaseHandlerState } from "../abstractions/base-handler";

export interface DropdownHandlerProps extends BaseHandlerProps, React.HTMLProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: (component: any) => void;
}

export class DropdownHandler extends BaseHandler<DropdownHandlerProps, BaseHandlerState> {
    Element: HTMLDivElement;

    render() {
        return <div
            ref={this.SetElementRef}
            {...this.GetHTMLProps() }
        >
            {this.props.children}
        </div>;
    }
}
