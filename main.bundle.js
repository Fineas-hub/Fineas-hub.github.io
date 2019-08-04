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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details_component__ = __webpack_require__("./src/app/details/details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'details/:i', component: __WEBPACK_IMPORTED_MODULE_5__details_details_component__["a" /* DetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#btn2{\r\n    margin-left: 306px;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  \r\n  #btn2:hover{\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li><!-- correct -->\n          <div class=\"col-lg-12 text-center\"> \n              <button id=\"btn2\" (click)=\"scrollToElement(target)\" mat-raised-button color=\"primary\">Get Started</button>\n          </div>\n          </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  \n<router-outlet></router-outlet>\n\n\n<p #target style=\"margin-top: 200px;\"></p>"

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
    }
    AppComponent.prototype.scrollToElement = function ($element) {
        console.log($element);
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__details_details_component__ = __webpack_require__("./src/app/details/details.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__details_details_component__["a" /* DetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatPaginatorModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = "#table{\r\n  margin-top:60px;\r\n  width: 90%;\r\n  margin-left:5%;\r\n}"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   \n      <h1 style=\"text-align: center\">Contacts</h1>      \n    \n  </div>\n\n\n\n<table id=\"table\" class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">FirstName</th>\n        <th scope=\"col\">LastName</th>\n        <th scope=\"col\">PhoneNumber</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Options</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let details of names; let i = index\">\n        <th scope=\"row\">{{details.FirstName}}</th>\n        <td>{{details.LastName}}</td>\n        <td>{{details.PhoneNumber}}</td>\n        <td>{{details.Email}}</td>\n        <td>\n          <button (click)=\"alert()\" [routerLink]=\"['/details', i]\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n            <mat-icon>edit</mat-icon>\n          </button>\n          <button (click)=\"delete(i)\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n              <mat-icon>delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n      <tr>\n          <td>\n              <mat-form-field>\n                  <input maxlength=\"20\" matInput placeholder=\"FirstName\" [formControl]=\"first\"  [(ngModel)]=\"FirstName\" required>\n                  <mat-error *ngIf=\"first.invalid\">{{ErrorFirst()}}</mat-error>\n                </mat-form-field>\n          </td>\n        <td>\n            <mat-form-field>\n                <input maxlength=\"20\" matInput placeholder=\"LastName\" [formControl]=\"last\" [(ngModel)]=\"LastName\" required>\n                <mat-error *ngIf=\"last.invalid\">{{ErrorLast()}}</mat-error>\n              </mat-form-field>\n        </td>\n        <td>\n            <mat-form-field>\n                <input type=\"number\" maxlength=\"20\" matInput placeholder=\"PhoneNumber\" [formControl]=\"phone\" [(ngModel)]=\"PhoneNumber\" required>\n                <mat-error *ngIf=\"phone.invalid\">{{ErrorPhone()}}</mat-error>\n              </mat-form-field>\n        </td>\n        <td>\n            <mat-form-field>\n                <input maxlength=\"20\" matInput placeholder=\"Email\" [formControl]=\"email\" [(ngModel)]=\"Email\" required email>\n                <mat-error *ngIf=\"email.invalid\">{{ErrorEmail()}}</mat-error>\n              </mat-form-field>\n        </td>\n        <td>\n            <button [disabled]=\"email.invalid || phone.invalid || last.invalid || first.invalid\" (click)=\"add()\" style=\"margin-top: 16px\" mat-raised-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n                <mat-icon>add</mat-icon>\n            </button>\n\n        </td>\n      </tr>      \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts__ = __webpack_require__("./src/app/contacts/contacts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.names = __WEBPACK_IMPORTED_MODULE_1__contacts__["a" /* contacts */];
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
        this.first = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
        this.last = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
        this.phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('');
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        });
    }
    ContactsComponent.prototype.delete = function (element) {
        this.names.splice(element, 1);
    };
    ContactsComponent.prototype.add = function () {
        this.names.push({ FirstName: this.FirstName, LastName: this.LastName, PhoneNumber: this.PhoneNumber, Email: this.Email });
    };
    ContactsComponent.prototype.ErrorFirst = function () {
        return this.first.hasError('required') ? 'You must enter a value' :
            '';
    };
    ContactsComponent.prototype.ErrorLast = function () {
        return this.last.hasError('required') ? 'You must enter a value' :
            '';
    };
    ContactsComponent.prototype.ErrorPhone = function () {
        return this.phone.hasError('required') ? 'You must enter a value' :
            '';
    };
    ContactsComponent.prototype.ErrorEmail = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contacts; });
