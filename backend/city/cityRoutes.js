module.exports = cityRoutes;


function cityRoutes(passport) {

    var cityController = require('./cityController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', { session: false });
    mw.unless = unless;

    //middleware
    //TODO:set unless methods
    router.use(mw.unless({ method: ['GET', 'OPTIONS'] }));

    router.route('/')
        .get(cityController.getCities);

    router.route('/:city_id')
        .get(cityController.getCity);

    return router;
}
