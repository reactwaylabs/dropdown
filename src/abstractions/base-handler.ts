import * as React from "react";
import * as PropTypes from "prop-types";

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
    public abstract Element: HTMLElement | null;

    public static defaultProps: BaseHandlerProps = {
        toggleOnHeaderClick: true,
        closeOnSectionClick: false,
        closeOnOutsideClick: true,
        closeOnEscapeClick: true
    };

    public static childContextTypes: PropTypes.ValidationMap<BaseHandlerChildContext> = {
        DropdownOpen: PropTypes.bool.isRequired,
        DropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        DropdownOnSectionClickCallback: PropTypes.func.isRequired
    };

    constructor(props: TProps) {
        super(props);
        if (Utils.CanIUseWindowListeners) {
            window.addEventListener("click", this.OnOutsideClick);
            // TODO: Move keyup to listener to handler container
            window.addEventListener("keyup", this.OnWindowKeyUp);
        }

        this.state = {
            Open: this.GetInitialOpenValue()
        } as TState;
    }

    public componentWillReceiveProps(nextProps: TProps): void {
        if (nextProps.open != null &&
            this.props.open !== nextProps.open) {
            this.setState(state => {
                state.Open = nextProps.open!;

                return state;
            });
        }
    }

    public componentWillUnmount(): void {
        if (Utils.CanIUseWindowListeners) {
            window.removeEventListener("click", this.OnOutsideClick);
            window.removeEventListener("keyup", this.OnWindowKeyUp);
        }
    }

    public getChildContext(): BaseHandlerChildContext {
        return {
            DropdownOpen: this.state.Open,
            DropdownOnHeaderClickCallback: this.OnHeaderClick.bind(this),
            DropdownOnSectionClickCallback: this.OnSectionClick.bind(this)
        };
    }

    /**
     * To close dropdown.
     */
    public Close(): void {
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
     */
    public Open(): void {
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
     */
    public IsOpen(): boolean {
        return this.state.Open;
    }

    /**
     * This MUST be used if spread props are being used on element.
     */
    protected GetHTMLProps(props: BaseHandlerProps): {} {
        const {
            closeOnEscapeClick,
            closeOnOutsideClick,
            closeOnSectionClick,
            defaultOpen,
            onClose,
            onOpen,
            onToggle,
            open,
            toggleOnHeaderClick,
            ...restProps
        } = props;

        return restProps;
    }

    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     */
    protected GetInitialOpenValue(): boolean {
        const props: TProps = this.props;
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
     */
    protected IsControlled(): boolean {
        return this.props.open != null;
    }

    /**
     * Checks if passed element is in container element.
     */
    protected IsElementInContainer(element: Element): boolean {
        if (this.Element == null) {
            return false;
        }
        const containerElement: HTMLElement = this.Element;

        return containerElement.contains(element);
    }

    /**
     * Handles window click event.
     */
    protected OnOutsideClick = (event: MouseEvent) => {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnOutsideClick
            || this.IsElementInContainer(event.target as Element)) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.OutsideClick);
        this.UpdateOpenState(open);
    }

    /**
     * Handles window keyboard events.
     */
    private OnWindowKeyUp = (event: KeyboardEvent) => {
        const props: TProps = this.props;
        const open = false;

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
     */
    protected OnHeaderClick(): void {
        const props: TProps = this.props;
        const open = !this.state.Open;

        if (!props.toggleOnHeaderClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.HeaderClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers this method when section is clicked.
     */
    protected OnSectionClick(): void {
        const props: TProps = this.props;
        const open = false;

        if (!props.closeOnSectionClick) {
            return;
        }

        this.TriggerCallbacks(open, Contracts.EventSource.SectionClick);
        this.UpdateOpenState(open);
    }

    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     */
    protected TriggerCallbacks(open: boolean, source: Contracts.EventSource): void {
        const props: TProps = this.props;

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
     */
    protected UpdateOpenState(open: boolean): void {
        if (this.state.Open !== open &&
            !this.IsControlled()) {

            this.setState(state => {
                state.Open = open;
                return state;
            });
        }
    }

    protected SetElementRef = (element: HTMLElement | null) => {
        this.Element = element;
    }

    /**
     * Checks if top children are BaseHeader and BaseSection based components.
     * MUST be used to render children for BaseHandler component.
     * @deprecated
     */
    protected RenderChildren(children: React.ReactNode): React.ReactNode {
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
