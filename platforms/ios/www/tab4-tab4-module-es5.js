function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"am-list\" style=\"margin:0;\">\n    <div class=\"am-list-body\">\n      <InputItem\n        [placeholder]=\"'username'\"\n        [content]=\"'Username'\"\n        (onChange)=\"inputUsername($event)\"\n      >\n      </InputItem>\n      <InputItem \n        [type]=\"'password'\" \n        [placeholder]=\"'password'\" \n        [content]=\"'Password'\"\n        (onChange)=inputPwd($event)>\n      </InputItem>\n    </div>\n  </div>\n  <nzm-whitespace></nzm-whitespace>\n  <nzm-whitespace></nzm-whitespace>\n  <nzm-whitespace></nzm-whitespace>\n  <WingBlank>\n    <div Button [type]=\"'primary'\" (onClick)=\"login()\">Login</div>\n  </WingBlank>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab4/tab4-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab4/tab4-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");

    var routes = [{
      path: '',
      component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab4-routing.module */
    "./src/app/tab4/tab4-routing.module.ts");
    /* harmony import */


    var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd-mobile */
    "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }]), _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoginPageRoutingModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdMobileModule"]],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd-mobile */
    "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(_toast) {
        _classCallCheck(this, LoginPage);

        this._toast = _toast;
        this.username = '';
        this.pwd = '';
      }

      _createClass(LoginPage, [{
        key: "inputUsername",
        value: function inputUsername(e) {
          this.username = e;
        }
      }, {
        key: "inputPwd",
        value: function inputPwd(e) {
          this.pwd = e;
        }
      }, {
        key: "login",
        value: function login() {
          console.log(this.username);
          console.log(this.pwd);

          if (this.username === 'admin' && this.pwd === 'testtest') {
            window.location.href = '/tabs/tab1';
          } else {
            this._toast.fail('Load failed !!!', 1000);
          }

          ;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map