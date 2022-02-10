"use strict";
exports.__esModule = true;
var crmController_1 = require("../controllers/crmController");
var routes = function (app) {
    app.route('/contact')
        .get(function (req, res, next) {
        // middleware
        console.log("Request from: ".concat(req.originalUrl));
        console.log("Request type: ".concat(req.method));
        next();
    }, crmController_1.getContacts)
        // POST endpoint
        .post(crmController_1.addNewContact);
    app.route('/contact/:contactId')
        // get specific contact
        .get(crmController_1.getContactWithID)
        // put request
        .put(crmController_1.updateContact)["delete"](crmController_1.deleteContact);
};
exports["default"] = routes;
