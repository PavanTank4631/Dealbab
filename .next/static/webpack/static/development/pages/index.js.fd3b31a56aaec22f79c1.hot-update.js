webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //styling

 //icons & colors





var CATEGORIES = [{
  title: 'All Categories'
}, {
  title: 'Supermarket'
}, {
  title: 'Mobiles & Tablets'
}, {
  title: 'Electronics'
}, {
  title: 'Home'
}, {
  title: 'Beauty'
}, {
  title: 'Baby'
}, {
  title: 'Toys'
}, {
  title: 'Sports'
}, {
  title: 'Brand'
}];

var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_toggleDropDown", function () {
      _this.setState({
        dropdownOpen: !_this.state.dropdownOpen
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSearchBar", function () {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        id: "search-bar"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        placeholder: "What are you looking for?",
        className: "search-input"
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "search-button"
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaSearch"], {
        className: "search-icon"
      }))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSubHeader", function () {
      return __jsx("div", {
        id: "sub-header"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx("ul", null, CATEGORIES.map(function (item, index) {
        return __jsx("li", {
          className: "categories"
        }, __jsx("a", {
          href: "#"
        }, item.title));
      })))));
    });

    _this.state = {
      dropdownOpen: false,
      favIndex: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var favIndex = this.state.favIndex;
      return __jsx("div", {
        className: "header-container"
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "Dealbab"), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300&family=Nunito:wght@600&display=swap",
        rel: "stylesheet"
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        rel: "stylesheet"
      }), __jsx("link", {
        href: "/static/app.css",
        rel: "stylesheet"
      })), __jsx("div", {
        id: "main-header"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_12__["IoIosMenu"], {
        color: _Helper_Constants__WEBPACK_IMPORTED_MODULE_14__["COLORS"].BLACK,
        className: "menu-icon"
      }), __jsx("div", null, __jsx("p", {
        id: "title"
      }, "Dealbab"), __jsx("p", {
        id: "sub-title"
      }, "Explore more")), this.renderSearchBar(), __jsx("div", {
        className: "login-section"
      }, __jsx("p", {
        className: "login"
      }, "Log In")), __jsx("div", {
        className: "favourite-deal"
      }, __jsx("div", null, __jsx("img", {
        src: "/static/images/like.png",
        alt: "404!",
        className: "favourite-img"
      }), __jsx("p", {
        className: "fav-index"
      }, favIndex))), __jsx("p", {
        className: "favourite-text"
      }, "Favourites"), __jsx("div", {
        id: "lng"
      }, __jsx("img", {
        src: "/static/images/en.png",
        alt: "404!",
        className: "lng-icon"
      }), __jsx("p", {
        className: "lng-text"
      }, "en-US"))))), this.renderSubHeader());
    }
    /*
    .##........#######...######...####..######...######.
    .##.......##.....##.##....##...##..##....##.##....##
    .##.......##.....##.##.........##..##.......##......
    .##.......##.....##.##...####..##..##........######.
    .##.......##.....##.##....##...##..##.............##
    .##.......##.....##.##....##...##..##....##.##....##
    .########..#######...######...####..######...######.
    */

  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.fd3b31a56aaec22f79c1.hot-update.js.map