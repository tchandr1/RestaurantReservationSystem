/**
 * Created by Thanusha on 10/1/2015.
 */
/**
 * Created by Thanusha on 9/28/2015.
 */
(function(){
    'use strict';
    angular.module('restaurant')
        .controller("CustomerAssignTable",CustomerAssignTableFn)
        .factory("CustomerAssignTableFactory",CustomerAssignTableFactoryFn)

    var reserved = [];
    CustomerAssignTableFn.$inject = ['CustomerAssignTableFactory'];
    function CustomerAssignTableFn(CustomerAssignTableFactory) {
        var caVm = this;
        // Init layout
        caVm.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        caVm.cols = [1, 2, 3, 4, 5, 6, 7, 8];

        // Set reserved and selected
        console.log("FirstreservedArray:"+reserved);
        var selected = [];

        // seat onClick
        caVm.seatClicked = function(seatPos) {
            console.log("SeatClick function entered");
            console.log("Selected Seat: " + seatPos);
            var index = selected.indexOf(seatPos);
            if(index != -1) {
                // seat already selected, remove
                selected.splice(index, 1)
            } else {
                // new seat, push
                selected.push(seatPos);
            }
        }

        // get seat status
        caVm.getStatus = function(seatPos) {
          //  console.log("getStatus function entered");
            if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        }

        // clear selected
        caVm.clearSelected = function() {
            console.log("clearSelected function entered");
            selected = [];
        }

        // show selected
        caVm.showSelected = function() {
            console.log("showSelected function entered");
            if(selected.length > 0) {
                alert("Selected Seats: \n" + selected);
            } else {
                alert("No seats selected!");
            }
        }

        //reserve selected
        caVm.reserveSelected = function(){
            console.log("reserveSelected function entered");

            reserved = reserved.concat(selected);
           //reserved = selected;
            console.log("reservedSeats"+reserved);
            CustomerAssignTableFactory.reservedTable(selected);

        }

        if (CustomerAssignTableFactory.getData()){
          //  console.log("if Factory function entered");
             reserved = reserved.concat(CustomerAssignTableFactory.getData());
            //reserved.length = 0;

        }

    }

    function CustomerAssignTableFactoryFn(){
        var reservedSeats = [];
        return{
            reservedTable:function(reserved){
                reservedSeats.push(reserved);
                console.log("FactoryReservedSeats:"+reservedSeats);
            },
            getData:function(){
                return reservedSeats;

            }
        }
    }

})();