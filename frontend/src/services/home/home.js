'use strict';

import angular from 'angular';

import HomeService from './home.service';


export default angular.module('HomeServiceDefinition', [])
    .service(HomeService.name, HomeService)