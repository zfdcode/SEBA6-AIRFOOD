'use strict';

import angular from 'angular';

import ViewErrorComponent from './view-error.component';


export default angular.module('ViewError', [])
    .component(ViewErrorComponent.name, new ViewErrorComponent);