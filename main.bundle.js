webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-reedem></app-reedem>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reedem_reedem_component__ = __webpack_require__("./src/app/reedem/reedem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_service__ = __webpack_require__("./src/app/keys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__reedem_reedem_component__["a" /* ReedemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__keys_service__["a" /* KeysService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "API_KEY", {
        get: function () {
            return 'tqiAxDRIsNok9xYG0ldq0B6RD1b9tUJw';
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());



/***/ }),

/***/ "./src/app/keys.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeysService = /** @class */ (function () {
    function KeysService(http) {
        this.http = http;
    }
    KeysService.prototype.getReedemCodeKeys = function (reedemCode) {
        var strparams = "{code:'" + reedemCode + "'}";
        var url = 'https://api.mlab.com/api/1/databases/randomkeysbox/collections/reedemcodes?q=' + strparams;
        url += '&apiKey=' + __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* Settings */].API_KEY;
        return this.http.get(url);
    };
    KeysService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], KeysService);
    return KeysService;
}());



/***/ }),

/***/ "./src/app/reedem/reedem.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.table-wrapper-2 {\n    display: block;\n    max-height: 300px;\n    overflow-y: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n"

/***/ }),

/***/ "./src/app/reedem/reedem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"input-group\">\n    <input type=\"text\" [(ngModel)]=\"code\" class=\"form-control\" placeholder=\"Reedem Code\" \n      aria-label=\"Reedem Code\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-secondary\" (click)=\"reedemCode()\" type=\"button\">Reedem</button>\n    </div>\n  </div>\n  <br/><br/>\n  <div *ngIf=\"msg\" class=\"alert alert-danger\">\n      {{msg}}\n  </div>\n  <div *ngIf=\"listKeys && listKeys.length > 0\">\n      <button (click)=\"toCsv()\" type=\"button\" class=\"btn btn-success\">Download CSV</button>\n      <br/>\n      <table *ngIf=\"listKeys && listKeys.length > 0\" class=\"table\" style=\"background-color: white\">\n        <thead>\n          <tr>\n             <th>Name</th>\n             <th>Key</th>\n          </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of listKeys\">\n               <td>{{item.name}}</td>\n               <td>{{item.key}}</td>\n            </tr>\n          </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reedem/reedem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReedemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_service__ = __webpack_require__("./src/app/keys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__ = __webpack_require__("./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReedemComponent = /** @class */ (function () {
    function ReedemComponent(service) {
        this.service = service;
    }
    ReedemComponent.prototype.ngOnInit = function () {
    };
    ReedemComponent.prototype.reedemCode = function () {
        var _this = this;
        this.listKeys = [];
        this.msg = undefined;
        if (!this.code) {
            return;
        }
        this.service.getReedemCodeKeys(this.code)
            .subscribe(function (data) {
            if (data && data[0] && data[0].keys) {
                _this.listKeys = data[0].keys.map(function (item) {
                    return _this.parseKey(item);
                });
            }
            else {
                _this.msg = "Invalid Code.";
            }
        });
    };
    ReedemComponent.prototype.parseKey = function (value) {
        var regex = value.search(/[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}/g);
        var desc = value.substr(0, regex).trim();
        var key = value.substr(regex).trim();
        return { name: desc, key: key };
    };
    ReedemComponent.prototype.toCsv = function () {
        if (this.listKeys && this.listKeys.length > 0) {
            new __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__["Angular2Csv"](this.listKeys, 'Game Keys #' + this.code);
        }
    };
    ReedemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-reedem',
            template: __webpack_require__("./src/app/reedem/reedem.component.html"),
            styles: [__webpack_require__("./src/app/reedem/reedem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keys_service__["a" /* KeysService */]])
    ], ReedemComponent);
    return ReedemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map