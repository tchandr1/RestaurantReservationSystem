/**
 * Created by Thanusha on 9/28/2015.
 */
(function(){
    angular.module('restaurant')
        .controller("CustomersDisplayController",CustomersDisplayControllerFn)
        .factory("CustomersDisplayFactory",CustomersDisplayFactoryFn)
        .factory("UpdatedCustomersDisplayFactory",UpdatedCustomersDisplayFactoryFn)
        .factory("CustomerDatabase",CustomerDatabaseFactoryFn)
        .factory("CustomerAssignTableFactory");

    CustomersDisplayControllerFn.$inject = ['CustomersDisplayFactory','UpdatedCustomersDisplayFactory','CustomerAssignTableFactory','CustomerDatabase'];
    function CustomersDisplayControllerFn(CustomersDisplayFactory,UpdatedCustomersDisplayFactory,CustomerAssignTableFactory,CustomerDatabase) {
        console.log("CustomersDisplayControllerFn");
        var cdVm = this;

        cdVm.addedCustomer =[];

        /*  cdVm.customer = [
         {
         "id": 1,
         "firstname": "Leanne ",
         "lastname": "Graham",
         "date":"Thu Oct 22 2015 00:00:00 GMT-0500 (Central Daylight Time)",
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
         "date":"Thu Oct 22 2015 00:00:00 GMT-0500 (Central Daylight Time)",
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
         ];*/

        console.log(" cdVm.customer:"+ cdVm.customer);


        cdVm.addCustomer = function (isFormValid) {
            console.log("customer added" + isFormValid);




            if (isFormValid) {

                if(CustomerAssignTableFactory.getLength()>40)
                    alert("The tables are full, Do u want to be in the waiting list ?")

                cdVm.newCustomer.id = cdVm.addedCustomer.length + 1;
                //cdVM.customer that is being used in customerDisplay.html is getting initialized here when customer makes a new reservation
                // so data inserted by customer in reservation form is saved into factory below.
                CustomersDisplayFactory.updatedData(cdVm.newCustomer);
                // cdVm.newCustomer = null;
                alert("Your table is reserved!");


            }
        }

        //cdVM.customer that is being used in customerDisplay.html is getting initialized here from the factory if factory has any data.
        if (CustomersDisplayFactory.getData()){
            //  cdVm.customer.push(CustomersDisplayFactory.getData());
            // cdVm.addedCustomer =  cdVm.customer.concat(CustomersDisplayFactory.getData());
            cdVm.addedCustomer = CustomersDisplayFactory.getData();
            console.log("cdVm.addedcustomer:"+cdVm.addedCustomer);
            //  console.log(cdVm.addedCustomer[0].id);
        };

        /*    if (UpdatedCustomersDisplayFactory.getData()){
         console.log("if UpdatedCustomersDisplayFactory.getData() entered")
         cdVm.addedCustomer[i]=UpdatedCustomersDisplayFactory.getData();
         console.log(cdVm.addedCustomer[0]);

         };*/




        cdVm.prepopulateCustomers =function(cc){
            console.log("Prepopulate customers");
            console.log(cc);

            //  console.log(cdVm.addedCustomer[cc].firstname);
            //  console.log(cdVm.addedCustomer);
            cdVm.newCustomer=cdVm.addedCustomer[cc];
            console.log( cdVm.newCustomer);


        }

        cdVm.updateCustomer = function(){
            console.log("Update Customer Function Entered");
            for(i=0;i<cdVm.addedCustomer.length;i++) {
                console.log(cdVm.addedCustomer[i].firstname.localeCompare(cdVm.newCustomer.firstname));
                if (cdVm.addedCustomer[i].firstname.localeCompare(cdVm.newCustomer.firstname)== 0) {
                    console.log("Element exists");
                    UpdatedCustomersDisplayFactory.updatedData(cdVm.newCustomer);
                    cdVm.addedCustomer[i]=UpdatedCustomersDisplayFactory.getData();
                    console.log(cdVm.addedCustomer[0]);
                    alert("Your reservation is updated!");


                }
            }
        }

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

    function UpdatedCustomersDisplayFactoryFn() {
        var updatecustData;
        var updatecustDataArray = [];

        return {
            updatedData: function (newData) {
                console.log("UpdatedCustomersDisplayFactoryFn Entered");
                updatecustData = newData;

            },

            getData: function () {
                console.log("GET UpdatedCustomersDisplayFactoryFn Entered");
                return updatecustData;
            }
        }
    }

    CustomerDatabaseFactoryFn.$inject = ['$resource']
    function CustomerDatabaseFactoryFn($resource){
        console.log("CustomerDataFactory from Database Entered");
        return $resource('http://localhost:8080/RestaurantReservationBackend/webresources/customers',{},{
            query: {
                method:'GET', isArray:true
            }
        });
    }




})();