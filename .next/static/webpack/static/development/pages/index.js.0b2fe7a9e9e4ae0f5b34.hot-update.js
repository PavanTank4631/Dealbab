webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
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
/* harmony import */ var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json");
var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json", 1);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //styling


 //icons & colors


var SERVICES = [{
  name: 'About Us'
}, {
  name: 'Media Centers'
}, {
  name: 'Contact Us'
}, {
  name: 'Terms & Conditions'
}, {
  name: 'Privacy Policy'
}];
var POPULAR_SEARCHES = [{
  name: "Watches"
}, {
  name: "Macbook Air"
}, {
  name: "Shoes"
}, {
  name: "TV"
}, {
  name: "Mobiles"
}, {
  name: "Mobile Accessories"
}, {
  name: "Men's Fashion"
}, {
  name: "Women's Fashion"
}, {
  name: "Home Appliances"
}, {
  name: "Makeup"
}];
var ACCOUNT_DETAIL = [{
  name: 'Log In'
}, {
  name: 'Register'
}, {
  name: 'My Favourites'
}, {
  name: 'Account Settings'
}, {
  name: 'Account Summary'
}];
var SOCIAL_LOGOES = [{
  img: "/static/images/twitter.png"
}, {
  img: "/static/images/facebook.png"
}, {
  img: "/static/images/youtube.png"
}, {
  img: "/static/images/instagram.png"
}, {
  img: "/static/images/pinterest.png"
}];

var Footer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFirstFooterContainer", function () {
      return __jsx("div", {
        className: "first-footer"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("div", {
        className: "logo-col"
      }, __jsx("p", {
        id: "title"
      }, "Dealbab"), __jsx("p", {
        id: "sub-title"
      }, "Explore more")), SERVICES.map(function (item, index) {
        return __jsx("a", {
          href: "#",
          className: "col-items-service"
        }, item.name);
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("h5", {
        className: "col-title"
      }, "popular searches"), POPULAR_SEARCHES.map(function (item, index) {
        return __jsx("p", {
          className: "col-items"
        }, item.name);
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("h5", {
        className: "col-title"
      }, "my account"), ACCOUNT_DETAIL.map(function (item, index) {
        return __jsx("p", {
          className: "col-items"
        }, item.name);
      }), __jsx("h5", {
        className: "col-title col-semi-title"
      }, "intellectual property"), __jsx("p", {
        className: "col-items"
      }, "Brand and Copyright Owners"), __jsx("p", {
        className: "col-items"
      }, "Marketplace Sellers")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("div", {
        className: "help-container"
      }, __jsx("p", {
        className: "help-title"
      }, "help center", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaRegQuestionCircle"], {
        className: "help-icon"
      })), __jsx("p", {
        className: "help-subtitle"
      }, "Have you any question or issue? We are always here for you.")), __jsx("h5", {
        className: "col-title"
      }, "follow us on"), SOCIAL_LOGOES.map(function (item, index) {
        return __jsx("a", {
          href: "#"
        }, __jsx("img", {
          src: item.img,
          alt: "404!",
          className: "social-logoes"
        }));
      })))));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return __jsx("footer", {
        className: "footer-container"
      }, this.renderFirstFooterContainer());
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])('footer')(Footer));

/***/ })

})
//# sourceMappingURL=index.js.0b2fe7a9e9e4ae0f5b34.hot-update.js.map