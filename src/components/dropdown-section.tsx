import * as React from "react";

import { BaseSection, BaseSectionProps, BaseSectionState } from "../abstractions/base-section";
import { HTMLElementProps } from "../contracts";

export interface DropdownSectionProps extends BaseSectionProps, HTMLElementProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: React.Ref<DropdownSection>;
}

export class DropdownSection extends BaseSection<DropdownSectionProps, BaseSectionState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = event => {
        event.persist();
        this.OnSectionClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    }

    public render(): JSX.Element | null {
        if (!this.IsOpen()) {
            return null;
        }

        return <div
            {...this.GetHTMLProps(this.props) }
            onClick={this.OnContainerClickCallback}
        />;
    }
}
