'use strict';

import EventsComponent from './../components/view-events/view-events.component';
import EventComponent from './../components/view-event/view-event.component';
import EventEditComponent from './../components/view-event-edit/view-event-edit.component';
import EventCreateComponent from './../components/view-event-create/view-event-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import HomeComponent from './../components/view-home/view-home.component';
import RegisterComponent from './../components/view-register/view-register.component';
import ErrorComponent from './../components/view-error/view-error.component';
import ProfileComponent from './../components/view-profile/view-profile.component';

import EventsService from './../services/events/events.service';
import CityService from './../services/city/city.service';
import FoodTypeService from './../services/foodType/foodType.service';
import UserService from './../services/user/user.service';


resolveEvent.$inject = ['$stateParams', EventsService.name];
function resolveEvent($stateParams, eventsService) {
    return eventsService.get($stateParams.eventId);
}

resolveEvents.$inject = ['$stateParams', EventsService.name];
function resolveEvents($stateParams, eventsService) {
    return eventsService.list($stateParams.city, $stateParams.date, $stateParams.guestCount);
}

resolveEventsAsHost.$inject = ['$stateParams', EventsService.name, UserService.name];
function resolveEventsAsHost($stateParams, eventsService, userService) {
    let user = userService.getCurrentUser();
    return eventsService.getEventsAsHost(user._id);
}

resolveEventsAsHost.$inject = ['$stateParams', EventsService.name, UserService.name];
function resolveEventsAsGuest($stateParams, eventsService, userService) {
    let guest = userService.getCurrentUser();
    return eventsService.getEventsAsGuest(guest._id);
}

resolveCities.$inject = [CityService.name];
function resolveCities(cityService) {
    return cityService.list();
}

resolveFoodTypes.$inject = [FoodTypeService.name];
function resolveFoodTypes(foodTypeService) {
    return foodTypeService.list();
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /error
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            component: HomeComponent.name,
            resolve: {
                cities: resolveCities
            }
        })
        .state('profile', {
            url: '/profile',
            component: ProfileComponent.name,
            resolve: {
                eventsAsHost: resolveEventsAsHost,
                eventsAsGuest: resolveEventsAsGuest
            }
        })
        .state('events', {
            url: '/events?city&date&guestCount',
            component: EventsComponent.name,
            resolve: {
                events: resolveEvents
            }
        })
        .state('eventAdd', {
            url: '/events/new',
            component: EventCreateComponent.name,
            resolve: {
                cities: resolveCities,
                foodTypes: resolveFoodTypes
            }
        })
        .state('event', {
            url: '/events/:eventId',
            component: EventComponent.name,
            resolve: {
                event: resolveEvent
            }
        })
        .state('eventEdit', {
            url: '/events/:eventId/edit',
            component: EventEditComponent.name,
            resolve: {
                event: resolveEvent,
                cities: resolveCities,
                foodTypes: resolveFoodTypes
            }
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })
        .state('error', {
            url: '/error',
            component: ErrorComponent.name,
        })


}

