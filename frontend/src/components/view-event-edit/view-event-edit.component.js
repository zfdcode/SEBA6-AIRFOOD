
'use strict';

import template from './view-event-edit.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';
import CityService from './../../services/city/city.service';
import FoodTypeService from './../../services/foodType/foodType.service'

class ViewEventEditComponent {
    constructor(){
        this.controller = ViewEventEditComponentController;
        this.template = template;
        this.bindings = {
            event: '<',
            cities: '<',
            foodTypes: '<',
        }
    }

    static get name() {
        return 'viewEventEdit';
    }
}

class ViewEventEditComponentController{
    constructor($state, EventsService) {
        this.model = {};
        this.$state = $state;
        this.EventsService = EventsService;

    }
    $onInit()
        {
        //Clone the Event Data
        this.model = JSON.parse(JSON.stringify(this.event))
    }

    cancel()
        {
        this.model = JSON.parse(JSON.stringify(this.event));
        //this.$state.go('events',{});
        window.history.go(-1);
    };

    save()
        {
        let _id = this.event['_id'];
        let date = this.model.time;
        this.model.time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
        this.EventsService.update(this.model).then(data => {
            this.event = JSON.parse(JSON.stringify(data));
            this.$state.go('event',{ eventId:_id});
        });

    };

    delete()
        {
        let _id = this.event['_id'];
        this.EventsService.delete(_id).then(response => {
            this.$state.go('events',{});
        });
    };
    uploadFile(){
        //TODO: uploading process
    }

    static get $inject()
        {
        return ['$state', EventsService.name];
    }

}


export default ViewEventEditComponent;