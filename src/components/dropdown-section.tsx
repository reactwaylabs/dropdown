import * as React from "react";
import { SectionBase, SectionBaseProps } from "../abstractions/section-base";
import { HTMLElementProps } from "../contracts";

export interface DropdownSectionProps extends HTMLElementProps<HTMLDivElement>, SectionBaseProps {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownSection>;
}

export class DropdownSection extends SectionBase<DropdownSectionProps> {
    public element: HTMLDivElement | null = null;

    private setElementRef = (element: HTMLDivElement | null) => {
        this.element = element;
    };

    protected onContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.stopPropagation();
        this.onSectionClick();

        if (this.props.onClick != null) {
            event.persist();
            this.props.onClick(event);
        }
    };

    public render(): JSX.Element | null {
        if (!this.isOpen()) {
            return null;
        }

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
