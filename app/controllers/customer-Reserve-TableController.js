/**
 * Created by Thanusha on 9/25/2015.
 */
(function(){
    angular.module('restaurant')
        .controller('CustomerReserveTableController',CustomerReserveTableControllerFn)
        .factory('CustomersDisplayFactory');

    CustomerReserveTableControllerFn.$inject = ['CustomersDisplayFactory','$routeParams'];
    function CustomerReserveTableControllerFn(CustomersDisplayFactory,$routeParams){
        var crVm = this;
        console.log("Entered CustomerReserveTableController");




    }



})();


