'use strict';

import template from './view-home.template.html';
import CityService from './../../services/city/city.service';
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
    constructor($state,CityService) {
        this.$state = $state;
        this.inputs = {};
        this.isOpen = false;
        this.CityService = CityService;
    }

    searchEvents() {
        let city=this.inputs.city
        let date = this.inputs.time
        this.$state.go('events', {});
    };

    static get $inject() {
        return ['$state', CityService.name];
    }
}

export default ViewHomeComponent;