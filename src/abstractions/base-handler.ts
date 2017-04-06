import * as React from "react";

import * as Contracts from "../contracts";
import * as Utils from "../utils";

export interface Dictionary {
    [key: string]: any;
}

export interface BaseHandlerProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpen?: (source: Contracts.EventSource) => void;
    onClose?: (source: Contracts.EventSource) => void;
    onToggle?: (isOpened: boolean, source: Contracts.EventSource) => void;
    toggleOnHeaderClick?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnSectionClick?: boolean;
    closeOnEscapeClick?: boolean;
}

export interface BaseHandlerState {
    Open: boolean;
}

export interface BaseHandlerChildContext {
    DropdownOpen: boolean;
    DropdownOnHeaderClickCallback: Function;
    DropdownOnSectionClickCallback: Function;
}

export abstract class BaseHandler<TProps extends BaseHandlerProps, TState extends BaseHandlerState>
    extends React.Component<TProps, TState> {
    abstract Element: any;

    static defaultProps: BaseHandlerProps = {
        toggleOnHeaderClick: true,
        closeOnSectionClick: false,
        closeOnOutsideClick: true,
        closeOnEscapeClick: true
    };

    static childContextTypes = {
        DropdownOpen: React.PropTypes.bool,
        DropdownOnHeaderClickCallback: React.PropTypes.func,
        DropdownOnSectionClickCallback: React.PropTypes.func
    };

    constructor(props: TProps) {
        super(props);
        window.addEventListener("click", this.OnOutsideClick);
        window.addEventListener("keyup", this.OnWindowKeyUp);

        this.state = {
            Open: this.GetInitialOpenValue()
        } as TState;
    }

    componentWillReceiveProps(nextProps: TProps) {
        if (nextProps.open != null &&
            this.props.open !== nextProps.open) {
            this.setState(state => {
                state.Open = nextProps.open!;

                return state;
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.OnOutsideClick);
        window.removeEventListener("keyup", this.OnWindowKeyUp);
    }

    getChildContext(): BaseHandlerChildContext {
        return {
            DropdownOpen: this.state.Open,
            DropdownOnHeaderClickCallback: this.OnHeaderClick,
            DropdownOnSectionClickCallback: this.OnSectionClick
        };
    }

    public Close() {
        if (!this.state.Open) {
            return;
        }

        this.setState(state => {
            state.Open = false;
            return state;
        });
    }

    public Open() {
        if (this.state.Open) {
            return;
        }

        this.setState(state => {
            state.Open = true;
            return state;
        });
    }

    public IsOpen() {
        return this.state.Open;
    }

    protected GetHTMLProps(excludeProps?: Array<string>): Dictionary {
        let notHTMLProps: string[] = [
            "defaultOpen",
            "open",
            "onOpen",
            "onClose",
            "onToggle",
            "toggleOnHeaderClick",
            "closeOnOutsideClick",
            "closeOnSectionClick",
            "closeOnEscapeClick"
        ];

        if (excludeProps != null) {
            notHTMLProps = Utils.UniqueArray(notHTMLProps.concat(excludeProps));
        }

        let newProps: { [id: string]: any } = {};

        for (let key in this.props) {
            if ((this.props as Dictionary)[key] != null && notHTMLProps.indexOf(key) === -1) {
                newProps[key] = (this.props as Dictionary)[key];
            }
        }

        return newProps;
    }

    protected GetInitialOpenValue() {
        let props: TProps = this.props;
        let open = false;

        if (props.defaultOpen != null) {
            open = props.defaultOpen;
        }

        if (props.open != null) {
            open = props.open;
        }

        return open;
    }

    protected IsControlled() {
        return this.props.open != null;
    }

    protected IsElementInContainer(element: Element) {
        let containerElement: Element = this.Element;
        return containerElement.contains(element);
    }

    protected OnOutsideClick = (event: MouseEvent) => {
        let props: TProps = this.props;
        let open = false;

        if (!props.closeOnOutsideClick
            || this.IsElementInContainer(event.toElement)) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.OutsideClick);
        this.UpdateOpenState(open);
    }

    private OnWindowKeyUp = (event: KeyboardEvent) => {
        let props: TProps = this.props;
        let open = false;

        if (!props.closeOnEscapeClick) {
            return;
        }

        if (event.keyCode === 27 &&
            props.closeOnEscapeClick) {

            this.TriggerCallbacks(open, Contracts.EventSource.EscapeClick);
            this.UpdateOpenState(open);
        }
    }

    protected OnHeaderClick = () => {
        let props: TProps = this.props;
        let open = !this.state.Open;

        if (!props.toggleOnHeaderClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.HeaderClick);
        this.UpdateOpenState(open);
    }

    protected OnSectionClick = () => {
        let props: TProps = this.props;
        let open = false;

        if (!props.closeOnSectionClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.SectionClick);
        this.UpdateOpenState(open);
    }

    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource) {
        let props: TProps = this.props;

        if (open && props.onOpen != null) {
            props.onOpen(source);
        }
        if (!open && props.onClose != null) {
            props.onClose(source);
        }
        if (props.onToggle != null) {
            props.onToggle(open, source);
        }
    }

    protected UpdateOpenState(open: boolean) {
        if (this.state.Open !== open &&
            !this.IsControlled()) {

            this.setState(state => {
                state.Open = open;
                return state;
            });
        }
    }

    protected SetElementRef = (element: any) => {
        this.Element = element;
    }
}
