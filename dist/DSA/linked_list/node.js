"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data, next) {
        this._data = data;
        this._next = null;
    }
    Object.defineProperty(Node.prototype, "next", {
        get: function () {
            return this._next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=node.js.map