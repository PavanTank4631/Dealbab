module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Helper/Constants.js":
/*!*****************************!*\
  !*** ./Helper/Constants.js ***!
  \*****************************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
const COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  HEADER_BG_COLOR: 'rgb(30, 42, 54)',
  HEADER_ICON_COLORS: 'rgb(187, 191, 194)'
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json");
var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json", 1);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //styling


 //icons & colors



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderFirstFooterContainer", () => {
      const {
        SERVICES,
        POPULAR_SEARCHES,
        ACCOUNT_DETAIL,
        SOCIAL_LOGOES
      } = this.state;
      const {
        t
      } = this.props;
      return __jsx("div", {
        className: "first-footer"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
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
      }, t('explore-more'))), __jsx("a", {
        href: "#",
        className: "col-items-service"
      }, t('about-us')), __jsx("a", {
        href: "#",
        className: "col-items-service"
      }, t('media-centers')), __jsx("a", {
        href: "#",
        className: "col-items-service"
      }, t('contact-us')), __jsx("a", {
        href: "#",
        className: "col-items-service"
      }, t('terms')), __jsx("a", {
        href: "#",
        className: "col-items-service"
      }, t('privacy'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("h5", {
        className: "col-title"
      }, t('popular-search')), __jsx("p", {
        className: "col-items"
      }, t('category1')), __jsx("p", {
        className: "col-items"
      }, t('category2')), __jsx("p", {
        className: "col-items"
      }, t('category3')), __jsx("p", {
        className: "col-items"
      }, t('category4')), __jsx("p", {
        className: "col-items"
      }, t('category5')), __jsx("p", {
        className: "col-items"
      }, t('category6')), __jsx("p", {
        className: "col-items"
      }, t('category7')), __jsx("p", {
        className: "col-items"
      }, t('category8')), __jsx("p", {
        className: "col-items"
      }, t('category9')), __jsx("p", {
        className: "col-items"
      }, t('category10'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("h5", {
        className: "col-title"
      }, t('my-account')), __jsx("p", {
        className: "col-items"
      }, t('login')), __jsx("p", {
        className: "col-items"
      }, t('register')), __jsx("p", {
        className: "col-items"
      }, t('my-fav')), __jsx("p", {
        className: "col-items"
      }, t('account-settings')), __jsx("p", {
        className: "col-items"
      }, t('account-summary')), __jsx("h5", {
        className: "col-title col-semi-title"
      }, t('intellectual-property')), __jsx("p", {
        className: "col-items"
      }, t('brand-owners')), __jsx("p", {
        className: "col-items"
      }, t('market-sellers'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 3,
        md: 6,
        sm: 12,
        className: "column"
      }, __jsx("div", {
        className: "help-container"
      }, __jsx("p", {
        className: "help-title"
      }, t('help-title')), __jsx("p", {
        className: "help-subtitle"
      }, t('help-tagline'))), __jsx("h5", {
        className: "col-title"
      }, t('follow-us')), SOCIAL_LOGOES.map((item, index) => {
        return __jsx("a", {
          href: "#"
        }, __jsx("img", {
          src: item.img,
          alt: "404!",
          className: "social-logoes"
        }));
      })))));
    });

    _defineProperty(this, "renderSecondFooterContainer", () => {
      return __jsx("div", {
        className: "second-footer"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx("p", {
        className: "copyright"
      }, "\xA9 2020 Dealbab.com ")));
    });

    this.state = {
      SERVICES: [{
        name: props.t('about-us')
      }, {
        name: props.t('media-centers')
      }, {
        name: props.t('contact-us')
      }, {
        name: props.t('terms')
      }, {
        name: props.t('privacy')
      }],
      POPULAR_SEARCHES: [{
        name: props.t('category1')
      }, {
        name: props.t('category2')
      }, {
        name: props.t('category3')
      }, {
        name: props.t('category4')
      }, {
        name: props.t('category5')
      }, {
        name: props.t('category6')
      }, {
        name: props.t('category7')
      }, {
        name: props.t('category8')
      }, {
        name: props.t('category9')
      }, {
        name: props.t('category10')
      }],
      ACCOUNT_DETAIL: [{
        name: props.t('login')
      }, {
        name: props.t('register')
      }, {
        name: props.t('my-fav')
      }, {
        name: props.t('account-settings')
      }, {
        name: props.t('account-summary')
      }],
      SOCIAL_LOGOES: [{
        img: "/static/images/twitter.png"
      }, {
        img: "/static/images/facebook.png"
      }, {
        img: "/static/images/youtube.png"
      }, {
        img: "/static/images/instagram.png"
      }, {
        img: "/static/images/pinterest.png"
      }]
    };
  }

  render() {
    return __jsx("footer", {
      className: "footer-container"
    }, this.renderFirstFooterContainer(), this.renderSecondFooterContainer());
  }

}

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('footer')(Footer));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //styling

 //icons & colors






class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_toggleDropDown", () => {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    });

    _defineProperty(this, "_toggleNavbar", () => {
      this.setState({
        isCollapse: !this.state.isCollapse
      });
    });

    _defineProperty(this, "renderSearchBar", () => {
      const {
        t
      } = this.props;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
        id: "search-bar"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        placeholder: t('search-placeholder'),
        className: "search-input"
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
        addonType: this.props.isArabic ? "prepend" : "append"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "search-button"
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaSearch"], {
        className: "search-icon"
      }))));
    });

    _defineProperty(this, "renderSubHeader", () => {
      const {
        isCollapse
      } = this.state;
      const {
        t
      } = this.props;
      return __jsx("div", {
        id: "sub-header"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
        expand: "lg",
        id: "sub-header-navbar"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('all-category'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
        onClick: this._toggleNavbar
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
        isOpen: isCollapse,
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
        className: "mr-auto",
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "/components/"
      }, t('category1'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category2'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category3'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category4'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category5'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category6'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category7'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category8'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        className: "categories"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#"
      }, t('category9'))))))));
    });

    this.state = {
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
  }

  render() {
    const {
      favIndex
    } = this.state;
    const {
      t
    } = this.props;
    return __jsx("div", {
      className: "header-container"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Dealbab"), __jsx("link", {
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
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      className: "spacing"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosMenu"], {
      color: _Helper_Constants__WEBPACK_IMPORTED_MODULE_8__["COLORS"].BLACK,
      className: "menu-icon"
    }), __jsx("img", {
      src: "/static/images/logo.jpg",
      alt: "404!",
      className: "brand-logo"
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


}

Header.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('header')(Header));

/***/ }),

