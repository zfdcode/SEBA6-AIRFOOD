
'use strict';

import template from './view-event-create.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';
import CityService from './../../services/city/city.service';

class ViewEventCreateComponent {
    constructor() {
        this.controller = ViewEventCreateComponentController;
        this.template = template;
        this.bindings = {
            cities: '<',
        }
    }

    static get name() {
        return 'viewEventCreate';
    }
}

class ViewEventCreateComponentController {
    constructor($state, EventsService, UserService, CityService) {
        this.event = {};
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
        this.CityService = CityService;
        this.today = new Date();
    }

    uploadFile() {
        //TODO: uploading process
    }

    cancel() {
        this.$state.go('events', {});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.event['user'] = user['_id'];
        let date = this.event.time;
        this.event.time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        this.EventsService.create(this.event).then(data => {
            let _id = data['_id'];
            this.$state.go('event', { eventId: _id });
        });

    };

    static get $inject() {
        return ['$state', EventsService.name, UserService.name, CityService.name];
    }

}

export default ViewEventCreateComponent;