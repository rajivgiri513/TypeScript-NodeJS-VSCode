"use strict";
exports.__esModule = true;
function messagePrint(target) {
    Object.defineProperty(target.prototype, 'server', { value: function () { return 'Node server is running'; } });
}
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.Constructor = function (name) {
        this.name = name;
    };
    return Message;
}());
exports["default"] = Message;