/***/ "./components/MainPage.js":
/*!********************************!*\
  !*** ./components/MainPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //styling

 //icons & colors



const FEATURED_PRODUCTS = [{
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
const DEALBAB_DEALS = [{
  "img": "/static/images/7.png",
  "title": "Calvin Klein Eternity Moment For Women"
}, {
  "img": "/static/images/8.png",
  "title": "Lancome La Nuit Tresor For Women 75ml"
}, {
  "img": "/static/images/9.png",
  "title": "Fujifilm Instax Mini 25"
}, {
  "img": "/static/images/10.png",
  "title": "DJI Mavic 2 Zoom Drone Quadcopter"
}, {
  "img": "/static/images/11.png",
  "title": "Microsoft Surface Pro 6"
}, {
  "img": "/static/images/12.png",
  "title": "Bowers and Wilkins P9 Signature headphones"
}];
const MOST_POPULAR = [{
  "img": "/static/images/13.png",
  "title": "Lenovo ThinkPad"
}, {
  "img": "/static/images/14.png",
  "title": "HP Omen 15 Laptop"
}, {
  "img": "/static/images/15.png",
  "title": "Huawei P20 Pro"
}, {
  "img": "/static/images/16.png",
  "title": "Apple iPad Pro 2017 12 9 Inch"
}, {
  "img": "/static/images/17.png",
  "title": "Nintendo Switch"
}, {
  "img": "/static/images/18.png",
  "title": "Apple iPhone 11"
}];
const COUPENS = [{
  "img": "/static/images/c1.png",
  "title": "Babystore",
  "subtitle": "55 AED off coupon from Babystore"
}, {
  "img": "/static/images/c2.png",
  "title": "Bath&Body Works",
  "subtitle": "10% off coupon from Bath&Body Works"
}, {
  "img": "/static/images/c3.png",
  "title": "boohoo",
  "subtitle": "20% off coupon from boohoo"
}, {
  "img": "/static/images/c4.png",
  "title": "Gap",
  "subtitle": "10 AED off coupon from Gap"
}, {
  "img": "/static/images/c5.png",
  "title": "H&M",
  "subtitle": "Use coupon 'HM25' for 25% off from H&M"
}, {
  "img": "/static/images/c6.png",
  "title": "lacoste",
  "subtitle": "12% off coupon from lacoste"
}, {
  "img": "/static/images/c7.png",
  "title": "French Fragrance",
  "subtitle": "10% off coupon from French Fragrance"
}, {
  "img": "/static/images/c8.png",
  "title": "Shop Global 24x7",
  "subtitle": "5% off coupon from Shop Global 24x7"
}, {
  "img": "/static/images/c9.png",
  "title": "Sprii",
  "subtitle": "10% off coupon from Sprii"
}, {
  "img": "/static/images/c10.png",
  "title": "Zypermart",
  "subtitle": "120 AED off coupon from Zypermart"
}];

class MainPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      this._fetchFeaturedProducts();

      this._fetchCategories();
    });

    _defineProperty(this, "_toggleDropDown", () => {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    });

    _defineProperty(this, "_next", () => {
      const {
        animating,
        activeIndex
      } = this.state;
      if (animating) return;
      const nextIndex = activeIndex === this.state.CAROUSEL_DATA.length - 1 ? 0 : activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    });

    _defineProperty(this, "_previous", () => {
      const {
        animating,
        activeIndex
      } = this.state;
      if (animating) return;
      const previousIndex = activeIndex === 0 ? this.state.CAROUSEL_DATA.length - 1 : activeIndex - 1;
      this.setState({
        activeIndex: previousIndex
      });
    });

    _defineProperty(this, "_goToIndex", newIndex => {
      if (this.state.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    });

    _defineProperty(this, "_fetchFeaturedProducts", async () => {
      const URL = "http://ec2-15-185-88-172.me-south-1.compute.amazonaws.com:8080/manualDealsbyOffsetValue";
      const data = {
        offsetValue: '1'
      };
      const headers = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(URL, data, headers).then(res => {
        console.log('response', res);
      }).catch(error => {
        console.log('error', error.response);
      });
    });

    _defineProperty(this, "_fetchCategories", async () => {
      const URL = "http://ec2-15-185-88-172.me-south-1.compute.amazonaws.com:8080/categoryList";
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(URL).then(res => {
        this.setState({
          availableCategories: res.data.Categories
        });
      }).catch(err => {
        console.log('err', err);
      });
    });

    _defineProperty(this, "renderBodyContainer", () => {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 3,
        md: 0,
        sm: 0,
        className: "side-bar-col"
      }, __jsx("div", {
        id: "side-bar"
      }, this.renderLeftComponent())), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 9,
        md: 12,
        sm: 12,
        className: "main-col"
      }, this.renderCarousel(), __jsx("div", {
        className: "products-section"
      }, this.renderFeaturedProducts(), this.renderCoupens(), this.renderFoundByDealbabProducts(), this.renderMostPopularProducts(), this.renderDisclaimerSection()))));
    });

    _defineProperty(this, "renderLeftComponent", () => {
      console.log('availableCategories', this.state.availableCategories);
      const {
        CATEGORIES,
        POPULAR_SEARCHES,
        availableCategories
      } = this.state;
      const {
        t
      } = this.props;
      return __jsx("div", null, this.renderSideBarSection(availableCategories, t('top-category')));
    });

    _defineProperty(this, "renderSideBarSection", (data, title) => {
      const {
        t
      } = this.props;
      return __jsx("div", {
        className: "side-bar-section"
      }, __jsx("h3", {
        className: "section-title"
      }, title), data.map((item, index) => {
        return __jsx("div", {
          key: item.toString()
        }, __jsx("a", {
          href: "#",
          className: "sidebar-items"
        }, item.category_name));
      }));
    });

    _defineProperty(this, "renderCarousel", () => {
      const {
        activeIndex,
        CAROUSEL_DATA
      } = this.state;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
        activeIndex: activeIndex,
        next: this._next,
        previous: this._previous,
        className: "carousel"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicators"], {
        items: CAROUSEL_DATA,
        activeIndex: activeIndex,
        onClickHandler: this._goToIndex
      }), CAROUSEL_DATA.map((item, index) => {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselItem"], {
          onExiting: () => this.setState({
            animating: true
          }),
          onExited: () => this.setState({
            animating: false
          })
        }, __jsx("img", {
          src: item.img,
          alt: "404!",
          className: "carousel-img"
        }));
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: this._previous
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: this._next
      }));
    });

    _defineProperty(this, "renderFeaturedProducts", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('featured-products')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, FEATURED_PRODUCTS.map((item, index) => {
        return __jsx("a", {
          className: "product-link"
        }, __jsx("div", {
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
        }, "check deal"))));
      })));
    });

    _defineProperty(this, "renderCoupens", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('featured-products')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, COUPENS.map((item, index) => {
        return __jsx("div", {
          className: "product-container coupen-container"
        }, __jsx("div", {
          className: "coupen-logo-div"
        }, __jsx("img", {
          src: item.img,
          className: "coupen-logo-img"
        })), __jsx("p", {
          className: "coupen-name"
        }, item.title), __jsx("p", {
          className: "coupen-detail"
        }, item.subtitle), __jsx("p", {
          className: "eligible-product-text"
        }, t('view-eligible-products')));
      })));
    });

    _defineProperty(this, "renderFoundByDealbabProducts", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('deals-by-Dealbab')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, DEALBAB_DEALS.map((item, index) => {
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

    _defineProperty(this, "renderMostPopularProducts", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('most-popular')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, MOST_POPULAR.map((item, index) => {
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

    _defineProperty(this, "renderDisclaimerSection", () => {
      const {
        DISCLAIMER
      } = this.state;
      const {
        t
      } = this.props;
      return __jsx("div", {
        className: "disclaimer-container"
      }, __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle1')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail1'))), __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle2')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail2'))), __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle3')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail3'))), __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle4')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail4'))), __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle5')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail5'))), __jsx("div", null, __jsx("p", {
        className: "disclaimer-title"
      }, t('descTitle6')), __jsx("p", {
        className: "disclaimer-detail"
      }, t('descDetail6'))));
    });

    this._fetchCategories = this._fetchCategories.bind(this);
    this.state = {
      DISCLAIMER: [{
        title: props.t('descTitle1'),
        detail: props.t('descDetail1')
      }, {
        title: props.t('descTitle2'),
        detail: props.t('descDetail2')
      }, {
        title: props.t('descTitle3'),
        detail: props.t('descDetail3')
      }, {
        title: props.t('descTitle4'),
        detail: props.t('descDetail4')
      }, {
        title: props.t('descTitle5'),
        detail: props.t('descDetail5')
      }, {
        title: props.t('descTitle6'),
        detail: props.t('descDetail6')
      }],
      CATEGORIES: [{
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
      POPULAR_SEARCHES: [{
        title: props.t('popular-category1')
      }, {
        title: props.t('popular-category2')
      }, {
        title: props.t('popular-category3')
      }, {
        title: props.t('popular-category4')
      }, {
        title: props.t('popular-category5')
      }, {
        title: props.t('popular-category6')
      }, {
        title: props.t('popular-category7')
      }, {
        title: props.t('popular-category8')
      }, {
        title: props.t('popular-category9')
      }, {
        title: props.t('popular-category10')
      }],
      CAROUSEL_DATA: [{
        title: 'Slide1',
        img: '/static/images/slide2.jpg'
      }, {
        title: 'Slide2',
        img: '/static/images/slide3.jpg'
      }, {
        title: 'Slide3',
        img: '/static/images/slide1.jpg'
      }],
      activeIndex: 0,
      animating: false,
      availableCategories: []
    };
  }

  render() {
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


}

MainPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('mainpage')(MainPage));

/***/ }),

