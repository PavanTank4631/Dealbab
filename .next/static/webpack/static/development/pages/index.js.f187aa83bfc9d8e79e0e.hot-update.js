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



var FEATURED_PRODUCTS = [{
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
var DEALBAB_DEALS = [{
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
var MOST_POPULAR = [{
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
var COUPENS = [{
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_next", function () {
      var _this$state = _this.state,
          animating = _this$state.animating,
          activeIndex = _this$state.activeIndex;
      if (animating) return;
      var nextIndex = activeIndex === _this.state.CAROUSEL_DATA.length - 1 ? 0 : activeIndex + 1;

      _this.setState({
        activeIndex: nextIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_previous", function () {
      var _this$state2 = _this.state,
          animating = _this$state2.animating,
          activeIndex = _this$state2.activeIndex;
      if (animating) return;
      var previousIndex = activeIndex === 0 ? _this.state.CAROUSEL_DATA.length - 1 : activeIndex - 1;

      _this.setState({
        activeIndex: previousIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_goToIndex", function (newIndex) {
      if (_this.state.animating) return;

      _this.setState({
        activeIndex: newIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderBodyContainer", function () {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        fluid: true,
        className: "spacing"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 2,
        md: 6,
        sm: 12
      }, __jsx("div", {
        id: "side-bar"
      }, _this.renderLeftComponent())), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 10,
        md: 6,
        sm: 12
      }, _this.renderCarousel(), __jsx("div", {
        className: "products-section"
      }, _this.renderFeaturedProducts(), _this.renderCoupens(), _this.renderFoundByDealbabProducts(), _this.renderMostPopularProducts(), _this.renderDisclaimerSection()))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderLeftComponent", function () {
      var _this$state3 = _this.state,
          CATEGORIES = _this$state3.CATEGORIES,
          POPULAR_SEARCHES = _this$state3.POPULAR_SEARCHES;
      var t = _this.props.t;
      return __jsx("div", null, _this.renderSideBarSection(CATEGORIES, t('top-category')), _this.renderSideBarSection(POPULAR_SEARCHES, t('top-vendors')), _this.renderSideBarSection(CATEGORIES, t('popular-searches')));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSideBarSection", function (data, title) {
      var t = _this.props.t;
      return __jsx("div", {
        className: "side-bar-section"
      }, __jsx("h3", {
        className: "section-title"
      }, title), data.map(function (item, index) {
        return __jsx("div", {
          key: item.toString()
        }, __jsx("p", {
          className: "sidebar-items"
        }, item.title));
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderCarousel", function () {
      var _this$state4 = _this.state,
          activeIndex = _this$state4.activeIndex,
          CAROUSEL_DATA = _this$state4.CAROUSEL_DATA;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Carousel"], {
        activeIndex: activeIndex,
        next: _this._next,
        previous: _this._previous,
        className: "carousel"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CarouselIndicators"], {
        items: CAROUSEL_DATA,
        activeIndex: activeIndex,
        onClickHandler: _this._goToIndex
      }), CAROUSEL_DATA.map(function (item, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CarouselItem"], {
          onExiting: function onExiting() {
            return _this.setState({
              animating: true
            });
          },
          onExited: function onExited() {
            return _this.setState({
              animating: false
            });
          }
        }, __jsx("img", {
          src: item.img,
          alt: "404!",
          className: "carousel-img"
        }));
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: _this._previous
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: _this._next
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFeaturedProducts", function () {
      var t = _this.props.t;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('featured-products')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, FEATURED_PRODUCTS.map(function (item, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderCoupens", function () {
      var t = _this.props.t;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('featured-products')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, COUPENS.map(function (item, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFoundByDealbabProducts", function () {
      var t = _this.props.t;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('deals-by-Dealbab')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, DEALBAB_DEALS.map(function (item, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderMostPopularProducts", function () {
      var t = _this.props.t;
      return __jsx("div", null, __jsx("h3", {
        className: "section-title"
      }, t('most-popular')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, MOST_POPULAR.map(function (item, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderDisclaimerSection", function () {
      var DISCLAIMER = _this.state.DISCLAIMER;
      var t = _this.props.t;
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

    _this.state = {
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
//# sourceMappingURL=index.js.f187aa83bfc9d8e79e0e.hot-update.js.map