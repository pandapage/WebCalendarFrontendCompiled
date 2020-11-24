(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\valer\Documents\GitHub\web-calendar-spa\web-calendar-front\src\main.ts */"zUnb");


/***/ }),

/***/ "0OIs":
/*!********************************************************!*\
  !*** ./src/app/sign-up-form/sign-up-form.component.ts ***!
  \********************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignUpFormComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpFormComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain at least one number and be 8 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/", "auth", "sign-in"]; };
class SignUpFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")])
        });
        this.isEmailExsists = false;
    }
    submit() {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        this.form.disable();
        this.authService.signUp(this.form.value)
            .subscribe((token) => {
            this.router.navigate(['']);
        }, error => {
            if (error.status === 409)
                this.isEmailExsists = true;
            else if (error.status === 400 && error.error.errors.Password)
                this.form.get('password').setErrors({ pattern: true });
        }).add(this.form.enable());
    }
}
SignUpFormComponent.ɵfac = function SignUpFormComponent_Factory(t) { return new (t || SignUpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignUpFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpFormComponent, selectors: [["app-sign-up-form"]], decls: 33, vars: 23, consts: [[1, "card", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-group"], ["for", "firstNameInput"], ["type", "text", "id", "firstNameInput", 1, "form-control", 3, "formControl"], ["class", "form-text text-danger", 4, "ngIf"], ["for", "lastNameInput"], ["type", "text", "id", "lastNameInput", 1, "form-control", 3, "formControl"], ["for", "emailInput"], ["type", "email", "id", "emailInput", 1, "form-control", 3, "formControl", "input"], ["for", "passwordInput"], ["type", "password", "id", "passwordInput", 1, "form-control", 3, "formControl"], [1, "d-flex", "justify-content-between"], ["type", "submit", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-link", 3, "routerLink"], [1, "form-text", "text-danger"]], template: function SignUpFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignUpFormComponent_Template_form_submit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignUpFormComponent_small_9_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignUpFormComponent_small_14_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignUpFormComponent_Template_input_input_18_listener() { return ctx.isEmailExsists = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpFormComponent_small_19_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignUpFormComponent_small_20_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignUpFormComponent_small_21_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignUpFormComponent_small_26_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignUpFormComponent_small_27_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("firstName").invalid && ctx.form.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "firstName") && ctx.form.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("lastName").invalid && ctx.form.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "lastName") && ctx.form.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "email") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("email", "email") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailExsists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "password") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("pattern", "password") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC1mb3JtL3NpZ24tdXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up-form',
                templateUrl: './sign-up-form.component.html',
                styleUrls: ['./sign-up-form.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "1HgR":
/*!**************************************************!*\
  !*** ./src/app/user-page/user-page.component.ts ***!
  \**************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/calendar.service */ "3WFG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");