/***/ "./components/SearchPage.js":
/*!**********************************!*\
  !*** ./components/SearchPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Helper_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Helper/Constants */ "./Helper/Constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //styling

 //icons & colors



const FEATURED_PRODUCTS = [{
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
}, {
  "img": "/static/images/7.png",
  "title": "Calvin Klein Eternity Moment For Women"
}, {
  "img": "/static/images/8.png",
  "title": "Lancome La Nuit Tresor For Women 75ml"
}, {
  "img": "/static/images/9.png",
  "title": "Fujifilm Instax Mini 25"
}, {
  "img": "/static/images/10.png",
  "title": "DJI Mavic 2 Zoom Drone Quadcopter"
}, {
  "img": "/static/images/11.png",
  "title": "Microsoft Surface Pro 6"
}, {
  "img": "/static/images/12.png",
  "title": "Bowers and Wilkins P9 Signature headphones"
}, {
  "img": "/static/images/13.png",
  "title": "Lenovo ThinkPad"
}, {
  "img": "/static/images/14.png",
  "title": "HP Omen 15 Laptop"
}, {
  "img": "/static/images/15.png",
  "title": "Huawei P20 Pro"
}, {
  "img": "/static/images/16.png",
  "title": "Apple iPad Pro 2017 12 9 Inch"
}, {
  "img": "/static/images/17.png",
  "title": "Nintendo Switch"
}, {
  "img": "/static/images/18.png",
  "title": "Apple iPhone 11"
}];

class SearchPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_toggleDropDown", () => {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    });

    _defineProperty(this, "_next", () => {
      const {
        animating,
        activeIndex
      } = this.state;
      if (animating) return;
      const nextIndex = activeIndex === this.state.CAROUSEL_DATA.length - 1 ? 0 : activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    });

    _defineProperty(this, "_previous", () => {
      const {
        animating,
        activeIndex
      } = this.state;
      if (animating) return;
      const previousIndex = activeIndex === 0 ? this.state.CAROUSEL_DATA.length - 1 : activeIndex - 1;
      this.setState({
        activeIndex: previousIndex
      });
    });

    _defineProperty(this, "_goToIndex", newIndex => {
      if (this.state.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    });

    _defineProperty(this, "renderBodyContainer", () => {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 3,
        md: 0,
        sm: 0,
        className: "side-bar-col"
      }, __jsx("div", {
        id: "side-bar"
      }, this.renderLeftComponent())), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 9,
        md: 12,
        sm: 12,
        className: "main-col"
      }, __jsx("div", {
        className: "products-section"
      }, this.renderFilterSection(), this.renderFeaturedProducts()))));
    });

    _defineProperty(this, "renderLeftComponent", () => {
      const {
        CATEGORIES,
        POPULAR_SEARCHES
      } = this.state;
      const {
        t
      } = this.props;
      return __jsx("div", null, this.renderSideBarSection(CATEGORIES, t('top-category')), this.renderSideBarSection(POPULAR_SEARCHES, t('top-vendors')), this.renderSideBarSection(CATEGORIES, t('popular-searches')));
    });

    _defineProperty(this, "renderSideBarSection", (data, title) => {
      const {
        t
      } = this.props;
      return __jsx("div", {
        className: "side-bar-section"
      }, __jsx("h3", {
        className: "section-title"
      }, title), data.map((item, index) => {
        return __jsx("div", {
          key: item.toString()
        }, __jsx("a", {
          href: "",
          className: "sidebar-items"
        }, item.title));
      }));
    });

    _defineProperty(this, "renderFilterSection", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('foundResult'), " iPhone 11 case"));
    });

    _defineProperty(this, "renderFeaturedProducts", () => {
      const {
        t
      } = this.props;
      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, FEATURED_PRODUCTS.map((item, index) => {
        return __jsx("a", {
          className: "product-link"
        }, __jsx("div", {
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
        }, "check deal"))));
      })));
    });

    this.state = {
      DISCLAIMER: [{
        title: props.t('descTitle1'),
        detail: props.t('descDetail1')
      }, {
        title: props.t('descTitle2'),
        detail: props.t('descDetail2')
      }, {
        title: props.t('descTitle3'),
        detail: props.t('descDetail3')
      }, {
        title: props.t('descTitle4'),
        detail: props.t('descDetail4')
      }, {
        title: props.t('descTitle5'),
        detail: props.t('descDetail5')
      }, {
        title: props.t('descTitle6'),
        detail: props.t('descDetail6')
      }],
      CATEGORIES: [{
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
      POPULAR_SEARCHES: [{
        title: props.t('popular-category1')
      }, {
        title: props.t('popular-category2')
      }, {
        title: props.t('popular-category3')
      }, {
        title: props.t('popular-category4')
      }, {
        title: props.t('popular-category5')
      }, {
        title: props.t('popular-category6')
      }, {
        title: props.t('popular-category7')
      }, {
        title: props.t('popular-category8')
      }, {
        title: props.t('popular-category9')
      }, {
        title: props.t('popular-category10')
      }],
      CAROUSEL_DATA: [{
        title: 'Slide1',
        img: '/static/images/slide2.jpg'
      }, {
        title: 'Slide2',
        img: '/static/images/slide3.jpg'
      }, {
        title: 'Slide3',
        img: '/static/images/slide1.jpg'
      }],
      activeIndex: 0,
      animating: false
    };
  }

  render() {
    const {
      favIndex
    } = this.state;
    const {
      t
    } = this.props;
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


}

SearchPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('searchpage')(SearchPage));

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

