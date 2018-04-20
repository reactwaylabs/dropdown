import * as React from "react";
import { HeaderBase, HeaderBaseProps } from "../abstractions/header-base";
import { HTMLElementProps } from "../contracts";

export interface DropdownHeaderProps extends HTMLElementProps<HTMLDivElement>, HeaderBaseProps {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownHeader>;
}

export class DropdownHeader extends HeaderBase<DropdownHeaderProps> {
    public element: HTMLDivElement | null = null;

    private setElementRef = (element: HTMLDivElement | null) => {
        this.element = element;
    };

    protected onContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.stopPropagation();
        this.onHeaderClick();

        if (this.props.onClick != null) {
            event.persist();
            this.props.onClick(event);
        }
    };

    public render(): JSX.Element {
        return (
            <div
                {...this.getRestProps(this.props)}
                ref={this.setElementRef}
                onClick={this.onContainerClickCallback}
                className={this.getClassName(this.props)}
            />
        );
    }
}
