(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeInAnimation, staggerAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
// import the required animation functions from the angular animations module

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            // css styles at start of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            // animation and styles at end of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            // animation and styles at end of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
    ]),
]);
var staggerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('staggerAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })), {
            optional: true
        })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _services_data_movie_movie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data/movie/movie.service */ "./src/app/services/data/movie/movie.service.ts");
/* harmony import */ var _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/data/user/user.service */ "./src/app/services/data/user/user.service.ts");
/* harmony import */ var _services_data_game_game_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/data/game/game.service */ "./src/app/services/data/game/game.service.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_landing_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/landing/register/register.component */ "./src/app/components/landing/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/landing/login/login.component */ "./src/app/components/landing/login/login.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_home_movie_movie_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/movie/movie.component */ "./src/app/components/home/movie/movie.component.ts");
/* harmony import */ var _components_home_cast_cast_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/cast/cast.component */ "./src/app/components/home/cast/cast.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular











// Firebase



// Services





// Components









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__["LandingComponent"],
                _components_landing_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_23__["NavigationComponent"],
                _components_home_movie_movie_component__WEBPACK_IMPORTED_MODULE_24__["MovieComponent"],
                _components_home_cast_cast_component__WEBPACK_IMPORTED_MODULE_25__["CastComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_27__["LeaderboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_9__["appRoutes"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
            ],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                _services_data_movie_movie_service__WEBPACK_IMPORTED_MODULE_16__["MovieService"],
                _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _services_data_game_game_service__WEBPACK_IMPORTED_MODULE_18__["GameService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer footer font-small bg-primary\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3 bg-dark text-white\">© 2018 Copyright:\n    <a href=\"http://www.neelindap.com/\" class=\"alert-link\" target=\"_blank\"> Neel Indap</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/cast/cast.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/home/cast/cast.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".true{\r\n    border: 8px solid #28a745 !important\r\n}\r\n\r\n.false{\r\n    border: 8px solid #dc3545!important\r\n}"

/***/ }),

/***/ "./src/app/components/home/cast/cast.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/home/cast/cast.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card h-100 d-inline-block\" style=\"width: 18rem;\" [ngClass]=\"(answers !== undefined && answers[index] !== undefined && index == answers[index].split(':')[0])? \r\nanswers[index].split(':')[1] : ''\">\r\n  <img class=\"card-img-top\" src=\"{{image}}\">\r\n  <div class=\"card-body\">\r\n    <ul class=\"list-group\" >\r\n      <li class=\"list-group-item font-weight-bold\" *ngFor=\"let castName of castNames; let i=index\" [class.active]=\"selectedIndex === i\" \r\n      (click)=\"selectedCast($event, i)\"  data-id=\"{{index}}:{{cast.id}}:{{castName.name}}\">{{castName.name}} ({{castName.character}})</li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/cast/cast.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/cast/cast.component.ts ***!
  \********************************************************/
/*! exports provided: CastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastComponent", function() { return CastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CastComponent = /** @class */ (function () {
    function CastComponent() {
        this.addToMap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.IMAGE_BASE = "https://image.tmdb.org/t/p/w154";
        this.selectedIndex = null;
    }
    CastComponent.prototype.ngOnInit = function () {
        this.image = this.IMAGE_BASE + this.cast.profile_path;
    };
    // Cast member selected
    CastComponent.prototype.selectedCast = function (event, index) {
        // Don't allow selection after game is completed
        if (this.answers.length === 0) {
            var target = event.target || event.srcElement || event.currentTarget;
            var idAttr = target.attributes.id;
            var value = idAttr.nodeValue;
            this.setIndex(index);
            this.addToMap.emit(value);
        }
    };
    // Set index of selected element
    CastComponent.prototype.setIndex = function (index) {
        this.selectedIndex = index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CastComponent.prototype, "cast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CastComponent.prototype, "castNames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CastComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CastComponent.prototype, "answers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CastComponent.prototype, "addToMap", void 0);
    CastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cast',
            template: __webpack_require__(/*! ./cast.component.html */ "./src/app/components/home/cast/cast.component.html"),
            styles: [__webpack_require__(/*! ./cast.component.css */ "./src/app/components/home/cast/cast.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CastComponent);
    return CastComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .loader {\r\n    border: 5px solid #f3f3f3;\r\n    border-top: 5px solid #555; \r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 1s linear infinite;\r\n            animation: spin 1s linear infinite;\r\n}\r\n\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-2 col-md-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Search for a movie title</h5>\r\n          <form class=\"form-inline\" novalidate [formGroup]=\"movieForm\">\r\n            <input class=\"form-control col-md-12\" [ngModel]=\"title\" (keyup)=\"searchMovie()\" formControlName=\"title\" type=\"search\" placeholder=\"Enter movie's name\">\r\n            <div class=\"col-md-12\" *ngIf=\"moviesPresent\">\r\n              <ul class=\"list-group\">\r\n                <app-movie *ngFor=\"let movie of movies\" [movie]=\"movie\" (gameStarted)=\"gameStarted($event)\" (findCast)=\"findCast($event)\"></app-movie>\r\n              </ul>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"loader m-auto\" *ngIf=\"castLoading\"></div>\r\n\r\n  <!-- TODO : No results found-->\r\n\r\n  <div class=\"row mt-5\" *ngIf=\"castPresent\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header font-weight-bold\">Naming celebrities from {{movieForm.get('title').value}}</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"card-group\">\r\n                  <app-cast class=\"mx-auto my-4\" *ngFor=\"let member of cast; let i=index\" [index]=\"i\" [cast]=\"member\" [castNames]=\"castNames\"\r\n                    (addToMap)=\"addToMap($event)\" [answers]=\"answers\"></app-cast>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 offset-md-5\" *ngIf=\"!answered\">\r\n                <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"submitAnswers(this.key)\">SUBMIT</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 offset-md-4\" *ngIf=\"answered\">\r\n                <div *ngIf=\"score === 0 then zeroScore; else nonZeroScore\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #zeroScore>\r\n  <div class=\"alert alert-danger alert-dismissible fade show text-center\" role=\"alert\">\r\n    Unfortunately, you scored 0 on this round.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #nonZeroScore>\r\n  <div class=\"alert alert-success alert-dismissible fade show text-center\" role=\"alert\">\r\n    You got {{score}} answer(s) correct!\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/movie/movie.service */ "./src/app/services/data/movie/movie.service.ts");
/* harmony import */ var _services_data_cast_cast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/cast/cast.service */ "./src/app/services/data/cast/cast.service.ts");
/* harmony import */ var _services_data_game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/game/game.service */ "./src/app/services/data/game/game.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _typed_hashmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @typed/hashmap */ "./node_modules/@typed/hashmap/lib.es2015/index.js");
/* harmony import */ var _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data/user/user.service */ "./src/app/services/data/user/user.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import fade in animation

var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, movieService, castService, gameService, userService, toastr) {
        this.fb = fb;
        this.movieService = movieService;
        this.castService = castService;
        this.gameService = gameService;
        this.userService = userService;
        this.toastr = toastr;
        this.moviesPresent = false;
        // Cast
        this.cast = new Array();
        this.castNames = new Array();
        this.castPresent = false;
        this.castLoading = false;
        this.counter = 0;
        // Submitted Answers
        this.selectedAnswers = Object(_typed_hashmap__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        // Correct Answers
        this.answered = false;
        // Initialize form
        this.movieForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Get movie details on Keyup
    HomeComponent.prototype.searchMovie = function () {
        var _this = this;
        // Reset answered status
        this.answered = false;
        this.answers = [];
        this.castPresent = false;
        this.selectedAnswers = Object(_typed_hashmap__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        var movieTitle = this.movieForm.value.title;
        if (movieTitle.length >= 3) {
            this.movieService.searchMovie(movieTitle).subscribe(function (movies) {
                _this.movies = movies.results;
                _this.moviesPresent = true;
            }, function (error) {
                _this.moviesPresent = false;
                _this.toastr.error("No movie by the name " + movieTitle + " exists in the database", 'Invalid movie title', {
                    timeOut: 3000,
                });
            });
        }
        else {
            this.moviesPresent = false;
            this.castPresent = false;
        }
    };
    // Trigger game start after movie selection -> Hide the autocomplete box and update textbox
    HomeComponent.prototype.gameStarted = function (title) {
        this.movieForm.get('title').setValue(title);
        this.moviesPresent = false;
        // Unsubscribe from game service
        this.gameService.unsubscriveFromObject();
    };
    // GET MOVIE CAST
    HomeComponent.prototype.findCast = function (movieId) {
        var _this = this;
        // Reset variables
        this.cast = new Array();
        this.castNames = new Array();
        this.counter = 0;
        this.castLoading = true;
        this.castService.searchCast(movieId).subscribe(function (casts) {
            for (var i in casts.cast) {
                var e = casts.cast[i];
                if (e.profile_path != null) {
                    _this.cast.push(e);
                    var json = {
                        "id": e.id,
                        "name": e.name,
                        "character": e.character
                    };
                    _this.castNames.push(json);
                    _this.counter++;
                }
                if (_this.counter == 5)
                    break;
                _this.castPresent = true;
            }
            _this.castLoading = false;
            // store in DB -> Get stored item key
            _this.key = _this.gameService.gameEntry(_this.cast);
            // Shuffle list
            _this.castNames = _this.shuffle(_this.castNames);
        }, function (error) {
            _this.castPresent = false;
            _this.castLoading = false;
            _this.toastr.error("No cast inforrmation present for the movie " + _this.movieForm.value.title + " exists in the database. Please try another movie.", 'No cast present', {
                timeOut: 3000,
            });
        });
    };
    // Shuffle array
    HomeComponent.prototype.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    // Add to answers map
    HomeComponent.prototype.addToMap = function (value) {
        var selected = value.split(":");
        var id = selected[0];
        var cast_id = selected[1];
        var cast_name = selected[2];
        // Add to map
        this.selectedAnswers = Object(_typed_hashmap__WEBPACK_IMPORTED_MODULE_6__["set"])(id, cast_id + ":" + cast_name, this.selectedAnswers);
    };
    // Submit answers
    HomeComponent.prototype.submitAnswers = function (key) {
        var _this = this;
        //Check if all answers are submitted. If not confirm box
        var submitted = Object(_typed_hashmap__WEBPACK_IMPORTED_MODULE_6__["size"])(this.selectedAnswers);
        // Uncomment later
        // if (submitted < 5) {
        //   // Alert confirm box
        //   if (!window.confirm("You haven't selected all answers! Are you sure you want to submit your answers?")) {
        //     return;
        //   }
        // }
        // get correct answers
        this.gameService.getCorrectAnswers(key, this.selectedAnswers);
        // Subscribe to answers
        var answersObserver = this.gameService.subject.subscribe(function (data) {
            _this.answers = data;
        });
        // subscribe to score
        var scoreObserver = this.userService.subject.subscribe(function (data) {
            _this.score = data;
        });
        this.answered = true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
            // make fade in animation available to this component
            animations: [_animations__WEBPACK_IMPORTED_MODULE_8__["fadeInAnimation"]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_data_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _services_data_cast_cast_service__WEBPACK_IMPORTED_MODULE_3__["CastService"],
            _services_data_game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/movie/movie.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/home/movie/movie.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 32px;\r\n}\r\n\r\nli { \r\n    cursor: pointer; \r\n}"

/***/ }),

/***/ "./src/app/components/home/movie/movie.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/movie/movie.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card h-100 d-inline-block\" style=\"width: 18rem;\">\r\n  <img class=\"card-img-top\" src=\"{{image}}\" alt=\"{{movie.title}}'s poster'\">\r\n  <div class=\"card-body\">\r\n    <div class=\"font-weight-bold text-center\">{{movie.title}}</div>\r\n    <p class=\"card-text text-truncate\" data-toggle=\"tooltip\" title=\"{{movie.overview}}\">{{movie.overview}}</p>\r\n    <button href=\"#\" class=\"btn btn-primary\">Play!</button>\r\n  </div>\r\n</div> -->\r\n\r\n<li class=\"list-group-item\" (click)=\"playGame()\">\r\n  <img class=\"card-img-top\" src=\"{{image}}\" alt=\"{{movie.title}}'s poster\">\r\n  <span class=\"ml-3 text-primary\"><b>{{movie.title}}</b> ({{movie.release_date | slice:0:4 }})</span>\r\n</li>"

/***/ }),

/***/ "./src/app/components/home/movie/movie.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/movie/movie.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import fade in animation

var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
        this.gameStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.findCast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.IMAGE_BASE = "https://image.tmdb.org/t/p/w154";
    }
    MovieComponent.prototype.ngOnInit = function () {
        // Placeholder for no poster
        if (this.movie.poster_path == null)
            this.image = 'assets/img/poster-placeholder.jpg';
        else
            this.image = this.IMAGE_BASE + this.movie.poster_path;
    };
    MovieComponent.prototype.playGame = function () {
        // Update movie title in search box
        this.gameStarted.emit(this.movie.title);
        // Get Cast
        var movieId = this.movie.id;
        this.findCast.emit(movieId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "gameStarted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "findCast", void 0);
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/home/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/home/movie/movie.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["staggerAnimation"]],
            host: { '[@staggerAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100,700,500);"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-3\">\r\n      <div class=\"card bg-light mb-3\">\r\n        <div class=\"card-body\">\r\n          <div class=\"panel panel-login\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"row\">\r\n                <ul class=\"nav nav-pills nav-fill col-md-12 pr-0\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink='/login' routerLinkActive='active'>Log In</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink='/register' routerLinkActive='active'>Register</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"panel-body mt-5\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 p-0\">\r\n                  <router-outlet></router-outlet>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/landing/login/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-login {\r\n  background-color: #E8E9EC;\r\n  outline: none;\r\n  color: #2D3B55;\r\n  font-size: 14px;\r\n  height: auto;\r\n  font-weight: normal;\r\n  padding: 14px 0;\r\n  text-transform: uppercase;\r\n  border: none;\r\n  border-radius: 0px;\r\n  box-shadow: none;\r\n}\r\n.btn-login:hover,\r\n.btn-login:focus {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n}"

/***/ }),

/***/ "./src/app/components/landing/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"loginForm\">\r\n  <div class=\"form-group\">\r\n    <input type=\"email\" tabindex=\"1\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email Address\" pattern=\"^([\\w\\.\\-_]+)?\\w+@[\\w-_]+(\\.\\w+){1,}$\">\r\n  </div>\r\n  <div *ngIf=\"loginForm.get('email').invalid && (loginForm.get('email').dirty || loginForm.get('email').touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"loginForm.get('email').errors.required\">\r\n      Email address is required.\r\n    </div>\r\n    <div *ngIf=\"loginForm.get('email').errors.pattern\">\r\n      Email address is not properly formatted.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" tabindex=\"2\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n  </div>\r\n  <div *ngIf=\"loginForm.get('password').invalid && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\r\n    class=\"alert alert-danger\">\r\n    <div *ngIf=\"loginForm.get('password').errors.required\">\r\n      Password is required.\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-sm-6 offset-sm-3\">\r\n    <input type=\"submit\" tabindex=\"3\" (click)=\"signInWithEmail()\" [disabled]=\"loginForm.invalid\" class=\"form-control btn btn-dark\"\r\n      value=\"LOG IN\">\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/landing/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/landing/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // TODO : Validations
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password)
            .then(function (res) {
            // console.log(res);
            _this.router.navigate(['home']);
        })
            .catch(function (err) {
            // console.log('error: ' + err)
            _this.toastr.error('You\'ve entered invalid credentials', 'Invalid credentials', {
                timeOut: 3000,
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/landing/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/landing/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/register/register.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing/register/register.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-register {\r\n    background-color: #E8E9EC;\r\n    outline: none;\r\n    color: #2D3B55;\r\n    font-size: 14px;\r\n    height: auto;\r\n    font-weight: normal;\r\n    padding: 14px 0;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    border-radius: 0px;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .btn-register:hover,\r\n  .btn-register:focus {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/landing/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate autocomplete=\"off\" [formGroup]=\"regForm\">\r\n  <div class=\"form-group\">\r\n    <input type=\"email\" tabindex=\"1\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email Address\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\r\n  </div>\r\n  <div *ngIf=\"regForm.get('email').invalid && (regForm.get('email').dirty || regForm.get('email').touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"regForm.get('email').errors.required\">\r\n      Email address is required.\r\n    </div>\r\n    <div *ngIf=\"regForm.get('email').errors.pattern\">\r\n      Email address is not properly formatted.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" tabindex=\"2\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" minlength=\"6\">\r\n  </div>\r\n  <div *ngIf=\"regForm.get('password').invalid && (regForm.get('password').dirty || regForm.get('password').touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"regForm.get('password').errors.required\">\r\n      Password is required.\r\n    </div>\r\n    <div *ngIf=\"regForm.get('password').errors.minlength\">\r\n      Password must be at least 6 characters long.\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" tabindex=\"3\" formControlName=\"fullname\" class=\"form-control\" placeholder=\"Your Full Name\" pattern=\"^[a-zA-Z]+(?:[\\s.']+[a-zA-Z]+)*$\">\r\n  </div>\r\n  <div *ngIf=\"regForm.get('fullname').invalid && (regForm.get('fullname').dirty || regForm.get('fullname').touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"regForm.get('fullname').errors.required\">\r\n      Name is required.\r\n    </div>\r\n    <div *ngIf=\"regForm.get('fullname').errors.pattern\">\r\n      Name shouldn't include special characters(except space between first and last name)\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 offset-sm-3\">\r\n    <input type=\"submit\" tabindex=\"4\" (click)=\"registerInWithEmail()\" [disabled]=\"regForm.invalid\" class=\"form-control btn btn-dark\"\r\n      value=\"REGISTER\">\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/landing/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.regForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerInWithEmail = function () {
        var email = this.regForm.value.email;
        var password = this.regForm.value.password;
        var name = this.regForm.value.fullname;
        this.auth.signUpWithEmail(email, password, name);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/landing/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/landing/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  leaderboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"margin-bottom: 25px\">\r\n  <!-- TODO: Add navigation links -->\r\n  <span class=\"navbar-brand\">\r\n    Celebrity Name\r\n  </span>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"this.authService.isLoggedIn()\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink='/home' routerLinkActive='active'>Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink='/leaderboard' routerLinkActive='active'>LeaderBoard</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav\">\r\n      <div class=\"btn-group\" *ngIf=\"this.authService.isLoggedIn()\">\r\n        <button class=\"btn btn-primary btn-sm\" type=\"button\">\r\n          <span *ngIf=\"this.user\">Welcome, {{this.user.name}} <span class=\"badge badge-light\">{{this.user.score}} points</span> </span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle Dropdown</span>\r\n        </button>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" (click)=logout()>Logout</a>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/user/user.service */ "./src/app/services/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
        // this.userObserver.unsubscribe();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to score
        // console.log('aaaaa');
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userObserver = this.userService.userSubject.subscribe(function (userCast) {
            if (userCast != undefined) {
                _this.user.uid = userCast.uid;
                _this.user.name = userCast.name;
                _this.user.email = userCast.email;
                _this.user.score = userCast.score;
                // console.log(this.user);
            }
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_data_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.User = function (key$, uid, name, email, score) {
        this.key$ = key$;
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.score = score;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_landing_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing/register/register.component */ "./src/app/components/landing/register/register.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/login/login.component */ "./src/app/components/landing/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");






var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'register', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [{ path: '', component: _components_landing_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] }]
    },
    {
        path: 'login', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [{ path: '', component: _components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }]
    },
    {
        path: 'leaderboard', component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"]
    }
    //TODO : Add route for Error page
];


/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // this.toastr.error('You\'re not logged in', 'Error', {
        //     timeOut: 3000,
        // });
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _data_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/user/user.service */ "./src/app/services/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router, toastr, userService) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.userDetails = null;
        // Subject Observale for answers
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                _this.userService.getUser(_this.userDetails.uid);
                _this.router.navigateByUrl('/home');
            }
            else {
                _this.toastr.error('You\'re not logged in', 'Error', {
                    timeOut: 3000,
                });
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signUpWithEmail = function (email, password, name) {
        var _this = this;
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            // Store user in db
            _this.userService.insertUser(user, name);
            _this.userDetails = user;
            _this.router.navigate(['/home']);
            _this.toastr.success('You\'ve successfully registered!', 'Success', {
                timeOut: 3000,
            });
        })
            .catch(function (error) {
            _this.toastr.error('There was an error during registration. Please try again', 'Error', {
                timeOut: 3000,
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    // getUserObj() {
    //   let user = new User();
    //   if (this.userDetails) {
    //     let userCast = this.userDetails as any;
    //     user.uid = userCast.uid;
    //     user.name = userCast.name;
    //     user.email = userCast.email;
    //     user.score = userCast.score;
    //   }
    //   return user;
    // }
    // getUid(){
    //   if(this.userDetails != null)
    //     return this.userDetails.uid;
    // }
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _data_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data/cast/cast.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data/cast/cast.service.ts ***!
  \****************************************************/
/*! exports provided: CastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastService", function() { return CastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CastService = /** @class */ (function () {
    function CastService(http) {
        this.http = http;
        this.baseURL = "https://api.themoviedb.org/3/movie/";
        this.endPoint = "/credits?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US";
    }
    // Cast
    // https://api.themoviedb.org/3/movie/550/credits?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US
    CastService.prototype.searchCast = function (movieId) {
        return this.http.get(this.baseURL + movieId + this.endPoint);
    };
    CastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CastService);
    return CastService;
}());



/***/ }),

/***/ "./src/app/services/data/game/game.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data/game/game.service.ts ***!
  \****************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _typed_hashmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @typed/hashmap */ "./node_modules/@typed/hashmap/lib.es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/data/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameService = /** @class */ (function () {
    function GameService(firebase, userService) {
        this.firebase = firebase;
        this.userService = userService;
        // Subject Observale for answers
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Ref to firebase db -> games
        this.ref = this.firebase.list('games');
    }
    GameService.prototype.gameEntry = function (game) {
        var ans = new Array();
        game.forEach(function (i) {
            ans.push(i.id + ":" + i.name);
        });
        // Save correct answers for game
        var key = this.ref.push({ ans: ans }).key;
        return key;
    };
    GameService.prototype.getCorrectAnswers = function (key, selectedAnswers) {
        var _this = this;
        // Initialize variables
        var answers = new Array();
        var score = 0;
        this.subscription = this.ref.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                // Get correct game and check correct answers against submitted
                if (element.key === key) {
                    _this.correctAnswers = element.payload.toJSON();
                    var i_1 = 0;
                    // Traverse through answered map and check if correct or not
                    Object(_typed_hashmap__WEBPACK_IMPORTED_MODULE_2__["forEach"])(function (value, key) {
                        var index = key;
                        // console.log(index, i);
                        // Add blank entries for unanswered questions
                        while (index != i_1) {
                            answers.push(i_1 + ":" + '');
                            i_1++;
                        }
                        // Increment score of correct answers
                        if (_this.correctAnswers.ans[index] == value) {
                            score++;
                        }
                        // Add correct/wrong answer for cast index
                        answers.push(key + ":" + (_this.correctAnswers.ans[index] == value));
                        i_1++;
                    }, selectedAnswers);
                    // Update score in db
                    _this.userService.updateUser(score);
                    // Emit answers object to subscribers
                    _this.subject.next(answers);
                }
            });
        });
    };
    GameService.prototype.unsubscriveFromObject = function () {
        // Unsubscribe on game end
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/data/movie/movie.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/data/movie/movie.service.ts ***!
  \******************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.baseURL = "https://api.themoviedb.org/3/search/movie?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US\
  &page=1&include_adult=false&query=";
    }
    //Movie
    //http://api.themoviedb.org/3/movie/550/casts?api_key=1bb15929878554efc3fde2e1f9fdbc1f
    MovieService.prototype.searchMovie = function (movieTitle) {
        return this.http.get(this.baseURL + movieTitle);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/data/user/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(firebase) {
        this.firebase = firebase;
        // Subject Observable for score
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Ref to firebase db -> users
        this.ref = this.firebase.list('users');
    }
    // Get logged in user details (not used)
    UserService.prototype.getUser = function (uid) {
        var _this = this;
        this.ref = this.firebase.list('users');
        this.ref.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                if (element) {
                    if (element.payload.toJSON().uid === uid) {
                        _this.user = element.payload.toJSON();
                        _this.user.key$ = element.key;
                        _this.userSubject.next(_this.user);
                        return;
                    }
                }
            });
        });
    };
    // Return user object
    // getUserObj() {
    //   return this.user;
    // }
    //TODO: create new user
    UserService.prototype.insertUser = function (user, displayname) {
        this.ref.push({
            uid: user.uid,
            email: user.email,
            name: displayname,
            score: 0
        });
    };
    // Update the user object -> Game score
    UserService.prototype.updateUser = function (score) {
        this.ref.update(this.user.key$, {
            email: this.user.email,
            name: this.user.name,
            score: this.user.score + score,
            uid: this.user.uid
        });
        this.subject.next(score);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBZd6b7Un5ecqri_7l_l65IDPklyfGI5To",
        authDomain: "celeb-name-game.firebaseapp.com",
        databaseURL: "https://celeb-name-game.firebaseio.com",
        projectId: "celeb-name-game",
        storageBucket: "celeb-name-game.appspot.com",
        messagingSenderId: "466366433630"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Neel\Desktop\3Play Media\celeb-name-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map