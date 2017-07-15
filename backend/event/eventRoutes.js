module.exports = eventRoutes;


function eventRoutes(passport) {

    var eventController = require('./eventController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    //TODO:set unless methods
    router.use(mw.unless({method: ['GET','OPTIONS']}));

    router.route('/')
        .post(eventController.postEvent)
        .get(eventController.getEvents);

    router.route('/city=:city&date=:date&guestCount=:guestCount')
        .get(eventController.getEventsByFilter);

    router.route('/user=:user')
        .get(eventController.getEventsByUser);

    router.route('/guest=:guest')
        .get(eventController.getEventsByGuest);

    router.route('/:event_id')
        .get(eventController.getEvent)
        .put(eventController.putEvent)
        .delete(eventController.deleteEvent);

    router.route('/details/:event_id')
        .get(eventController.getEventDetails)

    return router;
}
