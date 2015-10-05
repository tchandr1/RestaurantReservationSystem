/**
 * Created by Thanusha on 9/25/2015.
 */
(function(){
    angular.module('restaurant').controller('CustomerReserveTableController',CustomerReserveTableControllerFn);

    //CustomerReserveTableControllerFn.$inject = [];
    function CustomerReserveTableControllerFn(){
        var crVm = this;
        //init();
        console.log("Entered CustomerReserveTableController");





      /*  function init(){
            $http({
                method:'GET',
                url:'http://jsonplaceholder.typicode.com/users'
            })
                .success(function(data){
                    crVm.customer = data;
                })
                .error(function(err){
                    console.log(err);
                })

        }*/

    }



})();

