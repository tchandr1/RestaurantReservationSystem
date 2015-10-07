/**
 * Created by Thanusha on 9/28/2015.
 */
(function(){
    angular.module('restaurant')
           .controller("CustomersDisplayController",CustomersDisplayControllerFn)
           .factory("CustomersDisplayFactory",CustomersDisplayFactoryFn);

    CustomersDisplayControllerFn.$inject = ['CustomersDisplayFactory'];
    function CustomersDisplayControllerFn(CustomersDisplayFactory) {
        console.log("CustomersDisplayControllerFn");
        var cdVm = this;
       // init();
       // cdVm.customer = [];
        cdVm.addedCustomer =[];
        cdVm.customer = [
         {
         "id": 1,
         "firstname": "Leanne ",
         "lastname": "Graham",
         "date":"01/01/2015",
         "time":"01:01:01",
         "peoplecount":4,
         "phonenumber":"1234567890",
         "email": "Sincere@april.biz"
         },
         {
         "id": 2,
         "firstname": "Ervin",
         "lastname": "Howell",
         "date":"01/01/2015",
         "time":"01:01:01",
         "peoplecount":4,
         "phonenumber":"1234567890",
         "email": "Sincere@april.biz"
         },
         {
         "id": 3,
         "firstname": "Clementine",
         "lastname": "Bauch",
         "date":"01/01/2015",
         "time":"01:01:01",
         "peoplecount":4,
         "phonenumber":"1234567890",
         "email": "Sincere@april.biz"
         },
         {
         "id": 4,
         "firstname": "Patricia",
         "lastname": "Lebsack",
         "date":"01/01/2015",
         "time":"01:01:01",
         "peoplecount":4,
         "phonenumber":"1234567890",
         "email": "Sincere@april.biz"
         },
         {
         "id": 5,
         "firstname": "Chelsey",
         "lastname": "Dietrich",
         "date":"01/01/2015",
         "time":"01:01:01",
         "peoplecount":4,
         "phonenumber":"1234567890",
         "email": "Sincere@april.biz"
         }
         ];


        cdVm.addCustomer = function (isFormValid) {
            console.log("customer added" + isFormValid);

            if (isFormValid) {

                cdVm.newCustomer.id = cdVm.customer.length + 1;
                //cdVM.customer that is being used in customerDisplay.html is getting initialized here when customer makes a new reservation
                // so data inserted by customer in reservation form is saved into factory below.
                CustomersDisplayFactory.updatedData(cdVm.newCustomer);
                cdVm.newCustomer = null;
            }
        }

        //cdVM.customer that is being used in customerDisplay.html is getting initialized here from the factory if factory has any data.
        if (CustomersDisplayFactory.getData()){
          //  cdVm.customer.push(CustomersDisplayFactory.getData());
            cdVm.addedCustomer =  cdVm.customer.concat(CustomersDisplayFactory.getData());
            console.log("cdVm.addedcustomer:"+cdVm.addedCustomer);
            console.log(cdVm.addedCustomer[0].id);
        };

    }

    function CustomersDisplayFactoryFn() {
         var custData ;
        var custDataArray = [];
         return {
            updatedData: function (newData) {
                console.log("CustomersDisplayFactoryFn Entered");
                custData = newData;
                custDataArray.push(custData);
                console.log("Factory forms:"+custDataArray);
            },

             getData: function () {
                 console.log("CustomersDisplayFactoryFn Entered");
                 return custDataArray;
             }
        }
    }

})();