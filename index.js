"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var crmRoutes_1 = require("./src/routes/crmRoutes");
var createMessage_1 = require("./src/controllers/createMessage");
var settings_1 = require("./settings");
var crmController_1 = require("./src/controllers/crmController");
var app = express();
//const PORT: number = 3000;
//const mlabUser: string = 'root';
//const mlabPass: string = 'root';
//instance of our class
var messages = new createMessage_1["default"](settings_1.Settings.PORT);
var getContact = new crmController_1.Contact();
var dataConnection = function (user, pass) {
    return "mongodb+srv://".concat(user, ":").concat(pass, "@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority");
};
var database = dataConnection(settings_1.Settings.mlabUser, settings_1.Settings.mlabPass);
mongoose.connect(database, {
//useMongoClient:true
});
// bodyparser setup */ 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
(0, crmRoutes_1["default"])(app);
//interface Name {
////   firstName: string;
//}
function nameCreator(name) {
    return name;
}
var myName = nameCreator('Raj Giri, ');
var myAge = nameCreator(37);
var Batman = { weapon: "Bat Mobile", skills: 10, name: "Raj G" };
// serving static files
app.use(express.static('public'));
app.get('/', function (req, res) {
    return res.send(Batman);
});
app.listen(settings_1.Settings.PORT, function () {
    return console.log(myName, myAge, messages.messagePrint());
});
var fs = require('fs');
var out = { getContact: getContact };
var myConsole = new console.Console(fs.createWriteStream('./output.txt'));
myConsole.log(out);
