// importing FoodType model
var FoodType = require('./foodTypeSchema');

// Create endpoint /api/foodTypes for GET
exports.getFoodTypes = function(req, res) {
    FoodType.find(function(err, foodType) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(foodType);
    });
};