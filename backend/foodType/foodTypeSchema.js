// Load required packages
var mongoose = require('mongoose');

// Define our foodType schema
var FoodType   = new mongoose.Schema({
    type : String
});

// Export the Mongoose model
module.exports = mongoose.model('FoodType', FoodType);

