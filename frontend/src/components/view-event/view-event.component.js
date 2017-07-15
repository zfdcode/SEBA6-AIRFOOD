
'use strict';

import template from './view-event.template.html';
import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';

class ViewEventComponent {
    constructor() {
        this.controller = ViewEventComponentController;
        this.template = template;
        this.bindings = {
            event: '<',
        }
    }
    static get name() {
        return 'viewEvent';
    }
}

class ViewEventComponentController {
    constructor($state, EventsService, UserService) {
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
        this.user = this.UserService.getCurrentUser();
    }

    edit() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.event['_id'];
            this.$state.go('eventEdit', { eventId: _id });
        } else {
            this.$state.go('login', {});
        }
    };

    bookEvent() {
        //TODO:
        this.event.isOpen=false;
        this.event['guest'] = this.user._id
        element.toggleClass("btn-active");
        if(this.event.isOpen==false){
            scope.buttonText="Book";
            scope.isOpen=false;
        } else {
            scope.buttonText ="Is Booked";
            this.event.isOpen=true;
        }
        console.log(this.event._id);
        console.log(this.event);
        
        //this.event.isOpen=false
        //this.EventsService.update(this.event).then()...
    }


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.event['_id'];
            this.EventsService.delete(_id).then(response => {
                this.$state.go('events', {});
            });
        } else {
            this.$state.go('login', {});
        }
    };


    getPosterURL() {
        let posterURL = 'http://placehold.it/32x32';
        if (this.event.hasOwnProperty('posters')) {
            if (this.event.posters.hasOwnProperty('thumbnail')) {
                posterURL = this.event.posters.thumbnail;
            } else if (this.event.posters.hasOwnProperty('profile')) {
                posterURL = this.event.posters.profile;
            } else if (this.event.posters.hasOwnProperty('detailed')) {
                posterURL = this.event.posters.detailed;
            } else {
                posterURL = this.event.posters.original;
            }
        }
        return posterURL;
    }

    static get $inject() {
        return ['$state', EventsService.name, UserService.name];
    }

}


export default ViewEventComponent;