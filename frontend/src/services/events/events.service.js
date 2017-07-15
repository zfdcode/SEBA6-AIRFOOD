'use strict';


export default class EventsService {

    static get $inject() {
        return ['$http', 'API_URL'];
    }

    constructor($http, API_URL) {
        this.$http = $http;
        this.resourceUrl = `${API_URL}/events/`;
    }

    static get name() {
        return 'eventsService';
    }

    list(city, date, guestCount) {
        city = city == null ? "" : `city=${city}&`;
        date = date == null ? "" : `date=${date}&`;
        guestCount = guestCount == null ? "" : `guestCount=${guestCount}`;
        let url = `${this.resourceUrl}${city}${date}${guestCount}`;
        console.log(url);
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
    }

    getEventsAsHost(userId) {
        let url = `${this.resourceUrl}user=${userId}`;
        console.log(url);
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.date);
            });
        });
    }

    getEventsAsGuest(userId) {
        let url = `${this.resourceUrl}guest=${userId}`;
        console.log(url);
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.date);
            });
        });
    }

    get(id) {
        let url = `${this.resourceUrl}${id}`;
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }

    create(event) {
        let url = this.resourceUrl;
        return this.$http.post(url, event).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }

    delete(id) {
        let url = `${this.resourceUrl}${id}`;
        return this.$http.delete(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });
        })
    }

    update(event) {

        let url = `${this.resourceUrl}${event['_id']}`;
        return this.$http.put(url, event).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }

}