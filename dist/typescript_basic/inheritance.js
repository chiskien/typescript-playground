"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableReport = exports.Report = void 0;
var Report = /** @class */ (function () {
    function Report(data, id) {
        this.data = data;
        this.id = id;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (_data) {
            console.log(_data);
        });
    };
    return Report;
}());
exports.Report = Report;
var TableReport = /** @class */ (function (_super) {
    __extends(TableReport, _super);
    function TableReport(headers, value, id) {
        var _this = _super.call(this, value, id) || this;
        _this.headers = headers;
        return _this;
    }
    TableReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TableReport;
}(Report));
exports.TableReport = TableReport;
//# sourceMappingURL=inheritance.js.map