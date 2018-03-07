import * as React from "react";
import { HeaderBaseProps, HeaderBase } from "../abstractions/header-base";
import { HTMLElementProps } from "../contracts";

export interface DropdownHeaderProps extends HeaderBaseProps, HTMLElementProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownHeader>;
}

export class DropdownHeader extends HeaderBase<DropdownHeaderProps> {
    protected onContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.persist();
        this.onHeaderClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    };

    public render(): JSX.Element {
        return <div {...this.getRestProps(this.props)} onClick={this.onContainerClickCallback} />;
    }
}