function UserPageComponent_ng_template_7_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User first name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPageComponent_ng_template_7_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPageComponent_ng_template_7_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Changes saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPageComponent_ng_template_7_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.errors.toString(), " ");
} }
function UserPageComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserPageComponent_ng_template_7_small_7_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserPageComponent_ng_template_7_small_14_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enable email notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_ng_template_7_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserPageComponent_ng_template_7_div_28_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserPageComponent_ng_template_7_div_29_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r1.firstName.invalid && ctx_r1.firstName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstName.hasError("required") && ctx_r1.firstName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r1.lastName.invalid && ctx_r1.lastName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastName.hasError("required") && ctx_r1.lastName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.savedChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errors.length > 0);
} }
function UserPageComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_ng_template_11_Template_ng_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectedCalendars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_ng_template_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.exportCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.calendars)("multiple", true)("closeOnSelect", false)("searchable", true)("ngModel", ctx_r2.selectedCalendars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selectedCalendars.length <= 0);
} }
class UserPageComponent {
    constructor(authService, calendarService) {
        this.authService = authService;
        this.calendarService = calendarService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.firstName = this.userForm.get('firstName');
        this.lastName = this.userForm.get('lastName');
        this.notifications = this.userForm.get('notifications');
        this.email = this.authService.userEmail;
        this.selectedCalendars = [];
        this.savedChanges = false;
        this.errors = [];
    }
    ngOnInit() {
        this.calendarService.get(this.authService.userId).subscribe(data => {
            this.calendars = data;
        });
        this.resetForm();
    }
    resetForm() {
        this.firstName.setValue(this.authService.firstName);
        this.lastName.setValue(this.authService.lastName);
        this.notifications.setValue(this.authService.userNotify);
    }
    nothingChanged() {
        let firstNameEq = this.authService.firstName === this.firstName.value;
        let lastNameEq = this.authService.lastName === this.lastName.value;
        let notifyEq = this.authService.userNotify === this.notifications.value;
        return firstNameEq && lastNameEq && notifyEq;
    }
    saveChanges() {
        if (this.nothingChanged())
            return;
        if (!this.userForm.valid) {
            this.userForm.markAllAsTouched();
            return;
        }
        this.userForm.disable();
        let userInfo = {
            id: this.authService.userId,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.authService.userEmail,
            receiveEmailNotifications: this.notifications.value
        };
        this.authService.editUser(userInfo).subscribe(data => {
            this.savedChanges = true;
            setTimeout(() => this.savedChanges = false, 2000);
        }, err => {
            if (err.status === 403)
                this.errors.push(err.error.error);
            else
                this.errors.push(err.error.title);
            setTimeout(() => this.errors = [], 2000);
        })
            .add(() => {
            this.resetForm();
            this.userForm.enable();
        });
    }
    exportCalendar() {
        this.selectedCalendars
            .map(calendar => calendar.id)
            .forEach(id => this.calendarService.downloadCalendarIcs(id).subscribe(response => {
            const uriEncodedFileName = response.headers.get('content-disposition').match(/filename\*=UTF-8''(.*?)$/)[1];
            const fileName = decodeURI(uriEncodedFileName);
            const file = new File([response.body], fileName, { type: response.body.type });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(file);
        }));
    }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"])); };
UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], decls: 13, vars: 1, consts: [[1, "container"], [1, "d-flex", "justify-content-around"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "col-md-2"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "col-md-9", "mr-4", 3, "ngbNavOutlet"], [3, "formGroup"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "formControl"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "form-check"], ["type", "checkbox", "id", "emailCheckBox", 1, "form-check-input", 3, "formControl"], ["for", "emailCheckBox"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success mt-2", 4, "ngIf"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "form-text", "text-danger"], [1, "alert", "alert-success", "mt-2"], [1, "alert", "alert-danger", "mt-2"], ["bindLabel", "name", "placeholder", "Select calendar", 3, "items", "multiple", "closeOnSelect", "searchable", "ngModel", "ngModelChange"], [1, "btn", "btn-secondary", "mt-2", 3, "disabled", "click"]], template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserPageComponent_ng_template_7_Template, 30, 13, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calendar export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserPageComponent_ng_template_11_Template, 3, 6, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input-group-prepend[_ngcontent-%COMP%] {\r\n  width : 100px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.form-text[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICB3aWR0aCA6IDEwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9ybS10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-page',
                templateUrl: './user-page.component.html',
                styleUrls: ['./user-page.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"] }]; }, null); })();


/***/ }),

/***/ "3WFG":
/*!**********************************************!*\
  !*** ./src/app/services/calendar.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/calendar/";
    }
    get(id) {
        return this.httpClient.get(this.apiUrl + id);
    }
    getCalendar(id) {
        return this.httpClient.get(this.apiUrl + `GetSingle?id=${id}`);
    }
    addCalendar(calendar) {
        return this.httpClient.post(this.apiUrl, calendar);
    }
    delete(id) {
        return this.httpClient.delete(this.apiUrl + id);
    }
    editCalendar(calendar) {
        return this.httpClient.put(this.apiUrl, calendar);
    }
    downloadCalendarIcs(calendarId) {
        return this.httpClient.get(`${this.apiUrl}calendar-ics/${calendarId}`, {
            responseType: 'blob',
            observe: 'response'
        });
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api',
    allowedApiDomainsAuth: ['localhost:5001']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BPE1":
/*!********************************************************!*\
  !*** ./src/app/toast-global/toast-global.component.ts ***!
  \********************************************************/
/*! exports provided: ToastGlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastGlobalComponent", function() { return ToastGlobalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_toast_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toast-global.service */ "Qok1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function ToastGlobalComponent_ngb_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastGlobalComponent_ngb_toast_1_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toastService.delete(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", toast_r1.title)("delay", toast_r1.delay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toast_r1.content, " ");
} }
class ToastGlobalComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
}
ToastGlobalComponent.ɵfac = function ToastGlobalComponent_Factory(t) { return new (t || ToastGlobalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_global_service__WEBPACK_IMPORTED_MODULE_1__["ToastGlobalService"])); };
ToastGlobalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastGlobalComponent, selectors: [["app-toast-global"]], decls: 2, vars: 1, consts: [[1, "ngb-toasts"], [3, "header", "delay", "class", "hide", 4, "ngFor", "ngForOf"], [3, "header", "delay", "hide"]], template: function ToastGlobalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastGlobalComponent_ngb_toast_1_Template, 2, 6, "ngb-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvYXN0LWdsb2JhbC90b2FzdC1nbG9iYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastGlobalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toast-global',
                templateUrl: './toast-global.component.html',
                styleUrls: ['./toast-global.component.css']
            }]
    }], function () { return [{ type: _services_toast_global_service__WEBPACK_IMPORTED_MODULE_1__["ToastGlobalService"] }]; }, null); })();


