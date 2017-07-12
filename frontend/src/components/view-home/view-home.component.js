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
        this.myDate = new Date();
        this.isOpen = false;
        this.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
    ];
    }

    searchEvents() {
        this.$state.go('events',{});
    };

    static get $inject(){
        return ['$state'];
    }
}

export default ViewHomeComponent;