"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
    }
    LinkedList.prototype.addToHead = function (newNode) {
        if (this.isEmpty) {
            console.log("List is empty");
        }
        else {
        }
    };
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map