/***/ }),

/***/ "Gg0v":
/*!***************************************************************************************************!*\
  !*** ./src/app/global-error-handler/error-pages/server-error-page/server-error-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServerErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorPageComponent", function() { return ServerErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServerErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerErrorPageComponent.ɵfac = function ServerErrorPageComponent_Factory(t) { return new (t || ServerErrorPageComponent)(); };
ServerErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorPageComponent, selectors: [["app-server-error-page"]], decls: 6, vars: 0, consts: [[1, "container", "d-flex", "flex-column", "align-items-center"], [1, "display-1"]], template: function ServerErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Internal Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1lcnJvci1oYW5kbGVyL2Vycm9yLXBhZ2VzL3NlcnZlci1lcnJvci1wYWdlL3NlcnZlci1lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error-page',
                templateUrl: './server-error-page.component.html',
                styleUrls: ['./server-error-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _toast_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast-global.service */ "Qok1");





class AuthGuardService {
    constructor(router, authService, toastService) {
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
    }
    canActivate(route, state) {
        if (route.data.onlyAuthorized) {
            if (this.authService.isAuthenticated) {
                return true;
            }
            else {
                this.router.navigate(['auth']);
                this.toastService.add({
                    delay: 5000,
                    title: 'Info',
                    content: 'Login again, please'
                });
                return false;
            }
        }
        if (route.data.onlyAnonymous) {
            if (!this.authService.isAuthenticated) {
                return true;
            }
            else {
                this.router.navigate(['']);
                this.toastService.add({
                    delay: 5000,
                    title: 'Info',
                    content: 'You have already signed in'
                });
                return false;
            }
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toast_global_service__WEBPACK_IMPORTED_MODULE_3__["ToastGlobalService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _toast_global_service__WEBPACK_IMPORTED_MODULE_3__["ToastGlobalService"] }]; }, null); })();


/***/ }),

/***/ "MzPQ":
/*!**************************************************************!*\
  !*** ./src/app/global-error-handler/global-error-handler.ts ***!
  \**************************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_toast_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/toast-global.service */ "Qok1");




class GlobalErrorHandler {
    constructor(toastService) {
        this.toastService = toastService;
    }
    handleError(err) {
        let message = err.message;
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"])
            message = err.error.error ? err.error.error : err.message;
        this.toastService.add({
            delay: 5000,
            title: err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] ? `Error ${err.status} from server` : 'Client error message',
            content: message,
            className: "bg-danger text-light"
        });
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_toast_global_service__WEBPACK_IMPORTED_MODULE_2__["ToastGlobalService"])); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_toast_global_service__WEBPACK_IMPORTED_MODULE_2__["ToastGlobalService"] }]; }, null); })();


/***/ }),

