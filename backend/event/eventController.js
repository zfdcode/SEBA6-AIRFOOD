// importing Event model
var Event = require('./eventSchema');
exports.postEvent = function(req, res) {
    var event = new Event(req.body);
    //do not allow user to fake identity. The user who postet the event must be the same user that is logged in
    /*
    if (!req.user.equals(event.user)) {
        res.sendStatus(401);
    }
    */
    event.save(function(err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};
// Create endpoint /api/events for GET
exports.getEvents = function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(events);
    });
};
// Create endpoint /api/events/:event_id for GET
exports.getEvent = function(req, res) {
    // Use the Event model to find a specific event
    Event.findById(req.params.event_id, function(err, event) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(event);
    });
};
// Create endpoint /api/events/:event_id for PUT
exports.putEvent = function(req, res) {
    // Use the Event model to find a specific event and update it
    Event.findByIdAndUpdate(
        req.params.event_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, event) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(event);
    });
};
// Create endpoint /api/events/:event_id for DELETE
exports.deleteEvent = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Event.findById(req.params.event_id, function(err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};