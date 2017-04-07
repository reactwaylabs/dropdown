import * as React from "react";

export interface BaseHeaderProps { }

export interface BaseHeaderState { }

export interface BaseHeaderContext {
    DropdownOnHeaderClickCallback: Function;
}

export class BaseHeader<TProps extends BaseHeaderProps, TState extends BaseHeaderState>
    extends React.Component<TProps, TState> {
    context: BaseHeaderContext;

    static contextTypes = {
        DropdownOnHeaderClickCallback: React.PropTypes.func
    };

    constructor(props: TProps, context: BaseHeaderContext) {
        super(props);

        if (context.DropdownOnHeaderClickCallback == null) {
            throw new Error(`simplr-dropdown: ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    static SimplrDropdownBaseSection() { }

    /**
     * This callback MUST be called when container element is clicked.
     * 
     * @protected
     * 
     * @memberOf BaseHeader
     */
    protected OnHeaderClick() {
        this.context.DropdownOnHeaderClickCallback();
    }
}