/***/ "OpTB":
/*!******************************************************************!*\
  !*** ./src/app/global-error-handler/server-error.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: ServerErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function() { return ServerErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ServerErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status === 404)
                this.router.navigate(['/404']);
            else if (error.status === 500)
                this.router.navigate(['/500']);
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Qok1":
/*!**************************************************!*\
  !*** ./src/app/services/toast-global.service.ts ***!
  \**************************************************/
/*! exports provided: ToastGlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastGlobalService", function() { return ToastGlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastGlobalService {
    constructor() {
        this.toasts = [];
    }
    add(toast) {
        this.toasts.push(toast);
    }
    delete(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
ToastGlobalService.ɵfac = function ToastGlobalService_Factory(t) { return new (t || ToastGlobalService)(); };
ToastGlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastGlobalService, factory: ToastGlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastGlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toast_global_toast_global_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-global/toast-global.component */ "BPE1");




class AppComponent {
    constructor() {
        this.title = 'web-calendar-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toast-global");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _toast_global_toast_global_component__WEBPACK_IMPORTED_MODULE_2__["ToastGlobalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WyWl":
/*!************************************************************!*\
  !*** ./src/app/default-layout/default-layout.component.ts ***!
  \************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DefaultLayoutComponent {
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-default-layout"]], decls: 4, vars: 0, consts: [[1, "bg-primary", "container-fluid", "full-height"], [1, "text-center", "text-white", "display-2", "py-5"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WEB - calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".full-height[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC1sYXlvdXQvZGVmYXVsdC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtbGF5b3V0L2RlZmF1bHQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1oZWlnaHQge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default-layout',
                templateUrl: './default-layout.component.html',
                styleUrls: ['./default-layout.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-form/sign-in-form.component */ "rR1B");
/* harmony import */ var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up-form/sign-up-form.component */ "0OIs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default-layout/default-layout.component */ "WyWl");
/* harmony import */ var _authorize_layout_authorize_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authorize-layout/authorize-layout.component */ "nJXN");
/* harmony import */ var _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-id/my-id.component */ "wgFM");
/* harmony import */ var _toast_global_toast_global_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toast-global/toast-global.component */ "BPE1");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _global_error_handler_error_handler_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./global-error-handler/error-handler.module */ "pyfb");






















