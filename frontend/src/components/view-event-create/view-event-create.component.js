
'use strict';

import template from './view-event-create.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';
import CityService from './../../services/city/city.service';
import FoodTypeService from './../../services/foodType/foodType.service'

class ViewEventCreateComponent {
    constructor() {
        this.controller = ViewEventCreateComponentController;
        this.template = template;
        this.bindings = {
            cities: '<',
            foodTypes: '<',
        }
    }

    static get name() {
        return 'viewEventCreate';
    }
}

class ViewEventCreateComponentController {
    constructor($state, EventsService, UserService, CityService, FoodTypeService) {
        this.model = {};
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
        this.CityService = CityService;
        this.FoodTypeService = FoodTypeService;
        this.today = new Date();
    }

    uploadFile() {
        //TODO: uploading process
    }

    cancel() {
        //this.$state.go('events', {});
        window.history.go(-1);
    };

    save() {
        console.log(this.model);

        let user = this.UserService.getCurrentUser();
        debugger;
        this.model['user'] = user['_id'];
        let date = this.model.time;
        this.model.time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        this.EventsService.create(this.model).then(data => {
            let _id = data['_id'];
            this.$state.go('event', { eventId: _id });
        });

    };

    static get $inject() {
        return ['$state', EventsService.name, UserService.name, CityService.name, FoodTypeService.name];
    }

}

export default ViewEventCreateComponent;