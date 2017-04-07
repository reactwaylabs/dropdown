(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventSource;
(function (EventSource) {
    EventSource[EventSource["HeaderClick"] = 8] = "HeaderClick";
    EventSource[EventSource["SectionClick"] = 16] = "SectionClick";
    EventSource[EventSource["OutsideClick"] = 24] = "OutsideClick";
    EventSource[EventSource["EscapeClick"] = 32] = "EscapeClick";
})(EventSource = exports.EventSource || (exports.EventSource = {}));
exports.BASE_HEADER_FUNC = "SimplrDropdownBaseHeader";
exports.BASE_SECTION_FUNC = "SimplrDropdownBaseSection";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Contracts = __webpack_require__(1);
var Utils = __webpack_require__(10);
var CHILDREN_ERROR = "simplr-dropdown: (DropdownHandler)"
    + " component must have two components as children: DropdownHeader and DropdownSection.";
var BaseHandler = (function (_super) {
    __extends(BaseHandler, _super);
    function BaseHandler(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Handles window click event.
         *
         * @protected
         *
         * @memberOf BaseHandler
         */
        _this.OnOutsideClick = function (event) {
            var props = _this.props;
            var open = false;
            if (!props.closeOnOutsideClick
                || _this.IsElementInContainer(event.toElement)) {
                return;
            }
            _this.TriggerCallbacks(open, Contracts.EventSource.OutsideClick);
            _this.UpdateOpenState(open);
        };
        /**
         * Handles window keyboard events.
         *
         * @private
         *
         * @memberOf BaseHandler
         */
        _this.OnWindowKeyUp = function (event) {
            var props = _this.props;
            var open = false;
            if (!props.closeOnEscapeClick) {
                return;
            }
            if (event.keyCode === 27 &&
                props.closeOnEscapeClick) {
                _this.TriggerCallbacks(open, Contracts.EventSource.EscapeClick);
                _this.UpdateOpenState(open);
            }
        };
        _this.SetElementRef = function (element) {
            _this.Element = element;
        };
        window.addEventListener("click", _this.OnOutsideClick);
        window.addEventListener("keyup", _this.OnWindowKeyUp);
        _this.state = {
            Open: _this.GetInitialOpenValue()
        };
        return _this;
    }
    BaseHandler.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.open != null &&
            this.props.open !== nextProps.open) {
            this.setState(function (state) {
                state.Open = nextProps.open;
                return state;
            });
        }
    };
    BaseHandler.prototype.componentWillUnmount = function () {
        window.removeEventListener("click", this.OnOutsideClick);
        window.removeEventListener("keyup", this.OnWindowKeyUp);
    };
    BaseHandler.prototype.getChildContext = function () {
        return {
            DropdownOpen: this.state.Open,
            DropdownOnHeaderClickCallback: this.OnHeaderClick.bind(this),
            DropdownOnSectionClickCallback: this.OnSectionClick.bind(this)
        };
    };
    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.Close = function () {
        if (!this.state.Open) {
            return;
        }
        this.setState(function (state) {
            state.Open = false;
            return state;
        });
    };
    /**
     * To close dropdown.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.Open = function () {
        if (this.state.Open) {
            return;
        }
        this.setState(function (state) {
            state.Open = true;
            return state;
        });
    };
    /**
     * Get a boolean if dropdown is open or not.
     *
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.IsOpen = function () {
        return this.state.Open;
    };
    /**
     * This MUST be used if spread props are being used on element.
     *
     * @protected
     * @param {Array<string>} [excludeProps]
     * @returns {Dictionary}
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.GetHTMLProps = function (excludeProps) {
        var notHTMLProps = [
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
        var newProps = {};
        for (var key in this.props) {
            if (this.props[key] != null && notHTMLProps.indexOf(key) === -1) {
                newProps[key] = this.props[key];
            }
        }
        return newProps;
    };
    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.GetInitialOpenValue = function () {
        var props = this.props;
        var open = false;
        if (props.defaultOpen != null) {
            open = props.defaultOpen;
        }
        if (props.open != null) {
            open = props.open;
        }
        return open;
    };
    /**
     * Return true if dropdown is controlled outside of this component.
     *
     * @protected
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.IsControlled = function () {
        return this.props.open != null;
    };
    /**
     * Checks if passed element is in container element.
     *
     * @protected
     * @param {Element} element
     * @returns
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.IsElementInContainer = function (element) {
        var containerElement = this.Element;
        return containerElement.contains(element);
    };
    /**
     * Triggers this method when header is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.OnHeaderClick = function () {
        var props = this.props;
        var open = !this.state.Open;
        if (!props.toggleOnHeaderClick) {
            return;
        }
        this.TriggerCallbacks(open, Contracts.EventSource.HeaderClick);
        this.UpdateOpenState(open);
    };
    /**
     * Triggers this method when section is clicked.
     *
     * @protected
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.OnSectionClick = function () {
        var props = this.props;
        var open = false;
        if (!props.closeOnSectionClick) {
            return;
        }
        this.TriggerCallbacks(open, Contracts.EventSource.SectionClick);
        this.UpdateOpenState(open);
    };
    /**
     * Triggers all callbacks: onOpen, onClose and onToggle.
     *
     * @protected
     * @param {boolean} open
     * @param {Contracts.EventSource} source
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.TriggerCallbacks = function (open, source) {
        var props = this.props;
        if (open && props.onOpen != null) {
            props.onOpen(source);
        }
        if (!open && props.onClose != null) {
            props.onClose(source);
        }
        if (props.onToggle != null) {
            props.onToggle(open, source);
        }
    };
    /**
     * Updates state if dropdown is not controlled.
     *
     * @protected
     * @param {boolean} open
     *
     * @memberOf BaseHandler
     */
    BaseHandler.prototype.UpdateOpenState = function (open) {
        if (this.state.Open !== open &&
            !this.IsControlled()) {
            this.setState(function (state) {
                state.Open = open;
                return state;
            });
        }
    };
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
    BaseHandler.prototype.RenderChildren = function (children) {
        if (React.Children.count(children) !== 2) {
            throw new Error(CHILDREN_ERROR);
        }
        var foundHeader = false;
        var foundSection = false;
        return React.Children.map(children, function (child) {
            if (!foundHeader &&
                Utils.CheckComponentType(child, Contracts.BASE_HEADER_FUNC)) {
                foundHeader = true;
                return child;
            }
            else if (!foundSection &&
                Utils.CheckComponentType(child, Contracts.BASE_SECTION_FUNC)) {
                foundSection = true;
                return child;
            }
            throw new Error(CHILDREN_ERROR);
        });
    };
    return BaseHandler;
}(React.Component));
BaseHandler.defaultProps = {
    toggleOnHeaderClick: true,
    closeOnSectionClick: false,
    closeOnOutsideClick: true,
    closeOnEscapeClick: true
};
BaseHandler.childContextTypes = {
    DropdownOpen: React.PropTypes.bool,
    DropdownOnHeaderClickCallback: React.PropTypes.func,
    DropdownOnSectionClickCallback: React.PropTypes.func
};
exports.BaseHandler = BaseHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseHeader = (function (_super) {
    __extends(BaseHeader, _super);
    function BaseHeader(props, context) {
        var _this = _super.call(this, props) || this;
        if (context.DropdownOnHeaderClickCallback == null) {
            throw new Error("simplr-dropdown: " + _this.constructor.name +
                " must be inside DropdownHandler component.");
        }
        return _this;
    }
    BaseHeader.SimplrDropdownBaseSection = function () { };
    BaseHeader.prototype.OnHeaderClick = function () {
        this.context.DropdownOnHeaderClickCallback();
    };
    return BaseHeader;
}(React.Component));
BaseHeader.contextTypes = {
    DropdownOnHeaderClickCallback: React.PropTypes.func
};
exports.BaseHeader = BaseHeader;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseSection = (function (_super) {
    __extends(BaseSection, _super);
    function BaseSection(props, context) {
        var _this = _super.call(this, props) || this;
        if (context.DropdownOnSectionClickCallback == null ||
            context.DropdownOpen == null) {
            throw new Error("simplr-dropdown: (BaseHeader) " + _this.constructor.name +
                " must be inside DropdownHandler component.");
        }
        return _this;
    }
    BaseSection.SimplrDropdownBaseHeader = function () { };
    BaseSection.prototype.OnSectionClick = function () {
        this.context.DropdownOnSectionClickCallback();
    };
    BaseSection.prototype.IsOpen = function () {
        return this.context.DropdownOpen;
    };
    return BaseSection;
}(React.Component));
BaseSection.contextTypes = {
    DropdownOnSectionClickCallback: React.PropTypes.func,
    DropdownOpen: React.PropTypes.bool
};
exports.BaseSection = BaseSection;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var base_handler_1 = __webpack_require__(2);
var DropdownHandler = (function (_super) {
    __extends(DropdownHandler, _super);
    function DropdownHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownHandler.prototype.render = function () {
        return React.createElement("div", __assign({ ref: this.SetElementRef }, this.GetHTMLProps()), this.RenderChildren(this.props.children));
    };
    return DropdownHandler;
}(base_handler_1.BaseHandler));
exports.DropdownHandler = DropdownHandler;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var base_header_1 = __webpack_require__(3);
var DropdownHeader = (function (_super) {
    __extends(DropdownHeader, _super);
    function DropdownHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OnContainerClickCallback = function (event) {
            event.persist();
            _this.OnHeaderClick();
            if (_this.props.onClick != null) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    DropdownHeader.prototype.render = function () {
        return React.createElement("div", __assign({}, this.props, { onClick: this.OnContainerClickCallback }), this.props.children);
    };
    return DropdownHeader;
}(base_header_1.BaseHeader));
exports.DropdownHeader = DropdownHeader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var base_section_1 = __webpack_require__(4);
var DropdownSection = (function (_super) {
    __extends(DropdownSection, _super);
    function DropdownSection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OnContainerClickCallback = function (event) {
            event.persist();
            _this.OnSectionClick();
            if (_this.props.onClick != null) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    DropdownSection.prototype.render = function () {
        if (!this.IsOpen()) {
            return null;
        }
        return React.createElement("div", __assign({}, this.props, { onClick: this.OnContainerClickCallback }), this.props.children);
    };
    return DropdownSection;
}(base_section_1.BaseSection));
exports.DropdownSection = DropdownSection;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Contracts = __webpack_require__(1);
function ResolveSource(source) {
    return Contracts.EventSource[source];
}
exports.ResolveSource = ResolveSource;
function ParseSourceValue(value) {
    var enumArray = Contracts.EventSource;
    if (enumArray[value] != null) {
        return enumArray[value];
    }
    throw new Error("simplr-dropdown: Value \"" + value + "\" was not found in Source enum");
}
exports.ParseSourceValue = ParseSourceValue;
function CompareSource(value, stringValue) {
    return (Contracts.EventSource[value] === stringValue);
}
exports.CompareSource = CompareSource;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
var Contracts = __webpack_require__(1);
exports.Contracts = Contracts;
var Helpers = __webpack_require__(8);
exports.Helpers = Helpers;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function UniqueArray(arr) {
    var uniqueArr = Array();
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
exports.UniqueArray = UniqueArray;
function CheckComponentType(component, type) {
    var componentType = component.type;
    return (componentType[type] != null);
}
exports.CheckComponentType = CheckComponentType;


/***/ })
/******/ ]);
});