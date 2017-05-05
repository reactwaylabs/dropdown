import * as React from "react";

import { BaseSection, BaseSectionProps, BaseSectionState } from "../abstractions/base-section";

export interface DropdownSectionProps extends BaseSectionProps, React.HTMLProps<HTMLDivElement> {
    // HACK: Workaround of rule "intersection types should be consistent"
    ref?: (component: any) => void;
}

export class DropdownSection extends BaseSection<DropdownSectionProps, BaseSectionState> {
    protected OnContainerClickCallback: React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.persist();
        this.OnSectionClick();

        if (this.props.onClick != null) {
            this.props.onClick(event);
        }
    }

    render() {
        if (!this.IsOpen()) {
            return null;
        }

        return <div
            onClick={this.OnContainerClickCallback}
            {...this.props}
        />;
    }
}
