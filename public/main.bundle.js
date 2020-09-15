webpackJsonp([1,5],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 165;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(268),
        styles: [__webpack_require__(243)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_typeahead__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_notification_notification_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_explore_explore_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__general_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__atmosphere_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__custom_mixer_mixer_component__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import the route






//for services





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sidebar_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sidebar_explore_explore_component__["a" /* ExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_16__custom_mixer_mixer_component__["a" /* MixerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AtmosphereRoutes */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__["LaddaModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_12__services__["b" /* ExploreService */],
            __WEBPACK_IMPORTED_MODULE_14__angular2_token_service__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_13__general_service__["a" /* GeneralService */],
            __WEBPACK_IMPORTED_MODULE_12__services__["c" /* InteractService */],
            __WEBPACK_IMPORTED_MODULE_15__atmosphere_service__["a" /* AtmosphereService */],
            __WEBPACK_IMPORTED_MODULE_11__sidebar_explore_explore_component__["a" /* ExploreComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular2_token_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmosphereRoutes; });
// Router Module




// Routing Function
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__angular2_token_service__["a" /* Angular2TokenService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
];
var AtmosphereRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MixerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MixerComponent = (function () {
    function MixerComponent(elementRef) {
        this.elementRef = elementRef;
        this.valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = 0;
        this._option = { min: -50, max: 50, step: 1, orientation: 'horizontal', tooltip: 'hide' };
    }
    MixerComponent.prototype.ngOnInit = function () {
        var option = this._option;
        var me = this;
        option.value = this._value;
        this.slider = jQuery(this.elementRef.nativeElement).find('input.slider').slider(option); //new Slider("input.slider" + i, { min : option.min, max : option.max, step : option.step, value : this.value, orientation : option.orientation, tooltip : option.tooltip });
        this.slider.change(function (event) {
            var newval = event.value.newValue;
            var oldValue = event.value.oldValue;
            me.valueChanged.emit(newval);
            me._value = newval;
        });
    };
    Object.defineProperty(MixerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (this.slider != null)
                this.slider.slider('setValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MixerComponent.prototype, "option", {
        set: function (option) {
            this._option = option;
        },
        enumerable: true,
        configurable: true
    });
    return MixerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MixerComponent.prototype, "valueChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MixerComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MixerComponent.prototype, "option", null);
MixerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mixer',
        template: __webpack_require__(269),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MixerComponent);

var _a;
//# sourceMappingURL=mixer.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExploreService = (function () {
    function ExploreService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ExploreService.prototype.getFeed = function (page_no) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* SERVER_URL */] + "/users/feed/suggested", "page=" + page_no, this.getHeader()).map(function (response) { return response.json(); });
    };
    ExploreService.prototype.getHeader = function () {
        var baseHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */](baseHeaders),
            withCredentials: true,
        });
        return baseRequestOptions;
    };
    return ExploreService;
}());
ExploreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _b || Object])
], ExploreService);

var _a, _b;
//# sourceMappingURL=explore.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InteractService = (function () {
    function InteractService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    InteractService.prototype.scrapeURl = function (url) {
        var api_url = "/articles/scrape";
        var observ = this.authService.postFormData(api_url, 'url=' + url);
        return observ;
    };
    InteractService.prototype.getHeader = function () {
        var baseHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */](baseHeaders),
            withCredentials: true,
        });
        return baseRequestOptions;
    };
    InteractService.prototype.loadPageData = function () {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            chrome.runtime.sendMessage({ type: "sendPageData" }, function (response) {
                // console.log("Got response: ", response);
                observer.next(response);
                observer.complete();
            });
        });
    };
    InteractService.prototype.getUserData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* SERVER_URL */] + "/users/data", this.getHeader()).map(function (response) { return response.json(); });
    };
    InteractService.prototype.syndicate = function (article) {
        var url = "/syndications";
        var data = "";
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        for (var key in article) {
            urlSearchParams.append(key, article[key]);
        }
        data = urlSearchParams.toString();
        return this.authService.postFormData(url, urlSearchParams);
    };
    InteractService.prototype.rate = function (article_url, rating) {
        var url = "/articles/rate";
        var data = "";
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        urlSearchParams.append("url", article_url);
        urlSearchParams.append("rating", rating);
        data = urlSearchParams.toString();
        return this.authService.postFormData(url, urlSearchParams);
    };
    InteractService.prototype.add_comment = function (syndication_id, parent_id, content, isPublic) {
        if (isPublic === void 0) { isPublic = true; }
        var url = "/syndications/comment_add";
        var _isPublic = 0;
        if (isPublic)
            _isPublic = 0;
        else
            _isPublic = 1;
        var data = { syndication_id: syndication_id, parent_id: parent_id, comment_text: content, comment_type: _isPublic };
        return this.authService.post(url, data);
    };
    return InteractService;
}());
InteractService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _b || Object])
], InteractService);

var _a, _b;
//# sourceMappingURL=interact.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationService = (function () {
    function NotificationService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    NotificationService.prototype.getNotifications = function () {
        var url = "/notifications";
        var observ = this.authService.postFormData(url, '');
        return observ;
    };
    NotificationService.prototype.dismissNotification = function (notification_id) {
        var url = "/notifications/read/" + notification_id;
        var observ = this.authService.get(url);
        return observ;
    };
    NotificationService.prototype.responseInvite = function (network_contributor_id, response) {
        var url = "/networks/contributor/response";
        var observ = this.authService.postFormData(url, "network_contributor_id=" + network_contributor_id + "&response=" + response);
        return observ;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _b || Object])
], NotificationService);

