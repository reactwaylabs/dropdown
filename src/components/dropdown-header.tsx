import * as React from "react";

import { BaseHeader, BaseHeaderProps, BaseHeaderState } from "../abstractions/base-header";

export interface DropdownHeaderProps extends BaseHeaderProps, React.HTMLProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: (component: any) => void;
}

export class DropdownHeader extends BaseHeader<DropdownHeaderProps, BaseHeaderState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.persist();
        this.OnHeaderClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    }

    render() {
        return <div
            onClick={this.OnContainerClickCallback}
            {...this.props}
        />;
    }
}
