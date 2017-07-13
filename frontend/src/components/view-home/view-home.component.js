'use strict';

import template from './view-home.template.html';
import CityService from './../../services/city/city.service';

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
    constructor($state,CityService) {
        this.$state = $state;
        this.inputs = {};
        this.myDate = new Date();
        this.isOpen = false;
        this.CityService = CityService;
    }

    searchEvents() {
        this.$state.go('events', {});
    };

    static get $inject() {
        return ['$state', CityService.name];
    }
}

export default ViewHomeComponent;