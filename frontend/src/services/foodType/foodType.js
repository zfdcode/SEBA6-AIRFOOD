'use strict';

import angular from 'angular';

import FoodTypeService from './foodType.service';


export default angular.module('FoodTypeServiceDefinition', [])
    .service(FoodTypeService.name, FoodTypeService)