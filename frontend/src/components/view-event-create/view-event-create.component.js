
'use strict';

import template from './view-event-create.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';

class ViewEventCreateComponent {
    constructor(){
        this.controller = ViewEventCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewEventCreate';
    }
}

class ViewEventCreateComponentController{
    constructor($state, EventsService,UserService){
        this.event = {};
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
        this.myDate = new Date();
        //this.isOpen = false;
        this.eventDescription = "";
    }

    uploadFile(){
        //TODO: uploading process
    }

    cancel() {
        this.$state.go('events',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.event['user'] = user['_id'];
        let date = this.event.time;
        this.event.time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
        this.EventsService.create(this.event).then(data => {
            let _id = data['_id'];
            this.$state.go('event',{ eventId:_id});
        });

    };

    static get $inject(){
        return ['$state', EventsService.name, UserService.name];
    }

}

export default ViewEventCreateComponent;