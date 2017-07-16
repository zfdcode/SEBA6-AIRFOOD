
'use strict';

import template from './view-success.template.html';

class ViewSuccessComponent {
    constructor() {
        this.controller = ViewSuccessComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewSuccess';
    }

}

class ViewSuccessComponentController {
    constructor($state, ) {
        this.$state = $state;
    }

    static get $inject() {
        return ['$state'];
    }

}

export default ViewSuccessComponent;