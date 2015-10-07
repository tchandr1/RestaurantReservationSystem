/**
 * Created by Thanusha on 10/7/2015.
 */
(function(){
    angular.module('restaurant')
        .controller('EditRestaurantProfileController',EditRestaurantProfileControllerFn)
        .factory('RestaurantProfileFactory',RestaurantProfileFactoryFn)



    EditRestaurantProfileControllerFn.$inject = ['RestaurantProfileFactory'];

    function EditRestaurantProfileControllerFn(RestaurantProfileFactory){
        var editresVm = this;
        editresVm.updatedResData = [];
        console.log("updatedResData:"+editresVm.updatedResData);
        console.log("Entered Edit Restaurant Profile Controller");


        editresVm.addedRestaurant = function(isFormValid){
            editresVm.updatedResData = [];
            console.log("updatedResData:"+editresVm.updatedResData);
            console.log("Entered addedRestaurant");
            if(isFormValid){
                console.log("Form is valid");
                console.log(editresVm.updatedRestaurant);
                RestaurantProfileFactory.updatedData(editresVm.updatedRestaurant);
                // editresVm.updatedRestaurant = null;

                if (RestaurantProfileFactory.getData()){
                    console.log("If restaurant profile data entered");
                    editresVm.updatedResData = RestaurantProfileFactory.getData();
                    console.log("updatedResData:"+editresVm.updatedResData);
                    console.log("Name:"+editresVm.updatedResData.name);

                }


            }

        }



    }

    function RestaurantProfileFactoryFn(){
       var resData = [];
        return{
            updatedData:function(newData){
                resData = newData;
                console.log(resData);
            },
            getData:function(){
                return resData;
            }
        }
    }



})();