var _a, _b;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(_notification_service) {
        this._notification_service = _notification_service;
        this.network_notifications = [];
        this.notifications = [];
        this.AppConstants = {
            network_contributors: {
                contributor_responses: { accepted: 1, declined: 2 }
            }
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNotifications();
        //load the notifications in 5 seconds
        setInterval(function () {
            _this.getNotifications();
        }, 30000);
    };
    NotificationComponent.prototype.dismissAll = function () {
        for (var i = 0; i < this.notifications.length; i++) {
            this.dismiss(this.notifications[i].notification_id);
        }
    };
    NotificationComponent.prototype.dismiss = function (notification_id) {
        var _this = this;
        this._notification_service.dismissNotification(notification_id)
            .subscribe(function (data) {
            data = data.json();
            if (data['success'] == true) {
                _this.getNotifications();
            }
        }, function (error) {
            // this._alert_service.error(error);
        });
    };
    NotificationComponent.prototype.getNotifications = function () {
        var _this = this;
        this._notification_service.getNotifications()
            .subscribe(function (data) {
            data = data.json();
            _this.network_notifications = data['network_invites'];
            _this.notifications = data['notifications'];
        }, function (error) {
            // this._alert_service.error(error);
        });
    };
    NotificationComponent.prototype.accept = function (notification) {
        var _this = this;
        this._notification_service.responseInvite(notification.network_contributor_id, this.AppConstants.network_contributors.contributor_responses.accepted)
            .subscribe(function (data) {
            data = data.json();
            if (data['success'] == true) {
                _this.getNotifications();
            }
        }, function (error) {
            // this._alert_service.error(error);
        });
    };
    NotificationComponent.prototype.decline = function (notification) {
        var _this = this;
        this._notification_service.responseInvite(notification.network_contributor_id, this.AppConstants.network_contributors.contributor_responses.declined)
            .subscribe(function (data) {
            data = data.json();
            if (data['success'] == true) {
                _this.getNotifications();
            }
        }, function (error) {
            // this._alert_service.error(error);
        });
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(272),
        styles: [__webpack_require__(247)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share__);
/* unused harmony export USER_SIGNED_INFO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2TokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var USER_SIGNED_INFO = {
    SIGNED_IN: 1,
    VALIDATING: 2,
    NOT_SIGNED_IN: 0
};
var Angular2TokenService = (function () {
    function Angular2TokenService(_http, _activatedRoute, _router, general) {
        this._http = _http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.general = general;
        this._isValidating = false;
        this._options = {
            signInPath: "/users/sign_in",
            validateTokenPath: "/users/data/",
            signOutPath: "/users/sign_out",
            signInRedirect: '/login'
        };
        this.firebaseToken = null;
    }
    Object.defineProperty(Angular2TokenService.prototype, "currentUserData", {
        get: function () {
            return this._currentUserData;
        },
        set: function (user) {
            this._currentUserData = user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angular2TokenService.prototype, "currentAuthData", {
        get: function () {
            return this._currentAuthData;
        },
        enumerable: true,
        configurable: true
    });
    Angular2TokenService.prototype._constructUserPath = function () {
        // return '/assets/api/v1';
        return __WEBPACK_IMPORTED_MODULE_3__common__["a" /* SERVER_URL */];
    };
    Angular2TokenService.prototype.userVoted = function (remainingVotes) {
        if (remainingVotes < 0)
            return;
        this._currentUserData.user_votes = remainingVotes;
    };
    Angular2TokenService.prototype.userSignedIn = function () {
        if (this._isValidating)
            return USER_SIGNED_INFO.VALIDATING;
        if (this._currentUserData == null)
            return USER_SIGNED_INFO.NOT_SIGNED_IN;
        return USER_SIGNED_INFO.SIGNED_IN;
    };
    Angular2TokenService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        else {
            // Redirect user to sign in if signInRedirect is set
            if (this._options.signInRedirect)
                this._router.navigate([this._options.signInRedirect]);
            return false;
        }
    };
    // Sign in request and set storage
    Angular2TokenService.prototype.signIn = function (email, password, userType) {
        var _this = this;
        var body = 'user[password]=' + (password) + '&user[email]=' + (email);
        var observ = this.postFormData(this._options.signInPath, body);
        observ.subscribe(function (res) {
            console.log(res.json());
            _this._currentUserData = res.json();
            _this._setAuthData("authenticated");
            _this.validateToken();
        }, function (error) {
            _this._setAuthData(null);
        });
        localStorage.setItem('currentUser', JSON.stringify(this._currentUserData));
        return observ;
    };
    // Sign out request and delete storage
    Angular2TokenService.prototype.signOut = function () {
        // let observ = this.delete(this._options.signOutPath );
        var baseHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */](baseHeaders),
            withCredentials: true,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Delete,
            url: this._constructUserPath() + this._options.signOutPath,
            body: 'user[email]=' + encodeURI(this._currentUserData.email)
        });
        localStorage.clear();
        this._currentAuthData = null;
        this._currentUserType = null;
        this._currentUserData = null;
        localStorage.removeItem('currentUser');
        return this.sendHttpRequest(requestOptions);
    };
    Angular2TokenService.prototype.postFormData = function (path, data) {
        var baseHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */](baseHeaders),
            withCredentials: true,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Post,
            url: this._constructUserPath() + path,
            body: encodeURI(data)
        });
        return this.sendHttpRequest(requestOptions);
    };
    // Validate token request
    Angular2TokenService.prototype.validateToken = function () {
        var _this = this;
        var observ = this.get(this._options.validateTokenPath);
        this._isValidating = true;
        observ.subscribe(function (res) {
            var result = res.json();
            if (result.success == true) {
                _this._currentUserData = result.user;
                _this._setAuthData("authenticated");
            }
            else
                _this._router.navigate([_this._options.signInRedirect]);
            _this._isValidating = false;
        }, function (error) {
            _this._setAuthData(null);
            _this._isValidating = false;
            _this._router.navigate([_this._options.signInRedirect]);
        });
        return observ;
    };
    // Write auth data to storage
    Angular2TokenService.prototype._setAuthData = function (authData) {
        this._currentAuthData = authData;
    };
    // Try to load user config from storage
    Angular2TokenService.prototype._tryLoadAuthData = function () {
        if (this._currentAuthData != null)
            this.validateToken();
    };
    // Construct and send Http request
    Angular2TokenService.prototype.sendHttpRequest = function (requestOptions) {
        var baseRequestOptions;
        var baseHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        // Merge auth headers to request if set
        baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */](baseHeaders),
            withCredentials: true,
        });
        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(requestOptions);
        var response = this._http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Request */](baseRequestOptions)).share();
        this._handleResponse(response);
        return response;
    };
    // Check if response is complete and newer, then update storage
    Angular2TokenService.prototype._handleResponse = function (response) {
        var _this = this;
        response.subscribe(function (res) {
            _this._parseAuthHeadersFromResponse(res);
        }, function (error) {
            _this._parseAuthHeadersFromResponse(error);
        });
    };
    Angular2TokenService.prototype._parseAuthHeadersFromResponse = function (data) {
        var headers = data.headers;
    };
    Angular2TokenService.prototype.get = function (path) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Get,
            url: this._constructUserPath() + path
        }));
    };
    Angular2TokenService.prototype.post = function (path, data) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Post,
            url: this._constructUserPath() + path,
            body: data
        }));
    };
    return Angular2TokenService;
}());
Angular2TokenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === "function" && _d || Object])
], Angular2TokenService);

