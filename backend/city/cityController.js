// importing City model
var City = require('./citySchema');

// Create endpoint /api/cities for GET
exports.getCities = function(req, res) {
    City.find(function(err, cities) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(cities);
    });
};

// Create endpoint /api/cities/:city_id for GET
exports.getCity = function(req, res) {
    // Use the Event model to find a specific event
    City.findById(req.params.city_id, function(err, city) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(city);
    });
};