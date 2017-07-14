// importing City model
var City = require('./citySchema');

// Create endpoint /api/countries for GET
exports.getCities = function(req, res) {
    City.find(function(err, cities) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(cities);
    });
};