function tokenGetter() {
    return localStorage.getItem(_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["ACCESS_TOKEN_KEY"]);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
            _global_error_handler_error_handler_module__WEBPACK_IMPORTED_MODULE_19__["ErrorHandlerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    allowedDomains: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].allowedApiDomainsAuth
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__["SignInFormComponent"],
        _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__["SignUpFormComponent"],
        _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutComponent"],
        _authorize_layout_authorize_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthorizeLayoutComponent"],
        _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_14__["MyIdComponent"],
        _toast_global_toast_global_component__WEBPACK_IMPORTED_MODULE_15__["ToastGlobalComponent"],
        _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_16__["UserPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
        _global_error_handler_error_handler_module__WEBPACK_IMPORTED_MODULE_19__["ErrorHandlerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__["SignInFormComponent"],
                    _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__["SignUpFormComponent"],
                    _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutComponent"],
                    _authorize_layout_authorize_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthorizeLayoutComponent"],
                    _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_14__["MyIdComponent"],
                    _toast_global_toast_global_component__WEBPACK_IMPORTED_MODULE_15__["ToastGlobalComponent"],
                    _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_16__["UserPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
                    _global_error_handler_error_handler_module__WEBPACK_IMPORTED_MODULE_19__["ErrorHandlerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"].forRoot({
                        config: {
                            tokenGetter,
                            allowedDomains: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].allowedApiDomainsAuth
                        }
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eKUV":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-error-handler/error-pages/not-found-page/not-found-page.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NotFoundPageComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.href);
} }
function NotFoundPageComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resource not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotFoundPageComponent {
    constructor(router) {
        this.router = router;
        this.router.events.subscribe((event) => {
            if (event.url === "/404")
                this.href = '';
            else
                this.href = event.url;
        });
    }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 6, vars: 2, consts: [[1, "container", "d-flex", "flex-column", "align-items-center"], [1, "display-1"], [4, "ngIf"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotFoundPageComponent_p_4_Template, 5, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotFoundPageComponent_p_5_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.href);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.href);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1lcnJvci1oYW5kbGVyL2Vycm9yLXBhZ2VzL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: ACCESS_TOKEN_KEY, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_KEY", function() { return ACCESS_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");







const ACCESS_TOKEN_KEY = 'access_token';
class AuthService {
    constructor(httpClient, router, jwtHelper) {
        this.httpClient = httpClient;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        if (this.userId === undefined)
            this.decodeUserToken();
    }
    decodeUserToken() {
        try {
            let token = localStorage.getItem(ACCESS_TOKEN_KEY);
            let tokenInfo = this.jwtHelper.decodeToken(token);
            this.userId = Number(tokenInfo.sub);
            this.firstName = tokenInfo.firstName;
            this.lastName = tokenInfo.lastName;
            this.userEmail = tokenInfo.email;
            this.userNotify = (tokenInfo.notifications === 'True');
        }
        catch (_a) {
            this.router.navigate(['auth']);
        }
    }
    initStorageInfo(info) {
        localStorage.setItem(ACCESS_TOKEN_KEY, info.access_token);
    }
    signIn(login) {
        return this.httpClient.post(`${this.apiUrl}/auth/sign-in`, login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(info => {
            this.initStorageInfo(info);
            this.decodeUserToken();
        }));
    }
    signUp(register) {
        return this.httpClient.post(`${this.apiUrl}/auth/sign-up`, register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(info => {
            this.initStorageInfo(info);
            this.decodeUserToken();
        }));
    }
    editUser(userInfo) {
        return this.httpClient.put(`${this.apiUrl}/auth/edit`, userInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(info => {
            this.initStorageInfo(info);
            this.decodeUserToken();
        }));
    }
    getUsersExceptCurrent() {
        return this.httpClient.get(`${this.apiUrl}/auth/GetAllUsers`);
    }
    get isAuthenticated() {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        return token && !this.jwtHelper.isTokenExpired(token);
    }
    signOut() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        this.router.navigate(['auth']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "nJXN":
/*!****************************************************************!*\
  !*** ./src/app/authorize-layout/authorize-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthorizeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeLayoutComponent", function() { return AuthorizeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthorizeLayoutComponent {
    constructor(authService) {
        this.authService = authService;
    }
    signOut() {
        this.authService.signOut();
    }
}
AuthorizeLayoutComponent.ɵfac = function AuthorizeLayoutComponent_Factory(t) { return new (t || AuthorizeLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthorizeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizeLayoutComponent, selectors: [["app-authorize-layout"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "navbar-nav", "w-100"], ["routerLink", "/calendar", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/user", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "btn", "btn-warning", "ml-auto", "float-right", 3, "click"], [1, "container-fluid", "p-5"]], template: function AuthorizeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizeLayoutComponent_Template_button_click_6_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZS1sYXlvdXQvYXV0aG9yaXplLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorize-layout',
                templateUrl: './authorize-layout.component.html',
                styleUrls: ['./authorize-layout.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "pyfb":
/*!**************************************************************!*\
  !*** ./src/app/global-error-handler/error-handler.module.ts ***!
  \**************************************************************/
/*! exports provided: ErrorHandlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerModule", function() { return ErrorHandlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _global_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-error-handler */ "MzPQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _server_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-error.interceptor */ "OpTB");
/* harmony import */ var _error_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages/not-found-page/not-found-page.component */ "eKUV");







class ErrorHandlerModule {
}
ErrorHandlerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorHandlerModule });
ErrorHandlerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorHandlerModule_Factory(t) { return new (t || ErrorHandlerModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_2__["GlobalErrorHandler"] },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _server_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ServerErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorHandlerModule, { declarations: [_error_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _error_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_2__["GlobalErrorHandler"] },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _server_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ServerErrorInterceptor"], multi: true }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rR1B":
/*!********************************************************!*\
  !*** ./src/app/sign-in-form/sign-in-form.component.ts ***!
  \********************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignInFormComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInFormComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInFormComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/", "auth", "sign-up"]; };
class SignInFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.isInvalidCredentials = false;
    }
    submit() {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        this.form.disable();
        this.authService.signIn(this.form.value)
            .subscribe(() => this.router.navigate(['']), error => {
            if (error.status === 422) {
                this.isInvalidCredentials = true;
                this.form.enable();
            }
        });
    }
}
SignInFormComponent.ɵfac = function SignInFormComponent_Factory(t) { return new (t || SignInFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInFormComponent, selectors: [["app-login-form"]], decls: 21, vars: 13, consts: [[1, "card", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-group"], ["for", "emailInput"], ["type", "email", "id", "emailInput", 1, "form-control", 3, "formControl", "input"], ["class", "form-text text-danger", 4, "ngIf"], ["for", "passwordInput"], ["type", "password", "id", "passwordInput", 1, "form-control", 3, "formControl", "input"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-between"], ["type", "submit", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-link", 3, "routerLink"], [1, "form-text", "text-danger"], [1, "text-danger"]], template: function SignInFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignInFormComponent_Template_form_submit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignInFormComponent_Template_input_input_8_listener() { return ctx.isInvalidCredentials = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignInFormComponent_small_9_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignInFormComponent_Template_input_input_13_listener() { return ctx.isInvalidCredentials = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInFormComponent_small_14_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignInFormComponent_p_15_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "email") && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.getError("required", "password") && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalidCredentials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi1mb3JtL3NpZ24taW4tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './sign-in-form.component.html',
                styleUrls: ['./sign-in-form.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authorize_layout_authorize_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize-layout/authorize-layout.component */ "nJXN");
/* harmony import */ var _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-layout/default-layout.component */ "WyWl");
/* harmony import */ var _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-id/my-id.component */ "wgFM");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-form/sign-in-form.component */ "rR1B");
/* harmony import */ var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up-form/sign-up-form.component */ "0OIs");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");
/* harmony import */ var _global_error_handler_error_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global-error-handler/error-pages/not-found-page/not-found-page.component */ "eKUV");
/* harmony import */ var _global_error_handler_error_pages_server_error_page_server_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global-error-handler/error-pages/server-error-page/server-error-page.component */ "Gg0v");













