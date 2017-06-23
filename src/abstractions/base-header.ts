import * as React from "react";
import * as PropTypes from "prop-types";

export type BaseHeaderProps = {};

export type BaseHeaderState = {};

export interface BaseHeaderContext {
    DropdownOnHeaderClickCallback: Function;
}

export class BaseHeader<TProps extends BaseHeaderProps, TState extends BaseHeaderState>
    extends React.Component<TProps, TState> {
    public context: BaseHeaderContext;

    public static contextTypes: PropTypes.ValidationMap<BaseHeaderContext> = {
        DropdownOnHeaderClickCallback: PropTypes.func.isRequired
    };

    constructor(props: TProps, context: BaseHeaderContext) {
        super(props);

        if (context.DropdownOnHeaderClickCallback == null) {
            throw new Error(`simplr-dropdown: ${(this.constructor as any).name}` +
                ` must be inside DropdownHandler component.`);
        }
    }

    // tslint:disable-next-line:no-empty
    public static SimplrDropdownBaseSection(): void { }

    protected GetHTMLProps(props: BaseHeaderProps): {} {
        return props;
    }

    /**
     * This callback MUST be called when container element is clicked.
     */
    protected OnHeaderClick(): void {
        this.context.DropdownOnHeaderClickCallback();
    }
}
