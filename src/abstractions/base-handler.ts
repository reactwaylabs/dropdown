import * as React from "react";

import * as Contracts from "../contracts";
import * as Utils from "../utils";

const CHILDREN_ERROR = "simplr-dropdown: (DropdownHandler)"
    + " component must have two components as children: DropdownHeader and DropdownSection.";

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
            DropdownOnHeaderClickCallback: this.OnHeaderClick.bind(this),
            DropdownOnSectionClickCallback: this.OnSectionClick.bind(this)
        };
    }

    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    public Close() {
        if (!this.state.Open) {
            return;
        }

        this.setState(state => {
            state.Open = false;
            return state;
        });
    }

    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    public Open() {
        if (this.state.Open) {
            return;
        }

        this.setState(state => {
            state.Open = true;
            return state;
        });
    }

    /**
     * Get a boolean if dropdown is open or not.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    public IsOpen() {
        return this.state.Open;
    }

    /**
     * This MUST be used if spread props are being used on element.
     *
     * @protected
     * @param {Array<string>} [excludeProps]
     * @returns {Dictionary}
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Return true if dropdown is controlled outside of this component.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected IsControlled() {
        return this.props.open != null;
    }

    /**
     * Checks if passed element is in container element.
     *
     * @protected
     * @param {Element} element
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected IsElementInContainer(element: Element) {
        let containerElement: Element = this.Element;
        return containerElement.contains(element);
    }

    /**
     * Handles window click event.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Handles window keyboard events.
     *
     * @private
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Triggers this method when header is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    protected OnHeaderClick() {
        let props: TProps = this.props;
        let open = !this.state.Open;

        if (!props.toggleOnHeaderClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.HeaderClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers this method when section is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    protected OnSectionClick() {
        let props: TProps = this.props;
        let open = false;

        if (!props.closeOnSectionClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.SectionClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     *
     * @protected
     * @param {boolean} open
     * @param {Contracts.EventSource} source
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Updates state if dropdown is not controlled.
     *
     * @protected
     * @param {boolean} open
     *
     * @memberOf BaseHandler
     */
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

    /**
     * Checks if top children are BaseHeader and BaseSection based components.
     * MUST be used to render children for BaseHandler component.
     *
     * @protected
     * @param {React.ReactNode} children
     * @returns
     *
     * @memberOf BaseHandler
     */
    protected RenderChildren(children: React.ReactNode) {
        if (React.Children.count(children) !== 2) {
            throw new Error(CHILDREN_ERROR);
        }

        let foundHeader = false;
        let foundSection = false;

        return React.Children.map(children, child => {
            if (!foundHeader &&
                Utils.CheckComponentType(child as JSX.Element, Contracts.BASE_HEADER_FUNC)) {
                foundHeader = true;

                return child;
            } else if (!foundSection &&
                Utils.CheckComponentType(child as JSX.Element, Contracts.BASE_SECTION_FUNC)) {
                foundSection = true;

                return child;
            }

            throw new Error(CHILDREN_ERROR);
        });
    }
}
