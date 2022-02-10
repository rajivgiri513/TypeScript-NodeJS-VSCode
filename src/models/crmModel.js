"use strict";
exports.__esModule = true;
exports.ContactSchema = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = {
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        "default": Date.now
    }
};
exports.ContactSchema = new mongoose.Schema(schema);
