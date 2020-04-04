webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MainPage.js":
/*!********************************!*\
  !*** ./components/MainPage.js ***!
  \********************************/
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 //styling

 //icons & colors



var PRODUCTS = [{
  "img": "/static/images/1.png",
  "title": "65-Inch 4K UHD Smart OLED TV OLED65C9PVA Black"
}, {
  "img": "/static/images/2.png",
  "title": "Samsung Galaxy Tab 10.1 T580"
}, {
  "img": "/static/images/3.png",
  "title": "DeLonghi ECAM 350.75 Dinamica Fully Automatic Coffee Machine, Silver"
}, {
  "img": "/static/images/4.png",
  "title": "Samsung Galaxy Fit Black"
}, {
  "img": "/static/images/5.png",
  "title": "Astro Gaming A20 Headset"
}, {
  "img": "/static/images/6.png",
  "title": "Men's Nate Chronograph Quartz Watch JR1354"
}];

var MainPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainPage, _Component);

  var _super = _createSuper(MainPage);

  function MainPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_toggleDropDown", function () {
      _this.setState({
        dropdownOpen: !_this.state.dropdownOpen
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderBodyContainer", function () {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        fluid: true,
        className: "spacing"
      }, _this.renderFeaturedProducts(), _this.renderFoundByDealbabProducts());
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFeaturedProducts", function () {
      var t = _this.props.t;
      return __jsx("div", {
        className: "products-section"
      }, __jsx("h3", {
        className: "section-title"
      }, t('featured-products')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, PRODUCTS.map(function (item, index) {
        return __jsx("div", {
          className: "product-container"
        }, __jsx("div", {
          className: "product-semicontainer"
        }, __jsx("img", {
          src: item.img,
          className: "product-img"
        }), __jsx("p", {
          className: "product-title"
        }, item.title), __jsx("p", {
          className: "product-subtitle"
        }, "deals from 4 shops")), __jsx("div", {
          className: "deal-button"
        }, __jsx("p", {
          className: "button-text"
        }, "check deal")));
      })));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFoundByDealbabProducts", function () {
      var t = _this.props.t;
      return __jsx("div", {
        className: "products-section"
      }, __jsx("h3", {
        className: "section-title"
      }, t('deals-by-Dealbab')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, PRODUCTS.map(function (item, index) {
        return __jsx("div", {
          className: "product-container"
        }, __jsx("div", {
          className: "product-semicontainer"
        }, __jsx("img", {
          src: item.img,
          className: "product-img"
        }), __jsx("p", {
          className: "product-title"
        }, item.title), __jsx("p", {
          className: "product-subtitle"
        }, "deals from 4 shops")), __jsx("div", {
          className: "deal-button"
        }, __jsx("p", {
          className: "button-text"
        }, "check deal")));
      })));
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      var favIndex = this.state.favIndex;
      var t = this.props.t;
      return __jsx("div", {
        className: "main-page-container"
      }, this.renderBodyContainer());
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

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

MainPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])('mainpage')(MainPage));

/***/ })

})
//# sourceMappingURL=index.js.b8e5796275420bf7f749.hot-update.js.map