import * as React from "react";

export interface BaseHeaderProps { }

export interface BaseHeaderState { }

export interface BaseHeaderContext {
    DropdownOnHeaderClickCallback: Function;
}

export class BaseHeader<TProps extends BaseHeaderProps, TState extends BaseHeaderState>
    extends React.Component<TProps, TState> {
    context: BaseHeaderContext;

    constructor(props: TProps) {
        super(props);

        if (this.context.DropdownOnHeaderClickCallback == null) {
            throw new Error(`simplr-dropdown: ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    static contextTypes = {
        DropdownOnHeaderClickCallback: React.PropTypes.func
    };

    protected OnHeaderClick() {
        this.context.DropdownOnHeaderClickCallback();
    }
}
