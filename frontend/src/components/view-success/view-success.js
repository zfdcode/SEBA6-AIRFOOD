'use strict';

import angular from 'angular';

import ViewSuccessComponent from './view-success.component';


export default angular.module('ViewSuccess', [])
    .component(ViewSuccessComponent.name, new ViewSuccessComponent);