var _a, _b, _c, _d;
//# sourceMappingURL=angular2-token.service.js.map

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".slider-container{\n  background: #e4e5e8;\n  border-radius: 5px;\n  margin: 4px 0px 15px 0px;\n  padding: 5px 15px 5px 15px;\n  box-shadow: inset .5px .5px 3px #999da8;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".atmosphere-header { \n  color: #767676;\n  text-align: center;\n  text-decoration: none;\n  font-style: normal;\n  width: 100%;\n  font-size: 22px;\n  background: #EDEDED;\n  font-weight: bold;\n  padding-bottom: 20px;\n  margin-top: 0px;\n}\n.register-btn {\n  border: 0 none;\n  background-color: #f06427;\n  border-color: #f06427;\n  border-radius: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  letter-spacing: 1px;\n  font-size: 16px;\n}\n\n.register-btn:hover {\n  border: 0 none;\n  background-color: #00a2de;\n  border-radius: 0;\n}\n.sign-in-btn {\n  border: 0 none;\n  background-color: #00a2de;\n  border-color: #00a2de;\n  border-radius: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 14px;\n  padding-right: 14px;\n  letter-spacing: 1px;\n  font-size: 16px;\n}\n.sign-in-btn:hover {\n  border: 0 none;\n  background-color: #025aa5;\n  border-color: #01549b;\n  border-radius: 0;\n}\n.input-box {\n  border: none;\n  border-top: solid 1px #D8D8D8;\n  background: none;\n  box-shadow: none;\n  padding-left: 0;\n  margin-bottom: 6px;\n  letter-spacing: 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".article-box {\n  padding: 10px;\n  width: 335px;\n  background-color: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 8px; }\n\n.article-image {\n  height: 122px;\n  border: 1px solid #efefef; }\n\n.normalize-padding {\n  padding: 0px 0 0 12px;\n  cursor: pointer; }\n\n.article-box h2 {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 13px !important;\n  padding-bottom: 2px;\n  color: #000;\n  width: 95%;\n  margin-top: 0; }\n\n.article-box p {\n  font-size: 12px;\n  width: 94%;\n  color: #777; }\n\n.rdo-article-link {\n  margin-top: -2px;\n  padding: 6px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #00a2de;\n  border-color: #00a2de;\n  border-radius: 0;\n  z-index: 999;\n  position: relative;\n  width: 121px;\n  font-family: inherit; }\n\n.article-tile-image-bx {\n  width: 133px;\n  float: left;\n  overflow: hidden;\n  margin-right: 10px; }\n\n.article-scroll-box {\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".notification-heading {\n  color: #b7b7b7;\n  font-size: 13px;\n  line-height: 12px; }\n\n.notification-container {\n  padding: 0 6px; }\n\n.no-notifications {\n  width: 100%;\n  float: left;\n  text-align: center; }\n\n.notification-box {\n  border: 1px solid #ececec;\n  padding: 8px 12px;\n  border-left: 4px solid #ffc5aa;\n  background-color: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 5px;\n  width: 100%; }\n\n.notification-box .avatar {\n  width: 50px;\n  float: left; }\n\n.notification-text {\n  width: 78%;\n  float: left;\n  font-size: 12px;\n  margin-left: 13px; }\n\n.dismiss-notification {\n  float: right;\n  font-size: 11px;\n  color: #b9b9b9;\n  cursor: pointer; }\n\n.network-notification-box {\n  border: 1px solid #ececec;\n  padding: 8px 12px;\n  background-color: #FDE6DE;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 5px;\n  border: 1px solid #b9b9b9;\n  width: 100%;\n  transition: all 0.4s; }\n\n.network-notification-box .avatar {\n  width: 50px;\n  float: left; }\n\n.network-notification-action {\n  float: right;\n  font-size: 11px;\n  margin-left: 5px;\n  color: #b9b9b9;\n  cursor: pointer; }\n\n.network-notification-box .active {\n  color: #009BDE !important; }\n\n.notification-box-margin {\n  margin-top: 10px; }\n\n.notification-box-container {\n  width: 327px;\n  float: left; }\n\n.read {\n  background: #efefef !important;\n  border: 1px solid #b9b9b9 !important;\n  transition: all 0.4s; }\n\n.dismiss-btn {\n  cursor: pointer; }\n\n.avatar {\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".sidebar-wrapper {\n  height: 100vh;\n  width: 350px;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  transition: right 0.5s;\n  padding: 8px 6px 0px 6px;\n  background: #EDEDED;\n  border-right: 1px solid #D2D2D2;\n  overflow: hidden;\n  position: absolute; }\n\n.sidebar-close {\n  right: -350px;\n  transition: right 0.5s; }\n\n.menu-active {\n  color: #00a2de; }\n\n.sidebar-menu {\n  padding: 0;\n  width: 100%;\n  margin: 0; }\n\n.sidebar-menu li {\n  list-style: none;\n  float: left;\n  width: 27%;\n  padding: 1%;\n  text-align: center;\n  cursor: pointer; }\n\n.sidebar-menu li:nth-child(4) {\n  list-style: none;\n  float: right;\n  width: 15%;\n  text-align: center; }\n\n.sidebar-menu li p {\n  font-size: 9px;\n  margin-top: 5px; }\n\n.sidebar-menu li img {\n  height: 20px; }\n\n.show {\n  opacity: 1 !important; }\n\n.hide {\n  display: none; }\n\n.close-btn {\n  height: 40px !important; }\n\n.tab-panel-wrapper {\n  width: 1060px;\n  position: absolute;\n  height: calc(100% - 69px);\n  top: 63px;\n  left: 6px; }\n\n.tab-panel {\n  top: 52px;\n  height: 100%;\n  width: 337px;\n  float: left;\n  margin-right: 12px;\n  transition: all 0.3s ease;\n  opacity: 0;\n  padding-right: 1px;\n  overflow-y: hidden;\n  overflow-x: hidden; }\n\n.article-tab-container {\n  width: 348px; }\n\n.article-tab-container:hover {\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.notification-tab-container:hover {\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.first-tab {\n  left: 6px;\n  transition: all 0.3s ease; }\n\n.second-tab {\n  left: -343px;\n  transition: all 0.3s ease; }\n\n.third-tab {\n  left: -693px;\n  transition: all 0.3s ease; }\n\n.article-box {\n  padding: 10px;\n  width: 335px;\n  background-color: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 8px; }\n\n.article-image {\n  height: 122px; }\n\n.normalize-padding {\n  padding: 0px 0 0 12px; }\n\n.article-box h2 {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 2px;\n  color: #000;\n  width: 95%;\n  margin-top: 0; }\n\n.article-box p {\n  font-size: 12px;\n  width: 94%;\n  color: #777; }\n\n.tag-box {\n  padding: 7px 6px;\n  width: 100%;\n  border: none;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 7px; }\n\n.btn-atmosphere-action {\n  margin-top: 8px;\n  float: right;\n  margin-left: 6px;\n  font-size: 11px; }\n\n.btn-rejected {\n  background-color: #cb6144; }\n\n.btn-approve {\n  background-color: #a8a5a5; }\n\n.selected-network-container {\n  float: left;\n  width: 336px;\n  margin-top: 10px; }\n\n.selected-network-container p {\n  color: #444444;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px; }\n\n.selected-network-list {\n  width: 100%;\n  float: left;\n  background: #fff;\n  box-shadow: -1px 1px 1px #DDD; }\n\n.selected-network-list ul {\n  width: 75%;\n  float: left;\n  padding: 16px 10px;\n  margin: 0; }\n\n.selected-network-list ul .active {\n  color: #00a2de; }\n\n.selected-network-list ul li {\n  list-style: none;\n  font-size: 12px;\n  color: #a8a5a5;\n  float: left;\n  width: 100%;\n  margin-bottom: 4px; }\n\n.network-chkbx {\n  float: left;\n  opacity: 1;\n  width: 18px;\n  margin-top: 3px; }\n\n.network-chkbx-text {\n  float: left;\n  margin-left: 8px;\n  margin-top: 1px;\n  color: #000 !important; }\n\n.approved-networks {\n  float: right;\n  padding: 10px;\n  font-size: 13px;\n  color: #a8a5a5; }\n\n.comment-box {\n  width: 336px;\n  float: left;\n  background: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-top: 2px;\n  padding: 5px 5px 0px 5px;\n  margin-bottom: 9px; }\n\n.comment-box textarea {\n  width: 100%;\n  height: 80px;\n  border: none;\n  color: #787878; }\n\n.btn-comment {\n  background: #83bb94; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.network-content-type {\n  margin-top: 10px; }\n\n.article-img {\n  height: 121px;\n  border: 1px solid #efefef;\n  width: 131px; }\n\n.social-icon {\n  padding-top: 7px;\n  padding-left: 3px; }\n\n.fb-icon {\n  background: #3B5998;\n  color: white;\n  margin-right: 0px;\n  padding-right: 14px;\n  padding-bottom: 7px;\n  padding-left: 0px;\n  height: 30px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  cursor: pointer;\n  float: right;\n  margin-right: 3px; }\n\n.twitter-icon {\n  padding-left: 0px;\n  height: 30px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  cursor: pointer;\n  float: right;\n  margin-right: 3px; }\n\n.fa:hover {\n  opacity: 0.7; }\n\n.syndicate-btn {\n  float: right;\n  color: white;\n  background: #f06427;\n  border-radius: -12px;\n  padding: 6px;\n  font-size: 12px;\n  border: #f06427;\n  padding-top: 9px;\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.save-btn {\n  float: right;\n  color: white;\n  background: #00a2de;\n  border-radius: -12px;\n  padding: 6px;\n  font-size: 12px;\n  border: #f06427;\n  padding-top: 9px;\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 89px; }\n\n.social-icon {\n  padding-top: 7px; }\n\ndiv select {\n  padding: 5px 7px;\n  width: 100%;\n  border: none;\n  color: rgba(168, 164, 164, 0.95);\n  background: white; }\n\n.select-box-div {\n  margin-top: 8px;\n  float: left; }\n\n.interact-title {\n  padding-left: 11px; }\n\n.interact-img {\n  padding-left: 12px; }\n\n.dd_menu {\n  padding: 0;\n  width: 110px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #ffb18f;\n  border-radius: 4px; }\n\n.dd_menu li {\n  float: left;\n  list-style: none;\n  width: 100%; }\n\n.dd_menu li a {\n  display: block;\n  width: 100%;\n  padding: 3px 5px;\n  border-bottom: 1px solid #efefef;\n  color: #464646;\n  cursor: pointer; }\n\n.dd_menu li a:hover {\n  text-decoration: none;\n  background-color: #efefef; }\n\n.hidden {\n  display: none !important; }\n\n.article-type-dropdown:hover {\n  text-decoration: none; }\n\n.article-type-dropdown {\n  cursor: pointer; }\n\n.tag-item {\n  float: left;\n  border: 1px solid #969696;\n  padding: 4px;\n  border-radius: 5px;\n  margin-bottom: 6px;\n  margin-right: 6px; }\n\n.tag-close {\n  margin-top: -2px;\n  margin-left: 4px; }\n\n.social-unselected {\n  opacity: 0.3; }\n\n.syndicate-btn-item {\n  float: left; }\n\n.voice-btn-item {\n  float: right; }\n\n.voice-btn-item img {\n  margin-top: 3px; }\n\n.syndicate-btn-item img {\n  margin-top: 3px; }\n\n.advanced-block-btns-group {\n  margin-bottom: 10px;\n  margin-top: -10px; }\n\n.colapse-networks {\n  color: #f06427;\n  float: right;\n  margin: 5px 9px; }\n\n.colapse-networks.close {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  opacity: 1;\n  cursor: pointer; }\n\n.comment-box-wrapper {\n  float: left;\n  margin-top: 8px; }\n\n.comments-view {\n  padding: 10px;\n  width: 335px;\n  background-color: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 8px; }\n\n.comment-box-image {\n  float: left;\n  border-radius: 50%;\n  margin-right: 10px; }\n\n.author-name {\n  float: left;\n  width: 268px;\n  font-size: 14px;\n  margin: 8px 0px 16px 0px; }\n\n.author-comments {\n  float: left;\n  width: 100%;\n  padding: 0 4px;\n  font-size: 13px; }\n\n.comment-reply-btn {\n  float: left;\n  margin-top: 12px;\n  font-size: 13px;\n  width: 100%;\n  background-color: #efefef;\n  padding: 5px;\n  text-align: left;\n  cursor: pointer;\n  color: #0279da; }\n\n.content-type {\n  width: 100%;\n  padding: 0;\n  float: left;\n  margin-top: 8px;\n  background: #fff;\n  box-shadow: -1px 1px 1px #DDD;\n  margin-bottom: 0; }\n\n.content-type li {\n  list-style: none;\n  float: left;\n  width: 30%;\n  font-size: 14px;\n  text-align: center;\n  padding: 6px 0;\n  border: 1px solid #c1c1c1;\n  cursor: pointer; }\n\n.content-type .active {\n  background-color: #00a2de;\n  color: #fff; }\n\n.syndicate-btn-item {\n  float: left;\n  font-size: 14px; }\n\n.syndicate-btn-item img {\n  margin-top: 4px; }\n\n.voice-btn-item {\n  float: right;\n  font-size: 14px; }\n\n.voice-btn-item img {\n  margin-top: 4px; }\n\n.syndication-comment {\n  float: left;\n  width: 100%;\n  border: 0;\n  box-shadow: -1px 1px 1px #DDD;\n  height: 60px;\n  padding: 5px; }\n\n.start-syndication-comment {\n  float: left;\n  width: 100%; }\n\n.hide-atmosphere {\n  -webkit-transform: translateY(-150vh) !important;\n          transform: translateY(-150vh) !important;\n  transition: all 1s ease;\n  position: relative; }\n\n.show-syndication-box {\n  transition: all 1s ease;\n  opacity: 1 !important;\n  top: 0 !important;\n  z-index: 1 !important; }\n\n.syndication-box {\n  opacity: 0;\n  position: absolute;\n  transition: all 1s ease;\n  z-index: -1;\n  width: 374px;\n  top: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 90vh; }\n\n.syndication-back {\n  display: block;\n  width: 50%;\n  float: left; }\n\n.syndication-box .comment-box-wrapper {\n  margin-top: 4px; }\n\n.atmosphere-wrapper-v {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  transition: all 1s ease;\n  float: left;\n  overflow-y: scroll;\n  height: 90vh;\n  overflow-x: hidden; }\n\n.syndication-box .show {\n  display: block !important; }\n\n.syndication-box .hide {\n  display: none !important; }\n\n.syndication-box .comment-reply-txtbx {\n  margin-top: 15px; }\n\n.syndication-nav {\n  float: left;\n  width: 44%;\n  text-align: right; }\n\n.nav-btn {\n  cursor: pointer;\n  display: block;\n  width: 12px;\n  float: right; }\n\n.comment-respond {\n  background: #00a2de;\n  box-shadow: none;\n  color: #fff;\n  font-size: 12px;\n  float: right;\n  display: none;\n  border-radius: 0; }\n\n.comment-reply-txtbx {\n  width: 100%;\n  float: left;\n  margin-bottom: 6px;\n  display: none; }\n\n/*For child commenting*/\n.child-1 {\n  margin-top: -7px !important; }\n\n.child-1 .comments-view {\n  width: 300px;\n  margin-bottom: 1px;\n  margin-left: 35px; }\n\n.child-1 .author-name {\n  width: 230px; }\n\n.child-2 {\n  margin-top: 0px !important; }\n\n.child-2 .comments-view {\n  width: 270px;\n  margin-bottom: 1px;\n  margin-left: 65px; }\n\n.child-2 .author-name {\n  width: 200px; }\n\n.typeahead-suggestions {\n  left: 0 !important;\n  position: relative !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"atmosphere-wrapper\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container\">\n  <input type=\"text\" class=\"slider\" />\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"atmosphere-header\">\n  Atmosphere\n</h1>\n<button aria-label=\"Close\" class=\"close close-atmosphere\" type=\"button\">\n  <span aria-hidden=\"true\">×</span>\n</button>\n<div class=\"\">\n  <form class=\"form-horizontal\" role=\"form\" novalidate style=\"display: block;\"  novalidate (ngSubmit) = \"signin(signinForm);\" #signinForm=\"ngForm\">\n    <fieldset>\n      <div class=\"form-group\">\n        <input class=\"form-control input-box\" required=\"required\" type=\"email\" name=\"email\"  required=\"true\" placeholder=\"EMAIL ADDRESS\" [(ngModel)]=\"model.email\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-box\" required=\"required\" type=\"password\" name=\"password\"  required=\"true\" placeholder=\"PASSWORD\" [(ngModel)]=\"model.password\">\n      </div>\n   <!--    <div class=\"alert alert-danger \" >\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" >\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <p></p>\n      </div> -->\n      \n      <a type=\"button\" class=\"btn btn-primary pull-left register-btn\" href=\"{{SERVER_URL}}/users/sign_up\" target=\"_blank\">REGISTER</a>\n      <button  type=\"submit\" class=\"btn btn-primary pull-right register-btn sign-in-btn\" data-style=\"zoom-out\">SIGN IN</button>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div id=\"article-scroll-box\">\n  <div class=\"article-box\" *ngFor=\"let article of articles.feed\">\n    <div class=\"row\">\n      <div class=\"article-tile-image-bx normalize-padding\" (click)=\"viewArticle(article.body_data.article_id)\">\n\n        <img [src]=\"article.body_data.image_url\" class=\"article-image\"  onerror=\"this.src='assets/images/R-Logo-tile.jpg'\"  *ngIf=\"article.body_data.image_url != ''\" />\n\n        <img src=\"assets/images/R-Logo-tile.jpg\" class=\"article-image\" *ngIf=\"article.body_data.image_url == ''\">\n\n        <a [href]=\"article.body_data.canonical_url\" target=\"_blank\" class=\"btn btn-primary btn-block active rdo-article-link\">View Orignal</a>\n      </div>\n      <div class=\"col-md-7 col-sm-7 normalize-padding\" (click)=\"viewArticle(article.body_data.article_id)\">\n        <h2 *ngIf=\"article.body_data.article_title == ''\">Untitled</h2>\n        <h2 *ngIf=\"article.body_data.article_title != ''\">{{ article.body_data.article_title }}</h2>\n\n        <p *ngIf=\"article.body_data.article_description.length == ''\">No Content</p>\n        <p *ngIf=\"article.body_data.article_description.length != 'undefined'\">{{ article.body_data.article_description }}</p>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"article-loading\" style=\"display: block;margin-left: auto;margin-right: auto;\">\n    <img src=\"assets/images/svg/loader.svg\" class=\"loader-article-img\" style=\"display: block;margin-left: auto;margin-right: auto;width: 50px;\">\n  </div>\n\n  <p class=\"loading-complete\" *ngIf=\"is_end\">Feed End</p>\n  <div class=\"clearfix\"></div>\n</div>"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-container\">\n  <div class=\"notification-box-container\">\n    <p class=\"notification-heading pull-left\">Network Invites</p>\n    <p class=\"no-notifications\" *ngIf=\"network_notifications.length == 0\">You have no new network invites.</p>\n  </div>\n\n  <div class=\"notification-box-container\" *ngIf=\"network_notifications.length > 0\">\n    <div class=\"network-notification-box\" *ngFor=\"let network_notification of network_notifications;\">\n      <img [src]=\"network_notification.image_url\" onerror=\"this.src='assets/images/svg/missing.svg'\" class=\"avatar\" />\n      <p class=\"notification-text\" [innerHTML]=\"network_notification.message\"></p>\n      <span class=\"network-notification-action\" (click)=\"decline(network_notification)\">Decline</span>\n      <span class=\"network-notification-action active\" (click)=\"accept(network_notification)\">Accept</span>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n  <div class=\"notification-box-container notification-box-margin\">\n    <p class=\"notification-heading pull-left\">Notifications</p>\n    <p class=\"notification-heading pull-right dismiss-btn\" (click)=\"dismissAll()\">Dismiss all</p>\n    <p class=\"no-notifications\" *ngIf=\"notifications.length == 0\">You have no new notifications.</p>\n  </div>\n\n  <div class=\"notification-box-container\" *ngIf=\"notifications.length > 0\" >\n    <div class=\"notification-box\" *ngFor=\"let notification of notifications;\" [class.read]=\"notification.state\">\n      <!-- <img [src]=\"notification.image_url\" onerror=\"this.src='assets/images/svg/missing.svg'\" class=\"avatar\" /> -->\n      <img src='assets/images/svg/missing.svg' class=\"avatar\" />\n      <p class=\"notification-text\" [innerHTML]=\"notification.message\"></p>\n      <span class=\"dismiss-notification\" (click)=\"dismiss(notification.notification_id)\" *ngIf=\"!notification.state\">dismiss</span>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\ninput[type=checkbox] + span {\n  color: #ccc;\n} \ninput[type=checkbox]:checked + span {\n  color: #00a2de;\n} \n</style>\n<!-- <button (click)=\"open()\">Open</button> -->\n<div class=\"sidebar-wrapper\" [class.sidebar-close]=\"!sidebar_open\">\n  <div class=\"sidebar-head\">\n    <ul class=\"sidebar-menu\">\n      <li (click)=\"open_notification_tab()\">\n        <img src=\"assets/images/svg/bell.svg\" style=\"transform: rotate(30deg);\" [class.hide]=\"is_notification_tab_open\">\n        <img src=\"assets/images/svg/bell_blue.svg\" style=\"transform: rotate(30deg);\" [class.hide]=\"!is_notification_tab_open\">\n        <p class=\"rdo-orange\" [class.menu-active]=\"is_notification_tab_open\">NOTIFICATIONS</p>\n      </li>\n      <li (click)=\"open_interact_tab()\">\n        <img src=\"assets/images/svg/gantrail.svg\" [class.hide]=\"is_interact_tab_open\" class=\"interact-img\">\n        <img src=\"assets/images/svg/gantrail_blue.svg\" [class.hide]=\"!is_interact_tab_open\" class=\"interact-img\">\n        <p class=\"rdo-orange interact-title\" [class.menu-active]=\"is_interact_tab_open\">INTERACT</p>\n      </li>\n      <li (click)=\"open_explore_tab()\">\n        <img src=\"assets/images/svg/shares_icon.svg\" [class.hide]=\"is_explore_tab_open\">\n        <img src=\"assets/images/svg/shares_icon_blue.svg\" [class.hide]=\"!is_explore_tab_open\">\n        <p class=\"rdo-orange\" [class.menu-active]=\"is_explore_tab_open\">EXPLORE</p>\n      </li>\n      <li (click)=\"hideSideBar()\" class=\"close-sidebar-btn\">\n        <img src=\"assets/images/svg/forward_orange_btn.svg\" class=\"close-btn\">\n      </li>\n    </ul>\n  </div>\n<!-- \n  <div class=\"tab-panel-wrapper\" [class.first-tab]=\"is_notification_tab_open\" [class.second-tab]=\"is_interact_tab_open\" [class.third-tab]=\"is_explore_tab_open\"> -->\n  \n  <div class=\"tab-panel-wrapper\" [class.first-tab]=\"is_notification_tab_open\" [class.second-tab]=\"is_interact_tab_open || (is_explore_second_tab && is_explore_tab_open)\" [class.third-tab]=\"is_explore_tab_open && !is_explore_second_tab\">\n    <!-- Notification tab starts here--> \n    <div class=\"tab-panel notification-tab-container\" [class.show]=\"is_notification_tab_open\">\n      <app-notification></app-notification>\n    </div>\n    <!-- Notification tab ends here--> \n\n    <!-- Interact tab starts here--> \n    <div class=\"tab-panel\" [class.show]=\"is_interact_tab_open\">\n      <div class=\"atmosphere-wrapper-v\" [class.hide-atmosphere]=\"hide_atmosphere_wrapper\" *ngIf=\"articleData != undefined\">\n        <div class=\"atmoshere-drop-zone\">\n          <div class=\"ul-slider-labels clearfix\">\n            <div class=\"pull-left\">Noise</div>\n            <div class=\"pull-right\">Signal</div>\n          </div>\n          <app-mixer [(value)] = \"articleData.rating\" (valueChanged) = \"rateChanged($event)\"></app-mixer>\n          <div class=\"advanced-block-btns-group clearfix\">\n            <div class=\"advanced-block-btn-item clearfix syndicate-btn-item\">\n                <img class=\"pull-left voice-btn-img\" src=\"assets/images/svg/share_icon_blk.svg\">\n                <div class=\"pull-left\"> \n                  <span>{{ articleData.syndications_count }} SYNDICATES </span>\n                </div>\n            </div>\n            <div class=\"advanced-block-btn-item clearfix voice-btn-item\">\n              <img class=\"pull-left\" src=\"assets/images/svg/voices_icon_blk.svg\">\n              <div class=\"pull-left\">{{ articleData.voices_count }} VOICES</div>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"article-box\">\n          <div class=\"row\">\n            <div class=\" normalize-padding\">\n              <div class=\"article-image\">\n                <img src=\"{{ articleData.image_url }}\" class=\"article-img\">\n              </div>\n            </div>\n            <div class=\"normalize-padding\" *ngIf=\"articleData.title != undefined\">\n              <h2 style=\"margin-left: 140px;margin-top: -122px;position: absolute;\">{{ articleData.title.length > 20 ? articleData.title.substring(0, 20) + '...' : articleData.title }}</h2>\n              <p style=\"height: 22px;width: 183px;padding-left: 0px;margin-left: 140px;position: absolute;margin-top: -102px;\">{{ articleData.description.length > 80 ? articleData.description.substring(0, 80) + '...' : articleData.description }}</p>\n            </div>\n          </div>\n        </div>\n\n        <input type=\"text\" name=\"tags\" class=\"tag-box\" placeholder=\"Tags\" (click) = \"showComment();\" [(ngModel)]=\"tempTag\"\n            [typeahead]=\"tag_source\"\n            (typeaheadOnSelect)=\"tagSelected($event)\"\n            [typeaheadOptionsLimit]=\"7\"\n            [typeaheadOptionField]=\"'label'\"\n            [typeaheadWaitMs] = \"200\"\n            (keydown)=\"checkTagInputKeyDown($event)\"/>\n\n        <div class=\"tags-list\">\n          <span class=\"tag-item\" title=\"a\" *ngFor= \"let tag of articleData.tags;let i = index;\">\n            {{tag}}\n            <span class=\"close tag-close\" role=\"presentation\" (click) = \"removeTag(i)\">×</span>\n          </span>\n        </div>\n\n        <div class=\"comment-box\" *ngIf=\"is_shown_comment_tab\">\n          <textarea name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Write your comment...\"></textarea>\n        </div>\n        <div class=\"social-icon\" *ngIf=\"articleData['current_user'] != undefined\">\n\n          \n          <button class=\"syndicate-btn\" (click)=\"syndicate()\" *ngIf=\"content_type == 0\">\n            <span *ngIf=\"is_syndicating\">SYNDICATING</span>\n            <span *ngIf=\"!is_syndicating\">SYNDICATE</span>\n          </button>\n\n          <button class=\"save-btn\" (click)=\"syndicate()\" *ngIf=\"content_type == 1\">\n            <span *ngIf=\"is_syndicating\">SAVING</span>\n            <span *ngIf=\"!is_syndicating\">SAVE</span>\n          </button>\n\n\n          <img src=\"assets/images/twiitter.png\" class=\"fa fa-twitter twitter-icon\" [class.social-unselected]=\"!is_twitter_selected\" (click)=\"is_twitter_selected = !is_twitter_selected\" *ngIf=\"articleData['current_user']['twitter_authorized']\">\n\n          <img src=\"assets/images/facebook.png\"  class=\"fa fa-facebook fb-icon\" [class.social-unselected]=\"!is_facebook_selected\" (click)=\"is_facebook_selected = !is_facebook_selected\" *ngIf=\"articleData['current_user']['fb_authorized']\">\n          \n        </div>\n        \n        <div class=\"select-box-div\" >\n         <a class=\"article-type-dropdown\" dropdownToggle style=\"color: #333\" (click)=\"toggleDD()\">\n            <i class=\"fa fa-chevron-down\" style=\"color: #f06427\"></i>\n            <span *ngIf=\"content_type == 1\">PRIVATE</span>\n            <span *ngIf=\"content_type == 0\">PUBLIC</span>\n          </a>\n          <ul class=\"dd_menu\" [class.hidden]=\"!dd_open\">\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\" (click)=\"content_type = 1; dd_open = false;\">PRIVATE</a>\n            </li>\n            <li>\n              <a class=\"dropdown-item\" (click)=\"content_type = 0; dd_open = false;\">PUBLIC</a>\n            </li>\n            <div class=\"clearfix\"></div>\n          </ul>\n        </div>\n\n\n        <div class=\"selected-network-container\" *ngIf=\"content_type == 0\">\n          <p class=\"pull-left\">Networks</p>\n          <i class=\"fa fa-chevron-up colapse-networks\" (click)=\"colapse_networks = !colapse_networks\" [class.close]=\"colapse_networks\"></i>\n          <!-- <p class=\"pull-right\">Approvals</p> -->\n          <div class=\"selected-network-list\">\n            <!-- for submit process process -->\n            <ul *ngIf=\"user != undefined && !colapse_networks\">\n              <li *ngFor = \"let network of user.active_networks;\">\n                <input type=\"checkbox\" value=\"{{network.network_id}}\" class=\"network-chkbx\"  [checked]=\"checked_network[network.network_id]\" (change)=\"onNetworkCheckBoxChange($event, network.network_id)\"/>\n                <span class=\"network-chkbx-text\">{{ network.name }}</span>\n              </li>\n            </ul>\n            <!-- \n            <div class=\"approved-networks\">\n              3/3\n            </div> -->\n          </div>\n        </div>\n        \n        <ul class=\"content-type\" *ngIf=\"content_type == 0 && !colapse_networks\">\n          <li (click)=\"changeArticleType(1)\" [class.active]=\"is_article_internal\">Internal</li>\n          <li (click)=\"changeArticleType(2)\" [class.active]=\"is_article_members_only\" style=\"width: 40%;\">Members Only</li>\n          <li (click)=\"changeArticleType(3)\" [class.active]=\"is_article_public\">Public</li>\n        </ul>\n\n        <!-- syndication comments starts -->\n        <div class=\"comment-box-wrapper\" *ngIf=\"articleData.syndications != undefined && articleData.syndications.length != 0\">\n          <div class=\"comments-view\" *ngFor=\"let syndication of articleData.syndications; let i = index;\">\n            <img [src]=\"syndication.syndication.author.image\" class=\"comment-box-image\" style=\"width: 36px;\"  (click)=\"viewSyndicateComment(syndication, i)\"/>\n            <div class=\"author-name\" (click)=\"viewSyndicateComment(syndication, i)\">{{ syndication.syndication.author.name }}</div>\n            <div class=\"author-comments\" [innerHTML]=\"syndication.syndication.body\" (click)=\"viewSyndicateComment(syndication, i)\">Comments</div>\n            <div class=\"comment-reply-btn\" (click)=\"replyToSyndicate(syndication, i)\">Reply</div>\n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n        <!-- syndication comments ends -->\n      </div>\n\n      <div class=\"syndication-box\" [class.show-syndication-box]=\"hide_atmosphere_wrapper\">\n        <a class=\"syndication-back\" (click)=\"syndicationBack()\">Back</a>\n        <div class=\"syndication-nav\">\n          <i class=\"fa fa-chevron-right nav-btn\" (click)=\"nextComment()\" style=\"color: #f06427\"></i>\n          <i class=\"fa fa-chevron-left nav-btn\" (click)=\"previousComment()\" style=\"color: #f06427\"></i>\n        </div>\n        \n        <!-- for main syndication comments -->\n        <div class=\"comment-box-wrapper\">\n          <div class=\"comments-view\" *ngIf=\"current_syndication.syndication != undefined\">\n            <img [src]=\"current_syndication.syndication.author.image\" class=\"comment-box-image\" style=\"width: 36px;\" />\n            <div class=\"author-name\">{{ current_syndication.syndication.author.name }}</div>\n            <div class=\"author-comments\" [innerHTML]=\"current_syndication.syndication.body\">Comments</div>\n            <textarea class=\"comment-reply-txtbx\" [class.show]=\"syndication_comment_open\" [(ngModel)]=\"parent_comment\"></textarea>\n            <button class=\"btn comment-respond\" [class.show]=\"syndication_comment_open\" (click)=\"add_comment(current_syndication.syndication.id, current_syndication.syndication.comment_id, parent_comment, true)\">Respond</button>\n            <div class=\"comment-reply-btn\" [class.hide]=\"syndication_comment_open\" (click)=\"openSyndicationCommentBox()\">Reply</div>\n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n\n        <!-- for child syndication comments -->\n        <div class=\"comment-box-wrapper child-1\" *ngIf=\"current_syndication.comments != undefined && current_syndication.comments.length != 0\">\n          <div class=\"comments-view\" *ngFor=\"let comment of current_syndication.comments; let i = index;\">\n            <img [src]=\"comment.author.image\" class=\"comment-box-image\" style=\"width: 36px;\" />\n            <div class=\"author-name\">{{ comment.author.name }}</div>\n            <div class=\"author-comments\" [innerHTML]=\"comment.comment_text\">Comments</div>\n            \n            <textarea class=\"comment-reply-txtbx\" [class.show]=\"isFirstChildRespondBoxOpen(comment.id)\" [(ngModel)]=\"child_1_comment\"></textarea>\n            <button class=\"btn comment-respond\" [class.show]=\"isFirstChildRespondBoxOpen(comment.id)\" (click)=\"add_comment(current_syndication.syndication.id, comment.id, child_1_comment, true)\">Respond</button>\n\n            <div class=\"comment-reply-btn\" (click)=\"showFirstChildBox(comment.id)\" [class.hide]=\"isFirstChildRespondBoxOpen(comment.id)\">Reply</div>\n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n\n        <div class=\"comment-box-wrapper child-2\" *ngIf=\"current_syndication.comments != undefined && current_syndication.comments.length != 0 && 0\">\n          <div class=\"comments-view\" *ngFor=\"let comment of current_syndication.comments; let i = index;\">\n            <img [src]=\"comment.author.image\" class=\"comment-box-image\" style=\"width: 36px;\"  (click)=\"viewSyndicateComment()\"/>\n            <div class=\"author-name\" (click)=\"viewSyndicateComment()\">{{ comment.author.name }}</div>\n            <div class=\"author-comments\" [innerHTML]=\"comment.comment_text\" (click)=\"viewSyndicateComment()\">Comments</div>\n            <div class=\"comment-reply-btn\">Reply</div>\n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n      </div>\n\n\n\n    </div>\n    <!-- Interact tab ends here--> \n\n    <!-- Explore tab starts here--> \n    <div class=\"tab-panel article-tab-container\" [class.show]=\"is_explore_tab_open\">\n      <app-explore></app-explore>\n    </div>\n    <!-- Explore tab ends here--> \n  </div>\n</div>"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__explore_service__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__explore_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__notification_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interact_service__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__interact_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments__ = __webpack_require__(185);
/* unused harmony export drawCanvas */
/* unused harmony export drawSyndicateCanvas */
/* unused harmony export drawFeatureCanvas */
/* unused harmony export calculateReplies */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
/* unused harmony export FEED_PER_PAGE */
/* unused harmony export EDITING_STATE */
/* unused harmony export clone */
/* unused harmony export EXTENSION_ID */
/* unused harmony export FEATURE_SIZE */
/* unused harmony export DEFAULT_IMAGE_URL */
/* unused harmony export MESSAGES */

function drawCanvas(canvas_obj, image_url, max_width, max_height) {
    var context_obj = canvas_obj.getContext('2d');
    context_obj.save();
    context_obj.setTransform(1, 0, 0, 1, 0, 0);
    context_obj.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    context_obj.restore();
    var imageObj = new Image();
    imageObj.src = image_url;
    imageObj.onload = function () {
        var iw = imageObj.width;
        var ih = imageObj.height;
        max_width = canvas_obj.width;
        max_height = canvas_obj.height;
        var scale = Math.max((max_width / iw), (max_height / ih));
        var sw = iw * scale;
        var sh = ih * scale;
        var sourceX = 0;
        var sourceY = 0;
        var destX = (canvas_obj.width - sw) / 2;
        var destY = (canvas_obj.height - sh) / 2;
        var destWidth = iw * scale;
        var destHeight = ih * scale;
        context_obj.drawImage(imageObj, sourceX, sourceY, iw, ih, destX, destY, destWidth, destHeight);
    };
    imageObj.onerror = function () {
        if (image_url != DEFAULT_IMAGE_URL)
            drawCanvas(canvas_obj, DEFAULT_IMAGE_URL, max_width, max_height);
    };
}
function drawSyndicateCanvas(canvas_obj, image_url, parent_container) {
    var context_obj = canvas_obj.getContext('2d');
    context_obj.save();
    context_obj.setTransform(1, 0, 0, 1, 0, 0);
    context_obj.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    context_obj.restore();
    var imageObj = new Image();
    imageObj.src = image_url;
    imageObj.onload = function () {
        var max_width = parent_container.width();
        var max_height = parent_container.height();
        var iw = imageObj.width;
        var ih = imageObj.height;
        canvas_obj.width = max_width;
        canvas_obj.height = max_height;
        var scale = Math.max((max_width / iw), (max_height / ih));
        var sw = iw * scale;
        var sh = ih * scale;
        var sourceX = 0;
        var sourceY = 0;
        var destX = (canvas_obj.width - sw) / 2;
        var destY = (canvas_obj.height - sh) / 2;
        var destWidth = iw * scale;
        var destHeight = ih * scale;
        context_obj.drawImage(imageObj, sourceX, sourceY, iw, ih, destX, destY, destWidth, destHeight);
    };
    imageObj.onerror = function () {
        if (image_url != DEFAULT_IMAGE_URL)
            drawSyndicateCanvas(canvas_obj, DEFAULT_IMAGE_URL, parent_container);
    };
}
function drawFeatureCanvas(canvas_obj, image_url, article_title, estimate_read_time, syndication_count, banner, size) {
    var canvas_width = 600, canvas_height = 600;
    if (size == FEATURE_SIZE.SMALL)
        canvas_width = 300;
    if (size <= FEATURE_SIZE.MIDDLE)
        canvas_height = 300;
    var context_obj = canvas_obj.getContext('2d');
    var imageObj = new Image();
    imageObj.src = image_url;
    // console.log("Pixel ratio: ", PIXEL_RATIO);
    imageObj.onload = function () {
        var iw = imageObj.width;
        var ih = imageObj.height;
        // canvas_obj.width = max_width;
        // canvas_obj.height = max_height;
        var scale = Math.max((canvas_width / iw), (canvas_height / ih));
        var sw = iw * scale;
        var sh = ih * scale;
        var sourceX = 0;
        var sourceY = 0;
        var destX = (canvas_width - sw) / 2;
        var destY = (canvas_height - sh) / 2;
        var destWidth = iw * scale;
        var destHeight = ih * scale;
        context_obj.drawImage(imageObj, sourceX, sourceY, iw, ih, destX, destY, destWidth, destHeight);
    };
    imageObj.onerror = function () {
        if (image_url != DEFAULT_IMAGE_URL)
            drawFeatureCanvas(canvas_obj, DEFAULT_IMAGE_URL, article_title, estimate_read_time, syndication_count, banner, size);
    };
}
function calculateReplies(comments) {
    var comments_count = 0;
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].replies == null)
            comments[i].replies = [];
        comments_count += 1 + calculateReplies(comments[i].replies);
    }
    return comments_count;
}
var SERVER_URL = __WEBPACK_IMPORTED_MODULE_0__environments__["a" /* environment */].SERVER_URL;
var FEED_PER_PAGE = 30;
var EDITING_STATE = {
    ERROR: 0,
    GETTING_DRAFT_ID: 1,
    GOT_DRAFT_ID: 2,
    EDITING: 3 //Editing drafted or published state
};
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var EXTENSION_ID = "ebedkckodfppcbbnenkecjkbodnecdkm";
var FEATURE_SIZE = {
    SMALL: 0,
    MIDDLE: 1,
    LARGE: 2
};
var DEFAULT_IMAGE_URL = 'assets/images/svg/R-Logo-tile.svg';
var MESSAGES = {
    APP_CRASH_ERR: "Sorry for inconvenience. The app has been crashed and it will be reloaded in a second.",
    NETWORK_ERR: "An error occurred while trying to load data from our server. Please check your network connection.",
    LOGIN_PASS_ACC_EMPTY_ERR: "Please enter your email and password correctly.",
    LOGIN_ERR: "Please check your password again.",
    IMAGE_SIZE_WARN: "The image size might be not larger than 5MB.",
    IMAGE_TYPE_WARN: "Invalid image type.",
    TAG_LIMIT_WARN: "Tags are limited to 3 per article at this time.",
    CONTENT_EMPTY_WARN: "You must to add title or content.",
    TAG_EMPTY_WARN: "You must add at least 1 tag to proceed.",
    LOGIN_REQUIRED_WARN: "You need to sign in or sign up before continuing.",
    COMMENT_EMPTY_WARN: "You must add comment to syndicate.",
    SELF_COMMENT_WARN: "You are not permitted to vote on your own comment.",
    VOTE_EMPTY_WARN: "You have 0 votes remaining.",
    SYNDICATION_DEL_WARN: "Are you sure you wish to delete this syndication?",
    SYNDICATION_ONE_DEL_WARN: "Deleting this syndication will remove this article from the news feeds.  Are you sure you wish to continue?",
    PROFILE_UPDATE_SUCCESS: "Your profile has been successfully updated.",
    SYNDICATION_SUCCESS: "syndicated successfully."
};
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
var GeneralService = (function () {
    function GeneralService() {
    }
    return GeneralService;
}());

