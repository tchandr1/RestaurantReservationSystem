/**
 * Created by Thanusha on 9/21/2015.
 */
(function() {
    'use strict';


    angular.module('restaurant',['ngRoute','ngMessages']);

    angular.module('restaurant').config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/aboutUs', {
               templateUrl : 'views/aboutUs/aboutUs.html',
                controller : 'AboutUsController',
                controllerAs : 'auVm'
            })
            .when('/owner', {
                templateUrl:'views/owner/owner.html',
                controller: 'OwnerController',
                controllerAs: 'cdVm'

            })
            .when('/customerReservation', {
                templateUrl:'views/customers/customersSignUp.html',
                controller: 'CustomerReserveTableController',
                controllerAs: 'crVm'
            })
            .when('/customersDisplay', {
                templateUrl:'views/customers/customersDisplay.html',
                controller: 'CustomersDisplayController',
                controllerAs: 'cdVm'
            })
            .when('/customersDisplay/:customerid', {
                templateUrl:'views/customers/customerDetail.html',
                controller: 'CustomerDetailController',
                controllerAs: 'cdetailVm'
            })
            .when('/customerTable', {
                templateUrl:'views/customers/customerAssignTable.html',
                controller: 'CustomerAssignTable',
                controllerAs: 'caVm'
            })
            .otherwise({
                redirectTo: '#'
            });
    }

})();
