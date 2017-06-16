'use strict';


export default class HomeService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/home/`;
    }

    static get name(){
        return 'homeService';
    }
}