//# sourceMappingURL=general.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmosphereService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//This server stores article details and provides interface for atmosphere sidebar.
var AtmosphereService = (function () {
    function AtmosphereService(_http, authService, general) {
        this._http = _http;
        this.authService = authService;
        this.general = general;
    }
    AtmosphereService.prototype.loadArticleById = function (id) {
        var url = "/common/articles/details";
        var observ = this.authService.postFormData(url, "article_id=" + id);
        return observ;
    };
    AtmosphereService.prototype.loadArticleByUrl = function (_url) {
        var url = "/articles/scrape";
        var observ = this.authService.postFormData(url, "url=" + _url);
        return observ;
    };
    AtmosphereService.prototype.loadtags = function (term) {
        var url = "/articles/autocomplete_tag_name?term=" + term;
        var observ = this.authService.get(url);
        return observ;
    };
    //Casting vote (if type equals 0 vote down, type equals 1 cast vote up)
    AtmosphereService.prototype.cast_vote = function (comment_id, vote_type) {
        var url = "/users/cast_vote";
        var data = { comment_id: comment_id, vote_type: vote_type };
        return this.authService.post(url, data);
    };
    AtmosphereService.prototype.rate = function (_url, rating) {
        var url = "/articles/rate/";
        var observ = this.authService.post(url, { url: _url, rating: rating });
        return observ;
    };
    AtmosphereService.prototype.saveSyndication = function (comment_id, comment_text) {
        var url = "/syndications/update_comment";
        // let data = { comment_id: comment_id, comment_text: comment_text };
        var body = 'comment_id=' + comment_id + '&comment_text=' + comment_text;
        var observ = this.authService.postFormData(url, body);
        return observ;
    };
    AtmosphereService.prototype.deleteSyndication = function (id) {
        var url = "/syndications/delete";
        var data = "syndication_id=" + id;
        var observ = this.authService.postFormData(url, data);
        return observ;
    };
    AtmosphereService.prototype.deleteComment = function (id) {
        var url = "/syndications/comment_delete";
        var data = "comment_id=" + id;
        var observ = this.authService.postFormData(url, data);
        return observ;
    };
    AtmosphereService.prototype.getNotifications = function () {
        var url = "/notifications";
        var observ = this.authService.postFormData(url, '');
        return observ;
    };
    AtmosphereService.prototype.dismissNotification = function (notification_id) {
        var url = "/notifications/read/" + notification_id;
        var observ = this.authService.get(url);
        return observ;
    };
    AtmosphereService.prototype.responseInvite = function (network_contributor_id, response) {
        var url = "/networks/contributor/response";
        var observ = this.authService.postFormData(url, "network_contributor_id=" + network_contributor_id + "&response=" + response);
        return observ;
    };
    return AtmosphereService;
}());
AtmosphereService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */]) === "function" && _c || Object])
], AtmosphereService);

