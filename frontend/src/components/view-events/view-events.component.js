
'use strict';

import template from './view-events.template.html';
import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';


class ViewEventsComponent {
    constructor(){
        this.controller = ViewEventsComponentController;
        this.template = template;
        this.bindings = {
            events: '<',
        }
    }

    static get name() {
        return 'viewEvents';
    }


}

class ViewEventsComponentController{
    constructor($state,EventsService,UserService){
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;

    }

    details (event) {
        let _id = event['_id'];
        this.$state.go('event',{ eventId:_id});
    };

    edit (event) {
        /*
        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];
            this.$state.go('eventEdit',{ eventId:_id});
        } else {
            this.$state.go('login',{});
        }*/
        let _id = event['_id'];
        this.$state.go('eventEdit',{ eventId:_id});
    };

    newEvent(){
        /*
        if (this.UserService.isAuthenticated()) {
            this.$state.go('eventAdd',{});
        } else {
            this.$state.go('login',{});
        }
        */
        this.$state.go('eventAdd',{});
    }


    delete(event) {
        /*
        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];

            this.EventsService.delete(_id).then(response => {
                let index = this.events.map(x => x['_id']).indexOf(_id);
                this.events.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
        */
        let _id = event['_id'];

        this.EventsService.delete(_id).then(response => {
        let index = this.events.map(x => x['_id']).indexOf(_id);
        this.events.splice(index, 1);
    })
    };


    static get $inject(){
        return ['$state', EventsService.name, UserService.name];
    }

}

export default ViewEventsComponent;