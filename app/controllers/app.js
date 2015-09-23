/**
 * Created by Thanusha on 9/21/2015.
 */
(function() {
    'use stric';

    angular
        .module('restaurant', ['ngRoute'])
        .config(moduleCongif);

    moduleCongif.$inject = ['$routeProvider'];
    function moduleCongif($routeProvider) {
        $routeProvider
            .when('/aboutUs', {
               templateUrl : 'views/aboutUs/aboutUs.html',
                controller : 'AboutUs-tmpl.html',
                controllerAs : 'aboutAsVm'
            })
            .when('/owner', {
                templateUrl:'views/owner/owner.html',
                controller: 'OwnerCtrl',
                controllerAs: 'ownerVm'

            })
            .when('/customers', {
                templateUrl:'views/customers/customers.html',
                controller: 'CustomersCtrl',
                controllerAs: 'customersVm'
            })
            .otherwise({
                redirectTo: '#'
            });
    }

})();
