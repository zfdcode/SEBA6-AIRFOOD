'use strict';

import template from './view-home.template.html';

class ViewHomeComponent {
    constructor(){
        this.controller = ViewHomeComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewHome';
    }
}

class ViewHomeComponentController{
    constructor($state){
        this.$state = $state;
        this.inputs = {};
    }

    searchEvents() {
        this.$state.go('events',{});
    };

    static get $inject(){
        return ['$state'];
    }
}

export default ViewHomeComponent;