var contacts = [
    {
        FirstName: 'Mihaela',
        LastName: 'Cretu',
        PhoneNumber: '0760594487',
        Email: 'Mihaela@yahoo.com'
    },
    {
        FirstName: 'Ioana',
        LastName: 'Last',
        PhoneNumber: '07620594487',
        Email: 'Ioana@yahoo.com'
    },
    {
        FirstName: 'Ana',
        LastName: 'Maria',
        PhoneNumber: '0760594487',
        Email: 'Ana@yahoo.com'
    }
];


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = "#table{\r\n    margin-top:60px;\r\n    width: 90%;\r\n    margin-left:5%;\r\n  }"

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n   \n    <h1 style=\"text-align: center\">Contacts</h1>      \n  \n</div>\n\n\n\n<table id=\"table\" class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">FirstName</th>\n      <th scope=\"col\">LastName</th>\n      <th scope=\"col\">PhoneNumber</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"details\">\n      <th *ngIf=\"!Ed\" scope=\"row\">{{details.FirstName}}</th>\n      <th *ngIf=\"Ed\"  scope=\"row\">\n\n          <mat-form-field>\n              <input maxlength=\"20\" matInput [(ngModel)]=\"details.FirstName\" required>\n      \n          </mat-form-field>\n\n      </th>\n      <td *ngIf=\"!Ed\">{{details.LastName}}</td>\n      <td *ngIf=\"Ed\">\n\n          <mat-form-field>\n              <input maxlength=\"20\" matInput [(ngModel)]=\"details.LastName\" required>\n      \n          </mat-form-field>\n\n\n      </td>\n      <td *ngIf=\"!Ed\">{{details.PhoneNumber}}</td>\n      <td *ngIf=\"Ed\">\n\n          <mat-form-field>\n              <input maxlength=\"20\" matInput [(ngModel)]=\"details.PhoneNumber\" required>\n      \n          </mat-form-field>\n      </td>\n      <td *ngIf=\"!Ed\">{{details.Email}}</td>\n      <td *ngIf=\"Ed\">\n\n          <mat-form-field>\n              <input maxlength=\"20\" matInput [(ngModel)]=\"details.Email\" required>\n      \n          </mat-form-field>\n      </td>\n      <td>\n        <button *ngIf=\"!Ed\" (click)=\"Edit()\" mat-raised-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button *ngIf=\"Ed\" (click)=\"Edit()\" mat-raised-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n            <mat-icon>done</mat-icon>\n          </button>\n        \n        <button routerLink = '/contacts' mat-raised-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n            <mat-icon>save</mat-icon>\n          </button>\n       \n      </td>\n    </tr>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__("./src/app/contacts/contacts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route) {
        this.route = route;
    }
    DetailsComponent.prototype.Edit = function () {
        this.Ed = !this.Ed;
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.details = __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* contacts */][+params.get('i')];
        });
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top:200px;\r\n    height: 370px;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }  \r\n  \r\n  .example-container > * {\r\n    width: 300px;\r\n    margin: auto;\r\n    margin-top: 30px;    \r\n    border-radius: 10px;\r\n  }  \r\n  \r\n  #btn:hover{\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    -webkit-box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<form [formGroup]=\"loginForm\">\n\n\n<div id=\"email\" class=\"example-container\">\n\n\n  <mat-form-field>\n    <mat-label>Email address</mat-label>\n    <input maxlength=\"20\" matInput placeholder=\"Enter your email\" [formControl]=\"email\" required email>\n    <mat-icon color=\"primary\" matSuffix>email</mat-icon>\n    <mat-error *ngIf=\"email.invalid\">{{ErrorMessage()}}</mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n      <input maxlength=\"10\" matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"  [formControl]=\"password\" required password>\n      <mat-icon color=\"primary\" style=\"cursor: pointer\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>     \n    <mat-error *ngIf=\"password.invalid\">{{ErrorPassword()}}</mat-error>\n  </mat-form-field>\n \n  <button [disabled]=\"password.invalid || email.invalid\" routerLink=\"/contacts\" id=\"btn\" mat-raised-button color=\"primary\">Login</button>\n\n</div>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    LoginComponent.prototype.ErrorPassword = function () {
        return this.password.hasError('required') ? 'You must enter a password' : '';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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