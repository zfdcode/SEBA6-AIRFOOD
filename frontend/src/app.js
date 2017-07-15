'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import EventsService from './services/events/events';
import UserService from './services/user/user';
import CityService from './services/city/city';
import FoodTypeService from './services/foodType/foodType';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewEvents from './components/view-events/view-events';
import ViewEvent from './components/view-event/view-event';
import ViewEventEdit from './components/view-event-edit/view-event-edit';
import ViewEventCreate from './components/view-event-create/view-event-create';
import ViewLogin from './components/view-login/view-login';
import ViewHome from './components/view-home/view-home';
import ViewRegister from './components/view-register/view-register';
import ViewError from './components/view-error/view-error';
import ViewProfile from './components/view-profile/view-profile';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    ngMessages,
    UserService.name,
    EventsService.name,
    CityService.name,
    FoodTypeService.name,
    AppContent.name,
    ViewEvents.name,
    ViewEvent.name,
    ViewEventEdit.name,
    ViewEventCreate.name,
    ViewLogin.name,
    ViewHome.name,
    ViewRegister.name,
    ViewError.name,
    ViewProfile.name,
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;