const routes = [
    {
        path: '',
        component: _authorize_layout_authorize_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthorizeLayoutComponent"],
        data: {
            onlyAuthorized: true
        },
        canActivate: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
        ],
        children: [
            {
                path: '',
                redirectTo: 'calendar',
                pathMatch: 'full'
            },
            {
                path: 'id',
                component: _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_4__["MyIdComponent"]
            },
            {
                path: 'calendar',
                loadChildren: () => __webpack_require__.e(/*! import() | calendar-web-calendar-module */ "calendar-web-calendar-module").then(__webpack_require__.bind(null, /*! ./calendar/web-calendar.module */ "23am")).then(module => module.WebCalendarModule)
            },
            {
                path: 'user',
                component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__["UserPageComponent"]
            },
            {
                path: '404',
                component: _global_error_handler_error_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundPageComponent"]
            },
            {
                path: '500',
                component: _global_error_handler_error_pages_server_error_page_server_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorPageComponent"]
            }
        ]
    },
    {
        path: 'auth',
        component: _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            onlyAnonymous: true
        },
        canActivate: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
        ],
        children: [
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full'
            },
            {
                path: 'sign-in',
                component: _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__["SignInFormComponent"]
            },
            {
                path: 'sign-up',
                component: _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__["SignUpFormComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wgFM":
/*!******************************************!*\
  !*** ./src/app/my-id/my-id.component.ts ***!
  \******************************************/
/*! exports provided: MyIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyIdComponent", function() { return MyIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MyIdComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        this.httpClient.get(`${this.apiUrl}/auth/id`)
            .subscribe(id => {
            this.id = +id;
        });
    }
}
MyIdComponent.ɵfac = function MyIdComponent_Factory(t) { return new (t || MyIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MyIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyIdComponent, selectors: [["app-my-id"]], decls: 2, vars: 1, consts: [[1, "display-1"]], template: function MyIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" My Id: ", ctx.id, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWlkL215LWlkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-id',
                templateUrl: './my-id.component.html',
                styleUrls: ['./my-id.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map