const mongoose = require("mongoose");
const config = require("../config");
const dbUrl = config.mongoDbServerUrl;

mongoose.connect(dbUrl);

mongoose.connection.on("connected", function() {

    console.log("Mongoose connected to " + dbUrl);

});

mongoose.connection.on("error", function(error) {

    console.log("Mongoose connection error. " + error);

});

mongoose.connection.on("disconnected", function() {

    console.log("Mongoose disconnected.");

});

require("./students.models");
require("./courses.models");