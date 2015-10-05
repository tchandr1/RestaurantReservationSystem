/**
 * Created by Thanusha on 9/25/2015.
 */
(function(){
    angular.module('restaurant')
        .controller('OwnerController',OwnerControllerFn)



    OwnerControllerFn.$inject =['$location','CustomersDisplayFactory'];

    function OwnerControllerFn($location,CustomersDisplayFactory){
        var cdVm = this;
        console.log("OwnerController");

       // oVm.newOwner = null;
        cdVm.reservationDisplay=function(){
            cdVm.customer = CustomersDisplayFactory.getData();
          // This line navigates user to customerDisplay.html, which has variable cdVm.custdata,which needs to be initialized
            $location.url( "/customersDisplay");

        }

    }



})();