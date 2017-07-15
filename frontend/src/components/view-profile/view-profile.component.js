
'use strict';

import template from './view-profile.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';

class ViewProfileComponent {
    constructor() {
        this.controller = ViewProfileComponentController;
        this.template = template;
        this.bindings = {
            eventsAsHost: '<',
            eventsAsGuest: '<'
        };
    }

    static get name() {
        return 'viewProfile';
    }

}

class ViewProfileComponentController {
    constructor($state, EventsService, UserService) {
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
    }

    getCurrentUser() {
        let user = this.UserService.getCurrentUser();
        return user._id;
    }

    details(event) {
        let _id = event['_id'];
        this.$state.go('event', { eventId: _id });
    };

    edit(event) {
        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];
            this.$state.go('eventEdit', { eventId: _id });
        } else {
            this.$state.go('login', {});
        }
    };

    delete(event) {
        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];
            this.EventsService.delete(_id).then(response => {
                let index = this.events.map(x => x['_id']).indexOf(_id);
                this.events.splice(index, 1);
            })
        } else {
            this.$state.go('login', {});
        }
    };

    static get $inject() {
        return ['$state', EventsService.name, UserService.name];
    }

}

export default ViewProfileComponent;