import * as React from "react";
import { HeaderBaseProps, HeaderBase } from "../abstractions/header-base";

export interface DropdownHeaderProps
    extends HeaderBaseProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

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
