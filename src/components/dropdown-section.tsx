import * as React from "react";
import { SectionBase, SectionBaseProps } from "../abstractions/section-base";

export interface DropdownSectionProps
    extends SectionBaseProps,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export class DropdownSection extends SectionBase<DropdownSectionProps> {
    protected onContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.persist();
        this.onSectionClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    };

    public render(): JSX.Element | null {
        if (!this.isOpen()) {
            return null;
        }

        return <div {...this.getRestProps(this.props)} onClick={this.onContainerClickCallback} />;
    }
}
