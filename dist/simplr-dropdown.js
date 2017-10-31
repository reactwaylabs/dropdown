(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PropTypes = __webpack_require__(1);
var Contracts = __webpack_require__(2);
var Utils = __webpack_require__(7);
var BaseHandler = /** @class */ (function (_super) {
    __extends(BaseHandler, _super);
    function BaseHandler(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Handles window click event.
         */
        _this.OnOutsideClick = function (event) {
            var props = _this.props;
            var open = false;
            if (!props.closeOnOutsideClick
                || _this.IsElementInContainer(event.target)) {
                return;
            }
            _this.TriggerCallbacks(open, Contracts.EventSource.OutsideClick);
            _this.UpdateOpenState(open);
        };
        /**
         * Handles window keyboard events.
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
        if (Utils.CanIUseWindowListeners) {
            window.addEventListener("click", _this.OnOutsideClick);
            // TODO: Move keyup to listener to handler container
            window.addEventListener("keyup", _this.OnWindowKeyUp);
        }
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
        if (Utils.CanIUseWindowListeners) {
            window.removeEventListener("click", this.OnOutsideClick);
            window.removeEventListener("keyup", this.OnWindowKeyUp);
        }
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
     */
    BaseHandler.prototype.IsOpen = function () {
        return this.state.Open;
    };
    /**
     * This MUST be used if spread props are being used on element.
     */
    BaseHandler.prototype.GetHTMLProps = function (props) {
        var closeOnEscapeClick = props.closeOnEscapeClick, closeOnOutsideClick = props.closeOnOutsideClick, closeOnSectionClick = props.closeOnSectionClick, defaultOpen = props.defaultOpen, onClose = props.onClose, onOpen = props.onOpen, onToggle = props.onToggle, open = props.open, toggleOnHeaderClick = props.toggleOnHeaderClick, restProps = __rest(props, ["closeOnEscapeClick", "closeOnOutsideClick", "closeOnSectionClick", "defaultOpen", "onClose", "onOpen", "onToggle", "open", "toggleOnHeaderClick"]);
        return restProps;
    };
    /**
     * Initial open state value.
     * By default it gets initial value from props: defaultOpen and open.
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
     */
    BaseHandler.prototype.IsControlled = function () {
        return this.props.open != null;
    };
    /**
     * Checks if passed element is in container element.
     */
    BaseHandler.prototype.IsElementInContainer = function (element) {
        if (this.Element == null) {
            return false;
        }
        var containerElement = this.Element;
        return containerElement.contains(element);
    };
    /**
     * Triggers this method when header is clicked.
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
    BaseHandler.defaultProps = {
        toggleOnHeaderClick: true,
        closeOnSectionClick: false,
        closeOnOutsideClick: true,
        closeOnEscapeClick: true
    };
    BaseHandler.childContextTypes = {
        DropdownOpen: PropTypes.bool.isRequired,
        DropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        DropdownOnSectionClickCallback: PropTypes.func.isRequired
    };
    return BaseHandler;
}(React.Component));
exports.BaseHandler = BaseHandler;


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
var PropTypes = __webpack_require__(1);
var BaseHeader = /** @class */ (function (_super) {
    __extends(BaseHeader, _super);
    function BaseHeader(props, context) {
        var _this = _super.call(this, props) || this;
        if (context.DropdownOnHeaderClickCallback == null) {
            throw new Error("simplr-dropdown: " + _this.constructor.name +
                " must be inside DropdownHandler component.");
        }
        return _this;
    }
    // tslint:disable-next-line:no-empty
    BaseHeader.SimplrDropdownBaseSection = function () { };
    BaseHeader.prototype.GetHTMLProps = function (props) {
        return props;
    };
    /**
     * This callback MUST be called when container element is clicked.
     */
    BaseHeader.prototype.OnHeaderClick = function () {
        this.context.DropdownOnHeaderClickCallback();
    };
    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    BaseHeader.prototype.IsOpen = function () {
        return this.context.DropdownOpen;
    };
    BaseHeader.contextTypes = {
        DropdownOnHeaderClickCallback: PropTypes.func.isRequired,
        DropdownOpen: PropTypes.bool.isRequired
    };
    return BaseHeader;
}(React.Component));
exports.BaseHeader = BaseHeader;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PropTypes = __webpack_require__(1);
var BaseSection = /** @class */ (function (_super) {
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
    // tslint:disable-next-line:no-empty
    BaseSection.SimplrDropdownBaseHeader = function () { };
    BaseSection.prototype.GetHTMLProps = function (props) {
        return props;
    };
    /**
     * This callback MUST be called when container element is clicked.
     */
    BaseSection.prototype.OnSectionClick = function () {
        this.context.DropdownOnSectionClickCallback();
    };
    /**
     * Gets from DropdownHandler if dropdown is open.
     */
    BaseSection.prototype.IsOpen = function () {
        return this.context.DropdownOpen;
    };
    BaseSection.contextTypes = {
        DropdownOnSectionClickCallback: PropTypes.func.isRequired,
        DropdownOpen: PropTypes.bool.isRequired
    };
    return BaseSection;
}(React.Component));
exports.BaseSection = BaseSection;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
var Contracts = __webpack_require__(2);
exports.Contracts = Contracts;
var Helpers = __webpack_require__(11);
exports.Helpers = Helpers;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function UniqueArray(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
exports.UniqueArray = UniqueArray;
exports.CanIUseWindowListeners = (typeof window !== "undefined" &&
    window.addEventListener != null);


/***/ }),
/* 8 */
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
var base_handler_1 = __webpack_require__(3);
var DropdownHandler = /** @class */ (function (_super) {
    __extends(DropdownHandler, _super);
    function DropdownHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownHandler.prototype.render = function () {
        return React.createElement("div", __assign({ ref: this.SetElementRef }, this.GetHTMLProps(this.props)), this.props.children);
    };
    return DropdownHandler;
}(base_handler_1.BaseHandler));
exports.DropdownHandler = DropdownHandler;


/***/ }),
/* 9 */
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
var base_header_1 = __webpack_require__(4);
var DropdownHeader = /** @class */ (function (_super) {
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
        return React.createElement("div", __assign({}, this.GetHTMLProps(this.props), { onClick: this.OnContainerClickCallback }));
    };
    return DropdownHeader;
}(base_header_1.BaseHeader));
exports.DropdownHeader = DropdownHeader;


/***/ }),
/* 10 */
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
var base_section_1 = __webpack_require__(5);
var DropdownSection = /** @class */ (function (_super) {
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
        return React.createElement("div", __assign({}, this.GetHTMLProps(this.props), { onClick: this.OnContainerClickCallback }));
    };
    return DropdownSection;
}(base_section_1.BaseSection));
exports.DropdownSection = DropdownSection;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Contracts = __webpack_require__(2);
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


/***/ })
/******/ ]);
});