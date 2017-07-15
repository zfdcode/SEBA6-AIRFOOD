
'use strict';
import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';

class ViewProfileComponent {
    constructor() {
        this.controller = ViewProfileComponentController;
        this.template = template;
        this.bidings = {
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
        this.user = this.UserService.getCurrentUser();
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
        return ['$state', UserService.name, EventsService.name];
    }

}

export default ViewProfileComponent;