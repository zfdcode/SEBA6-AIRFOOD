
'use strict';

import template from './view-error.template.html';

class ViewErrorComponent {
    constructor() {
        this.controller = ViewErrorComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewError';
    }

}

class ViewErrorComponentController {
    constructor($state, ) {
        this.$state = $state;
    }

    static get $inject() {
        return ['$state'];
    }

}

export default ViewErrorComponent;