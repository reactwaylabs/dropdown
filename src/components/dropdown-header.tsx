import * as React from "react";

import { BaseHeader, BaseHeaderProps, BaseHeaderState } from "../abstractions/base-header";
import { HTMLElementProps } from "../contracts";

export interface DropdownHeaderProps extends BaseHeaderProps, HTMLElementProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownHeader>;
}

export class DropdownHeader extends BaseHeader<DropdownHeaderProps, BaseHeaderState> {
    protected onContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.persist();
        this.OnHeaderClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    }

    public render(): JSX.Element {
        return <div
            {...this.GetHTMLProps(this.props) }
            onClick={this.onContainerClickCallback}
        />;
    }
}
