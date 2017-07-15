'use strict';

import template from './view-home.template.html';
import CityService from './../../services/city/city.service';
import UserService from './../../services/user/user.service';

import './view-home.style.css';

class ViewHomeComponent {
    constructor() {
        this.controller = ViewHomeComponentController;
        this.template = template;
        this.bindings = {
            cities: '<',
        }
    }

    static get name() {
        return 'viewHome';
    }
}

class ViewHomeComponentController {
    constructor($state, CityService, UserService) {
        this.$state = $state;
        this.inputs = {};
        this.CityService = CityService;
        this.UserService = UserService;
        this.today = new Date();
    }

    searchEvents() {
        let city = this.inputs.city;
        let date = this.inputs.time;
        let formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let guestCount = this.inputs.guestCount;
        this.$state.go('events', { city: city, date: formattedDate, guestCount: guestCount });
    };

    newEvent() {
        if (this.UserService.isAuthenticated()) {
            this.$state.go('eventAdd', {});
        } else {
            this.$state.go('login', {});
        }
    }

    static get $inject() {
        return ['$state', CityService.name, UserService.name];
    }
}

export default ViewHomeComponent;