const {
  localeSubpaths
} = __webpack_require__(/*! next/config */ "next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    ar: 'ar'
  },
  all: {
    en: 'en',
    ar: 'ar'
  }
};
module.exports = new NextI18Next({
  lng: 'en',
  otherLanguages: ['ar'],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});

/***/ }),

/***/ "./node_modules/next-i18next/package.json":
/*!************************************************!*\
  !*** ./node_modules/next-i18next/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, engines, funding, homepage, husky, keywords, license, main, name, peerDependencies, repository, scripts, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"next-i18next@4.2.1\",\"_id\":\"next-i18next@4.2.1\",\"_inBundle\":false,\"_integrity\":\"sha512-77FCTcBj+36tm3K8iUTYRbBVlc/qM+rnQw23hm7czgNj0Jp+yynxE/w4I1cFWUmGh7VjrfadKVl8b+u6t4AoWg==\",\"_location\":\"/next-i18next\",\"_phantomChildren\":{\"@babel/runtime\":\"7.7.2\"},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"next-i18next@4.2.1\",\"name\":\"next-i18next\",\"escapedName\":\"next-i18next\",\"rawSpec\":\"4.2.1\",\"saveSpec\":null,\"fetchSpec\":\"4.2.1\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/next-i18next/-/next-i18next-4.2.1.tgz\",\"_shasum\":\"6ace3a58fb72ef4ae73451e4df32f1437bb5579d\",\"_spec\":\"next-i18next@4.2.1\",\"_where\":\"/Users/ravi/Desktop/simple\",\"author\":{\"name\":\"Isaac Hinman\",\"email\":\"isaac@isaachinman.com\"},\"bugs\":{\"url\":\"https://github.com/isaachinman/next-i18next/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./examples/simple/.next/static/chunks/commons*.js\",\"maxSize\":\"106 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/main*.js\",\"maxSize\":\"8 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/webpack*.js\",\"maxSize\":\"750 B\"}],\"dependencies\":{\"core-js\":\"^2\",\"detect-node\":\"^2.0.4\",\"hoist-non-react-statics\":\"^3.2.0\",\"i18next\":\"^19.0.3\",\"i18next-browser-languagedetector\":\"^4.0.0\",\"i18next-express-middleware\":\"^1.5.0\",\"i18next-node-fs-backend\":\"^2.1.0\",\"i18next-xhr-backend\":\"^3.0.0\",\"path-match\":\"^1.2.4\",\"prop-types\":\"^15.6.2\",\"react-i18next\":\"^11.0.0\",\"url\":\"^0.11.0\"},\"deprecated\":false,\"description\":\"The easiest way to translate your NextJs apps.\",\"devDependencies\":{\"@babel/cli\":\"^7.5.5\",\"@babel/core\":\"^7.5.5\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-transform-runtime\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"@babel/preset-react\":\"^7.0.0\",\"@babel/preset-typescript\":\"^7.3.3\",\"@types/express\":\"^4.16.1\",\"@types/jest\":\"^24.0.16\",\"@types/jest-environment-puppeteer\":\"^4.0.0\",\"@types/react\":\"^16.8.4\",\"@types/react-dom\":\"^16.8.2\",\"@typescript-eslint/eslint-plugin\":\"^1.13.0\",\"@typescript-eslint/parser\":\"^1.13.0\",\"all-contributors-cli\":\"^6.0.0\",\"babel-core\":\"^7.0.0-bridge.0\",\"babel-jest\":\"^24.1.0\",\"babel-plugin-add-module-exports\":\"^1.0.0\",\"babel-plugin-transform-async-to-generator\":\"^6.24.1\",\"bundlesize\":\"^0.18.0\",\"enzyme\":\"^3.8.0\",\"enzyme-adapter-react-16\":\"^1.7.1\",\"eslint\":\"^6.1.0\",\"eslint-plugin-import\":\"^2.17.1\",\"eslint-plugin-jsx-a11y\":\"^6.1.2\",\"eslint-plugin-react\":\"^7.14.3\",\"husky\":\"^3.0.0\",\"jest\":\"^24.1.0\",\"jest-puppeteer\":\"^4.0.0\",\"jsdom\":\"^15.0.0\",\"jsdom-global\":\"^3.0.2\",\"next\":\"^9.0.1\",\"puppeteer\":\"^1.11.0\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"typescript\":\"^3.5.3\"},\"engines\":{\"node\":\">=8\"},\"funding\":{\"type\":\"github\",\"url\":\"https://github.com/sponsors/isaachinman\"},\"homepage\":\"https://github.com/isaachinman/next-i18next#readme\",\"husky\":{\"hooks\":{\"pre-commit\":\"yarn lint && yarn test\"}},\"keywords\":[\"react\",\"i18next\",\"nextjs\",\"next\",\"translation\",\"localisation\",\"localization\",\"locale\"],\"license\":\"MIT\",\"main\":\"dist/commonjs/index.js\",\"name\":\"next-i18next\",\"peerDependencies\":{\"next\":\">= 7.0.0\",\"react\":\">= 16.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/isaachinman/next-i18next.git\"},\"scripts\":{\"build\":\"yarn clean && yarn build:cjs && yarn build:es\",\"build:cjs\":\"BABEL_ENV=cjs babel src --extensions '.ts,.tsx' --out-dir dist/commonjs\",\"build:es\":\"BABEL_ENV=es babel src --extensions '.ts,.tsx' --out-dir dist/es\",\"build:examples/simple\":\"yarn --cwd examples/simple && yarn --cwd examples/simple build\",\"check-types\":\"tsc\",\"clean\":\"rm -rf examples/simple/.next && rm -rf dist && mkdir dist\",\"contributors:add\":\"all-contributors add\",\"contributors:check\":\"all-contributors check\",\"contributors:generate\":\"all-contributors generate\",\"heroku-postbuild\":\"yarn build && yarn build:examples/simple\",\"lint\":\"eslint types.d.ts src/**/* examples __tests__/**/*\",\"lint:fix\":\"eslint types.d.ts src/**/* examples __tests__/**/* --fix\",\"prepublishOnly\":\"yarn build\",\"run-example\":\"yarn build && cd examples/simple && yarn && yarn dev\",\"run-example:prod\":\"yarn --cwd examples/simple start\",\"test\":\"yarn check-types && yarn build && yarn build:examples/simple && bundlesize && NODE_ENV=test jest --maxWorkers=1 --silent\"},\"types\":\"./types.d.ts\",\"version\":\"4.2.1\"}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_MainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainPage */ "./components/MainPage.js");
/* harmony import */ var _components_SearchPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchPage */ "./components/SearchPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //i18n

 //file imports






class Homepage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_manageLanguage", () => {
      this.setState({
        isArabic: !this.state.isArabic
      }, () => {
        _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].language === 'en' ? 'ar' : 'en');
      });
    });

    this.state = {
      isArabic: false
    };
  }

  render() {
    const {
      isArabic
    } = this.state;
    const {
      t
    } = this.props;
    return __jsx("html", {
      dir: isArabic ? "rtl" : "ltr"
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isArabic: isArabic,
      manageLanguage: this._manageLanguage,
      flagUrl: !isArabic ? '/static/images/ar.png' : '/static/images/en.png'
    }), __jsx(_components_MainPage__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'header', 'mainpage', 'searchpage']
});

Homepage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('common')(Homepage));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PAVAN TANK\Desktop\New folder\Dealbab\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map