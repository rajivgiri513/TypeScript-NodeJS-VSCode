"use strict";
exports.__esModule = true;
exports.deleteContact = exports.updateContact = exports.getContactWithID = exports.getContacts = exports.addNewContact = exports.Contact = void 0;
var mongoose = require("mongoose");
var crmModel_1 = require("../models/crmModel");
exports.Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
var addNewContact = function (req, res) {
    var newContact = new exports.Contact(req.body);
    newContact.save(function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.addNewContact = addNewContact;
var getContacts = function (req, res) {
    exports.Contact.find({}, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
        for (var _i = 0, contact_1 = contact; _i < contact_1.length; _i++) {
            var item = contact_1[_i];
            console.log(item);
        }
        for (var itemPos in contact) {
            console.log(itemPos);
        }
    });
};
exports.getContacts = getContacts;
var getContactWithID = function (req, res) {
    exports.Contact.findById(req.params.contactId, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.getContactWithID = getContactWithID;
var updateContact = function (req, res) {
    exports.Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { "new": true }, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.updateContact = updateContact;
var deleteContact = function (req, res) {
    exports.Contact.remove({ _id: req.params.contactId }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    });
};
exports.deleteContact = deleteContact;
