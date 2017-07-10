// Load required packages
var mongoose = require('mongoose');

// Define our city schema
var City   = new mongoose.Schema({
    name : string
});

// Export the Mongoose model
module.exports = mongoose.model('City', City);

