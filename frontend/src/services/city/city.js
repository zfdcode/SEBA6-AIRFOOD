'use strict';

import angular from 'angular';

import CityService from './city.service';


export default angular.module('CityServiceDefinition', [])
    .service(CityService.name, CityService)