var _a, _b, _c;
//# sourceMappingURL=atmosphere.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular2_token_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.errorMessage = "";
        this.is_signingin = false;
        this.model = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function (loginForm) {
        var _this = this;
        if (!loginForm.form.valid) {
            this.errorMessage = "Please enter your email and password correctly.";
            return;
        }
        // this.appState.setLoading("Signing In...");
        this.is_signingin = true;
        // console.log(loginForm.form.serialize());
        this.authService.signIn(this.model.email, this.model.password)
            .subscribe(function (result) {
            _this.errorMessage = "";
            _this.is_signingin = false;
            _this.router.navigate(['']);
        }, function (error) {
            _this.errorMessage = error.json().errors;
            _this.is_signingin = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(270),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExploreComponent = (function () {
    function ExploreComponent(_explore_services, router) {
        this._explore_services = _explore_services;
        this.router = router;
        this.articles = [];
        this.isLoadingUserArticles = false;
        this.page = 0;
        this.is_end = false;
        this.getArticles();
    }
    ExploreComponent.prototype.ngOnInit = function () {
        this.slimScroll = jQuery("#article-scroll-box").slimScroll({
            height: '100%',
            width: '343px',
            wheelStep: 3
        });
        var object = this;
        this.slimScroll.bind('scroll', function (e) {
            if (this.scrollTop + 1000 > this.scrollHeight) {
                object.getArticles();
            }
        });
    };
    ExploreComponent.prototype.getArticles = function () {
        var _this = this;
        var me = this;
        if (this.is_end == false && this.isLoadingUserArticles == false) {
            me.isLoadingUserArticles = true;
            this._explore_services.getFeed(this.page)
                .subscribe(function (data) {
                if (data.feed.length != 0) {
                    if (_this.page == 0) {
                        _this.articles = data;
                        //this.articles.article_title = this.articles.article_title.length > 20 ? this.articles.article_title.substring(0, 20) + '...' : this.articles.article_title;
                        _this.page++;
                    }
                    else {
                        //insert the articles
                        data.feed.forEach(function (value, index) {
                            if (value.article_type == 0) {
                                me.articles.feed.push(value);
                            }
                        });
                        _this.page++;
                    }
                }
                else {
                    _this.is_end = true;
                }
                me.isLoadingUserArticles = false;
            }, function (error) {
                // this._alert_service.error(error);
            });
        }
    };
    ExploreComponent.prototype.viewArticle = function (article_id) {
        window.open('https://raydo-dev.com/#/home/detail/' + article_id, '_blank');
    };
    return ExploreComponent;
}());
ExploreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-explore',
        template: __webpack_require__(271),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* ExploreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* ExploreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ExploreComponent);

var _a, _b;
//# sourceMappingURL=explore.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atmosphere_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular2_token_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explore_explore_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//get the article component

var SidebarComponent = (function () {
    function SidebarComponent(_interact_service, atmosphere, authService, _explore_component) {
        var _this = this;
        this._interact_service = _interact_service;
        this.atmosphere = atmosphere;
        this.authService = authService;
        this._explore_component = _explore_component;
        this.sidebar_open = true;
        //var for the selected tabs
        this.is_notification_tab_open = false;
        this.is_explore_tab_open = false;
        this.is_interact_tab_open = true;
        this.is_shown_comment_tab = false;
        this.requestComplete = false;
        this.articleData = [];
        this.content_type = 0;
        this.dd_open = false;
        this.tempTag = "";
        this.tagLoadingFlag = false;
        this.user = [];
        this.is_facebook_selected = false;
        this.is_twitter_selected = false;
        this.colapse_networks = true;
        this.is_syndicating = false;
        this.is_article_internal = false;
        this.is_article_members_only = true;
        this.is_article_public = false;
        this.comment = "";
        this.checked_network = [];
        this.hide_atmosphere_wrapper = false;
        this.syndication_comment_open = false;
        this.current_syndication = [];
        this.current_syndication_index = 0;
        this.data_url = '';
        this.parent_comment = '';
        //values required for enabling child commenting
        this.child_1_repsond_box = [];
        this.child_1_comment = '';
        this.child_2_comment = '';
        /*
        * Set true for debug mode and it will scrape the fixed url
        * Required for testing
         */
        this.debug = false;
        if (this.debug) {
            this.getSyndicate('https://www.youtube.com/watch?v=yHjdIXN9v2g');
            this.data_url = 'https://www.youtube.com/watch?v=yHjdIXN9v2g';
        }
        //for the tag selector
        this.tag_source = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            // Runs on every search
            _this.tempTag = _this.tempTag.toLowerCase();
            var temp = _this.tempTag;
            _this.tagLoadingFlag = true;
            _this.atmosphere.loadtags(_this.tempTag).subscribe(function (result) {
                if (temp == _this.tempTag) {
                    var data = _this.processLoadedTags(result);
                    observer.next(data);
                }
                _this.tagLoadingFlag = false;
                observer.complete();
            }, function (error) {
                _this.tagLoadingFlag = false;
                observer.complete();
            });
        });
        //get user data using user id
        this._interact_service.getUserData().subscribe(function (result) {
            _this.user = result.user;
        }, function (error) {
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        //set the url
        var me = this;
        if (!this.debug) {
            var refreshDATA = setInterval(function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var result = me.getSyndicate(tab.url);
                    me.data_url = tab.url;
                });
            }, 1000);
        }
    };
    SidebarComponent.prototype.open_notification_tab = function () {
        this.is_notification_tab_open = true;
        this.is_explore_tab_open = false;
        this.is_interact_tab_open = false;
    };
    SidebarComponent.prototype.open_interact_tab = function () {
        this.is_notification_tab_open = false;
        this.is_explore_tab_open = false;
        this.is_interact_tab_open = true;
    };
    SidebarComponent.prototype.open_explore_tab = function () {
        //set the page to 0 and initiate the new article fetch
        this._explore_component.page = 0;
        this._explore_component.getArticles();
        this.is_notification_tab_open = false;
        this.is_explore_tab_open = true;
        this.is_interact_tab_open = false;
    };
    SidebarComponent.prototype.getSyndicate = function (url) {
        var _this = this;
        if (!this.requestComplete) {
            this._interact_service.scrapeURl(url).subscribe(function (data) {
                // console.log(data.json());
                var result = data.json();
                _this.articleData = data.json();
                _this.articleData['tags'] = [];
                if (result['success']) {
                    clearInterval(_this.refreshDATA);
                }
                if (result.syndications != undefined && result.syndications != null) {
                    //set the data for the comments
                    _this.current_syndication = result.syndications[_this.current_syndication_index];
                }
                _this.requestComplete = true;
            }, function (error) {
                // console.log(error);
            });
        }
    };
    SidebarComponent.prototype.showComment = function () {
        this.is_shown_comment_tab = true;
    };
    SidebarComponent.prototype.hideSideBar = function () {
        // this.appState.set('isAtmosphereShown', false);
        chrome.runtime.sendMessage({ type: "exitExtension" });
    };
    SidebarComponent.prototype.toggleDD = function () {
        this.dd_open = !this.dd_open;
    };
    SidebarComponent.prototype.processLoadedTags = function (result) {
        var data = result.json();
        //check if response data is duplicated with selected tags
        for (var j = 0; j < data.length; j++) {
            for (var i = 0; i < this.articleData['tags'].length; i++) {
                if (data[j].label === this.articleData['tags'][i]) {
                    data.splice(j, 1);
                    j--;
                    break;
                }
            }
        }
        //check if current term is in response data and remove it.
        for (var j = 0; j < data.length; j++) {
            if (data[j].label === this.tempTag) {
                data.splice(j, 1);
                break;
            }
        }
        //check if current item is in selected list and if it doesn't exist , it adds item to data
        var flag = true;
        for (var i = 0; i < this.articleData['tags'].length; i++) {
            if (this.tempTag === this.articleData['tags'][i]) {
                flag = false;
                break;
            }
        }
        if (flag)
            data.unshift({ id: -1, label: this.tempTag });
        return data;
    };
    SidebarComponent.prototype.tagSelected = function (tag) {
        if (this.tempTag == "")
            return;
        var term = tag.item.label;
        var terms = tag.item.label.split(',');
        for (var i = 0; i < terms.length; i++) {
            var term_1 = terms[i].trim();
            if (term_1 == "")
                continue;
            var exist_in_data_flag = false;
            for (var j = 0; j < this.articleData['tags'].length; j++) {
                if (this.articleData['tags'][j] === term_1) {
                    exist_in_data_flag = true;
                    break;
                }
            }
            if (!exist_in_data_flag) {
                if (this.articleData['tags'].length > 2) {
                    if (i == 0) {
                        // this.warningMessage = MESSAGES.TAG_LIMIT_WARN;
                        // this.warningDialog.show();
                    }
                    break;
                }
                else {
                    this.articleData['tags'].push(term_1);
                    // this.contentChanged = true;
                    this.tempTag = "";
                }
            }
        }
    };
    SidebarComponent.prototype.removeTag = function (index) {
        this.articleData['tags'].splice(index, 1);
        // this.contentChanged = true;
    };
    SidebarComponent.prototype.checkTagInputKeyDown = function (e) {
        if (e.keyCode !== 13) {
            return;
        }
        if (!this.tagLoadingFlag || this.tempTag == "")
            return;
        var exist_in_data_flag = false;
        var terms = this.tempTag.split(',');
        for (var i = 0; i < terms.length; i++) {
            var term = terms[i].trim();
            if (term == "")
                continue;
            for (var j = 0; j < this.articleData['tags'].length; j++) {
                if (this.articleData['tags'][j] === term) {
                    exist_in_data_flag = true;
                    break;
                }
            }
            if (!exist_in_data_flag) {
                if (this.articleData['tags'].length > 2) {
                    if (i == 0) {
                        // this.warningMessage = MESSAGES.TAG_LIMIT_WARN;
                        // this.warningDialog.show();
                    }
                    break;
                }
                else {
                    this.articleData['tags'].push(term);
                    // this.contentChanged = true;
                    this.tempTag = "";
                }
            }
        }
    };
    SidebarComponent.prototype.rateChanged = function (rate) {
        this.articleData.rating = rate;
    };
    SidebarComponent.prototype.changeArticleType = function (value) {
        if (value == 1) {
            this.is_article_internal = true;
            this.is_article_public = false;
            this.is_article_members_only = false;
        }
        if (value == 2) {
            this.is_article_internal = false;
            this.is_article_public = false;
            this.is_article_members_only = true;
        }
        if (value == 3) {
            this.is_article_internal = false;
            this.is_article_public = true;
            this.is_article_members_only = false;
        }
    };
    SidebarComponent.prototype.onNetworkCheckBoxChange = function (event, value) {
        if (event.target.checked) {
            this.checked_network[value] = true;
        }
        else {
            this.checked_network[value] = false;
        }
    };
    SidebarComponent.prototype.syndicate = function () {
        var _this = this;
        this.is_syndicating = true;
        //prepare the syndication array
        if (this.articleData != undefined) {
            var article_1 = [];
            //check if a tag is selected or not
            if (this.articleData['tags'].length <= 0) {
                alert("Please select a tag");
                this.is_syndicating = false;
                return;
            }
            if (this.comment == '') {
                alert("Please add a comment.");
                this.is_syndicating = false;
                return;
            }
            //prepare the tag_list
            this.articleData['tags'].forEach(function (value, index) {
                article_1['tag_list'] += value + ',';
            });
            article_1['tag_list'] = article_1['tag_list'].replace(/,+$/, "");
            article_1['url'] = this.articleData['url'];
            article_1['image_url'] = this.articleData['image_url'];
            article_1['title'] = this.articleData['title'];
            article_1['description'] = this.articleData['description'];
            article_1['body'] = "";
            article_1['comment'] = this.comment;
            article_1['rating'] = this.articleData['rating'];
            article_1['post_to_facebook'] = this.is_facebook_selected;
            article_1['post_to_twitter'] = this.is_twitter_selected;
            article_1['syndication_type'] = this.content_type;
            if (this.is_article_internal) {
                article_1['network_content_type'] = 12;
            }
            if (this.is_article_members_only) {
                article_1['network_content_type'] = 11;
            }
            if (this.is_article_public) {
                article_1['network_content_type'] = 10;
            }
            var network_id = [];
            var i = 0;
            this.checked_network.forEach(function (value, index) {
                if (value) {
                    network_id[i] = index;
                    i++;
                }
            });
            article_1['networks'] = network_id;
            this._interact_service.syndicate(article_1).subscribe(function (result) {
                // console.log(result.json());
                _this.comment = '';
                _this.tempTag = '';
                _this.requestComplete = false;
                _this.getSyndicate(_this.data_url);
                _this.is_syndicating = false;
            }, function (error) {
                _this.is_syndicating = false;
            });
        }
    };
    SidebarComponent.prototype.replyToSyndicate = function (syndication, index) {
        this.current_syndication = syndication;
        this.current_syndication_index = index;
        this.hide_atmosphere_wrapper = true;
        this.syndication_comment_open = true;
    };
    SidebarComponent.prototype.openSyndicationCommentBox = function () {
        //reset the value
        this.child_1_repsond_box = [];
        this.syndication_comment_open = true;
    };
    SidebarComponent.prototype.syndicationBack = function () {
        this.hide_atmosphere_wrapper = false;
        this.syndication_comment_open = false;
    };
    SidebarComponent.prototype.viewSyndicateComment = function (syndication, index) {
        this.current_syndication = syndication;
        this.current_syndication_index = index;
        this.hide_atmosphere_wrapper = true;
    };
    SidebarComponent.prototype.nextComment = function () {
        if (this.articleData.syndications.length > (this.current_syndication_index)) {
            this.current_syndication = this.articleData.syndications[this.current_syndication_index++];
        }
        else {
            this.current_syndication_index = 0;
        }
    };
    SidebarComponent.prototype.previousComment = function () {
        if (this.current_syndication_index > 0) {
            this.current_syndication = this.articleData.syndications[this.current_syndication_index--];
        }
        else {
            this.current_syndication_index = this.articleData.syndications.length - 1;
        }
    };
    //for review section
    SidebarComponent.prototype.add_comment = function (syndication_id, parent_id, comment, isPublic) {
        var _this = this;
        // console.log(isPublic);
        this._interact_service.add_comment(syndication_id, parent_id, comment, isPublic).subscribe(function (data) {
            var result = data.json();
            // console.log(result);
            _this.requestComplete = false;
            _this.getSyndicate(_this.data_url);
            //reset the values
            _this.parent_comment = "";
            _this.child_1_repsond_box = [];
            _this.child_1_comment = "";
        }, function (error) {
            //
        });
    };
    SidebarComponent.prototype.isFirstChildRespondBoxOpen = function (comment_id) {
        if (this.child_1_repsond_box[comment_id] != undefined && this.child_1_repsond_box[comment_id]) {
            return true;
        }
        else {
            return false;
        }
    };
    SidebarComponent.prototype.showFirstChildBox = function (comment_id) {
        //close the parent comment box
        this.syndication_comment_open = false;
        //reset the value
        this.child_1_repsond_box = [];
        this.child_1_comment = "";
        //open the child 1 comment box
        this.child_1_repsond_box[comment_id] = true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(273),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* InteractService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* InteractService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__atmosphere_service__["a" /* AtmosphereService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__atmosphere_service__["a" /* AtmosphereService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular2_token_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular2_token_service__["a" /* Angular2TokenService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__explore_explore_component__["a" /* ExploreComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__explore_explore_component__["a" /* ExploreComponent */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    SERVER_URL: 'https://raydodev.herokuapp.com/api/v2'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map