module.exports = foodTypeRoutes;


function foodTypeRoutes(passport) {

    var foodTypeController = require('./foodTypeController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    //TODO:set unless methods
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
        .get(foodTypeController.getFoodTypes);

    router.route('/:foodType_id')
        .get(foodTypeController.getFoodType);

    return router;
}
