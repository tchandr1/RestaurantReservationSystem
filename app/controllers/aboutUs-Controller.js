/**
 * Created by Thanusha on 9/27/2015.
 */
(function(){
  angular.module('restaurant').controller("AboutUsController",AboutUsControllerFn);

    AboutUsControllerFn.$inject = [];
    function AboutUsControllerFn(){
        var auVm =this;
        console.log("Entered AboutUsController");
    }


})();