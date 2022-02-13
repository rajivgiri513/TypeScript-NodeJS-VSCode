"use strict";
exports.__esModule = true;
var Messenger = /** @class */ (function () {
    function Messenger(port) {
        this.port = port;
    }
    Messenger.prototype.messagePrint = function () {
        return "Node and Express server is running on port ".concat(this.port);
    };
    return Messenger;
}());
exports["default"] = Messenger;
