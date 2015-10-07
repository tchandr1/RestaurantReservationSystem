/**
 * Created by Thanusha on 10/06/2015.
 */
(function(){
    angular.module('restaurant').controller('RestaurantProfileController',RestaurantProfileControllerFn)
        .factory('RestaurantProfileFactory');

   RestaurantProfileControllerFn.$inject = ["RestaurantProfileFactory"];
    function RestaurantProfileControllerFn(RestaurantProfileFactory){
        var resVm = this;
        console.log("Entered RestaurantProfileController");
       /* resVm.data =[
            {"name":'RestaurantReservationSystem',
            "address":"2951 North Queen Drive,Apt 1000",
                "phoneNumber":123456788,
                "email":"cthanu36@yahoo.in",
                "days":"Monday-Saturday",
                "time":"1970-01-01T21:23:00.000Z"

            }];*/


        if(RestaurantProfileFactory.getData()) {
            resVm.data = RestaurantProfileFactory.getData();
        }
        console.log("resVm.data:"+resVm.data);
        console.log("resVm.data:"+resVm.data.name);
 }



})();


