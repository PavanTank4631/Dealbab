webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 //styling

 //icons & colors






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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_toggleNavbar", function () {
      _this.setState({
        isCollapse: !_this.state.isCollapse
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSearchBar", function () {
      var t = _this.props.t;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        id: "search-bar"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: t('search-placeholder'),
        className: "search-input"
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroupAddon"], {
        addonType: _this.props.isArabic ? "prepend" : "append"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "search-button"
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaSearch"], {
        className: "search-icon"
      }))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSubHeader", function () {
      var isCollapse = _this.state.isCollapse;
      var t = _this.props.t;
      return __jsx("div", {
        id: "sub-header"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
        expand: "lg",
        id: "sub-header-navbar"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavbarBrand"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('all-category'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavbarToggler"], {
        onClick: _this._toggleNavbar
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
        isOpen: isCollapse,
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        className: "mr-auto",
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "/components/"
      }, t('category1'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category2'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category3'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category4'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category5'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category6'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category7'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category8'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        href: "#"
      }, t('category9'))))))));
    });

    _this.state = {
      dropdownOpen: false,
      favIndex: 0,
      CATEGORIES: [{
        title: props.t('all-category')
      }, {
        title: props.t('category1')
      }, {
        title: props.t('category2')
      }, {
        title: props.t('category3')
      }, {
        title: props.t('category4')
      }, {
        title: props.t('category5')
      }, {
        title: props.t('category6')
      }, {
        title: props.t('category7')
      }, {
        title: props.t('category8')
      }, {
        title: props.t('category9')
      }],
      isCollapse: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var favIndex = this.state.favIndex;
      var t = this.props.t;
      return __jsx("div", {
        className: "header-container"
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "Dealbab"), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300&family=Nunito:wght@600&family=Nunito:wght@900&family=Nunito:wght@800&display=swap",
        rel: "stylesheet"
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        rel: "stylesheet"
      }), __jsx("link", {
        href: "/static/app.css",
        rel: "stylesheet"
      })), __jsx("div", {
        id: "main-header"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosMenu"], {
        color: _Helper_Constants__WEBPACK_IMPORTED_MODULE_15__["COLORS"].BLACK,
        className: "menu-icon"
      }), __jsx("img", {
        src: "/static/images/logo.jpg",
        alt: "404!"
      }), this.renderSearchBar(), __jsx("div", {
        className: "login-section"
      }, __jsx("p", {
        className: "login"
      }, t('login'))), __jsx("div", {
        className: "favourite-deal"
      }, __jsx("div", null, __jsx("img", {
        src: "/static/images/like.png",
        alt: "404!",
        className: "favourite-img"
      }), __jsx("p", {
        className: "fav-index"
      }, favIndex))), __jsx("p", {
        className: "favourite-text"
      }, t('fav')), __jsx("div", {
        id: "lng",
        onClick: this.props.manageLanguage
      }, __jsx("img", {
        src: this.props.flagUrl,
        alt: "404!",
        className: "lng-icon"
      }), __jsx("p", {
        className: "lng-text"
      }, !this.props.isArabic ? 'عربى' : 'English'))))), this.renderSubHeader());
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
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])('header')(Header));

/***/ })

})
//# sourceMappingURL=index.js.e161fc5e243a0766b21f.hot-update.js.map