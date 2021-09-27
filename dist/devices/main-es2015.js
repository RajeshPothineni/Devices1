(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <span>Devices</span>\n</mat-toolbar>\n\n<div class=\"devices\">\n  <form [formGroup]=\"deviceForm\">\n  <mat-form-field>\n    <div>\n      <mat-toolbar>\n        <!-- Display files names -->\n        <input matInput  formControlName=\"fileName\" readonly name=\"fileName\" />\n\n        <!-- Browse Button -->\n        <button mat-flat-button color=\"primary\">\n          Browse XML File\n        </button>\n      </mat-toolbar>\n\n      <!-- Fetch selected filed on change -->\n      <input type=\"file\" #fileInput id=\"uploadFile\" (change)=\"uploadFileEvt($event)\" calss=\"file-upload\" name=\"uploadFile\"\n        accept=\"xml\" />\n\n    </div>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"standard\" class=\"pms_font_family_gotham\">\n    <mat-icon matPrefix>search</mat-icon>\n    <input matInput [disabled]=\"devices.data.length < 1\" (keyup)=\"applyFilter($event)\" placeholder=\"Device id...\" #input>\n  </mat-form-field>\n\n</form>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"devices\">\n\n      <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                        [aria-label]=\"checkboxLabel()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\"\n                        [aria-label]=\"checkboxLabel(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <!-- deviceId Column -->\n      <ng-container matColumnDef=\"deviceId\">\n          <th mat-header-cell *matHeaderCellDef> Device Id </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.deviceId}} </td>\n      </ng-container>\n\n      <!-- Channel Column -->\n      <ng-container matColumnDef=\"channel\">\n          <th mat-header-cell *matHeaderCellDef> Channel </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.channel}}</td>\n      </ng-container>\n\n      <!-- startTime Column -->\n      <ng-container matColumnDef=\"startTime\">\n          <th mat-header-cell *matHeaderCellDef> Start Date </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.startTime | date: 'MM/dd/yyyy hh:mm a'}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- endTime Column -->\n      <ng-container matColumnDef=\"endTime\">\n          <th mat-header-cell *matHeaderCellDef> End Date </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.endTime | date: 'MM/dd/yyyy hh:mm a'}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index;\" (click)=\"selection.toggle(row)\"></tr>\n    </table>\n  </div>\n\n  <button mat-raised-button *ngIf=\"selection.selected.length\" class=\"export-btn\" color=\"primary\" (click)=\"exportXML()\">Export</button>\n  <div class=\"clear\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".devices {\n  max-width: 900px;\n  margin: 1rem auto;\n  padding: 1rem;\n  border: 1px solid #f1f1f1;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;\n}\n.devices table {\n  width: 100%;\n}\n.devices table th {\n  font-weight: 700;\n  font-size: 16px;\n}\n.devices .mat-toolbar-single-row {\n  height: auto !important;\n  background: transparent;\n}\n.devices .mat-toolbar-single-row button {\n  width: 200px;\n}\n.devices mat-form-field {\n  width: 100%;\n}\n.devices mat-form-field #uploadFile {\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 9;\n  opacity: 0;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n}\n.devices .export-btn {\n  float: right;\n  margin-top: 10px;\n}\n.devices .clear {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxEZXZpY2VzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3RkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0FDRVI7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0daO0FEQUk7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FERFE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZpY2VzIHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAjdXBsb2FkRmlsZSB7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5leHBvcnQtYnRuIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5jbGVhciB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmRldmljZXMge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbn1cbi5kZXZpY2VzIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGV2aWNlcyB0YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5kZXZpY2VzIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmRldmljZXMgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmRldmljZXMgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXZpY2VzIG1hdC1mb3JtLWZpZWxkICN1cGxvYWRGaWxlIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGV2aWNlcyAuZXhwb3J0LWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kZXZpY2VzIC5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let AppComponent = class AppComponent {
    constructor() {
        this.displayedColumns = ['select', 'deviceId', 'channel', 'startTime', 'endTime'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.devices = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.devices.filterPredicate = this.customFilterPredicate();
        this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Choose XML File')
        });
    }
    uploadFileEvt(e) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        this.deviceForm.get('fileName').setValue(file.name);
        const reader = new FileReader();
        reader.onload = (evt) => {
            const xmlData = evt.target.result;
            //  console.log(xmlData);
            this.parseXML(xmlData)
                .then((data) => {
                this.devices = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                this.devices.filterPredicate = this.customFilterPredicate();
            });
        };
        reader.readAsText(file);
    }
    parseXML(xmlData) {
        return new Promise(resolve => {
            let channelsData = [];
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlData, "text/xml");
            let channels = xmlDoc.getElementsByTagName("Channel");
            //console.log(channels);
            if (channels) {
                for (let i = 0; i < channels.length; i++) {
                    try {
                        let intervalChannelID = channels[i].children[0]['attributes'][0].nodeValue;
                        let deviceId = intervalChannelID.split(':')[0];
                        let channel = intervalChannelID.split(':')[1];
                        let startTime = channels[i].children[1].childNodes[1].childNodes[1]['attributes'][0].nodeValue;
                        let endTime = channels[i].children[1].childNodes[1].childNodes[1]['attributes'][1].nodeValue;
                        channelsData.push({
                            intervalChannelID: intervalChannelID,
                            deviceId: deviceId,
                            channel: channel,
                            startTime: startTime,
                            endTime: endTime,
                            xml: channels[i].outerHTML
                        });
                    }
                    catch (_a) { }
                }
            }
            resolve(channelsData);
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.devices.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.devices.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.intervalChannelID}`;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.devices.filter = filterValue.trim().toLowerCase();
        this.selection.clear();
    }
    customFilterPredicate() {
        const deviceFilterPredicate = function (data, filter) {
            return data.deviceId.toString().trim().indexOf(filter) !== -1;
        };
        return deviceFilterPredicate;
    }
    exportXML() {
        console.log(this.selection.selected);
        let xmlTitle = '';
        let xmlDoc = '<?xml version="1.0" encoding="UTF-8"?>\n\t<MeterReadingDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\t<ImportExportParameters CreateReadingGroupForRegisterReads="false" CreateResubmitFile="false">\n\t<DataFormat DSTTransitionType="ITRON_Compliant" ReadingTimestampType="Utc"/>\n\t</ImportExportParameters>\n\t<Channels>';
        this.selection.selected.forEach(d => {
            if (xmlTitle.indexOf(d.deviceId) < 0) {
                if (xmlTitle !== '') {
                    xmlTitle += '_';
                }
                xmlTitle += d.deviceId;
            }
            xmlDoc += ('\n\t' + d.xml);
        });
        xmlDoc += '\n\t</Channels>\n\t</MeterReadingDocument>';
        // blob text should be in an array
        let fileToExport = new Blob([xmlDoc], { type: "text/xml" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(fileToExport);
        a.target = "_blank";
        a.download = "Channel_" + xmlTitle + ".xml";
        a.click();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fileInput', { static: true })
], AppComponent.prototype, "fileInput", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Devices\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map