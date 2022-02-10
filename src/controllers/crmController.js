"use strict";
exports.__esModule = true;
exports.deleteContact = exports.updateContact = exports.getContactWithID = exports.getContacts = exports.addNewContact = void 0;
var mongoose = require("mongoose");
var crmModel_1 = require("../models/crmModel");
var Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
var addNewContact = function (req, res) {
    var newContact = new Contact(req.body);
    newContact.save(function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.addNewContact = addNewContact;
var getContacts = function (req, res) {
    Contact.find({}, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.getContacts = getContacts;
var getContactWithID = function (req, res) {
    Contact.findById(req.params.contactId, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.getContactWithID = getContactWithID;
var updateContact = function (req, res) {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { "new": true }, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.updateContact = updateContact;
var deleteContact = function (req, res) {
    Contact.remove({ _id: req.params.contactId }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    });
};
exports.deleteContact = deleteContact;
