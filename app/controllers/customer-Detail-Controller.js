/**
 * Created by Thanusha on 10/1/2015.
 */
(function(){
    'use strict';

    angular.module("restaurant")
           .controller("CustomerDetailController",CustomerDetailControllerFn);

    CustomerDetailControllerFn.$inject =['$http','$routeParams'];
    function CustomerDetailControllerFn($http,$routeParams){
        var cdetailVm = this;
        console.log("CustomerDetailControllerFn Entered");
        console.log("$routeParams:"+$routeParams);
        console.log("$routeParams:"+$routeParams.customerid);
        cdetailVm.cid = $routeParams.customerid - 1;
        $http({
            method:'GET',
            url:'http://localhost:63342/RestaurantReservationSystem/app/jsonFile/customers.json'

        })
            .success(function(data){
                cdetailVm.customer= data;

               // console.log( cdetailVm.customer[0].id);

            })
            .error(function(err){
                console.log(err);
            })



    }


})();