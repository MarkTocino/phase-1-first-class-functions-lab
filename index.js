// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
    }
console.log(returnFirstTwoDrivers())
function returnLastTwoDrivers() {
    return drivers.slice(2,4) 
}
//The drivers.slice are picked from the array and returned
//The function is anonymous because it has no parameter
//The function is named returnThe Blah blah
//You return the driver because of the array on top with const drivers =
console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
console.log (selectingDrivers);

function createFareMultiplier () {
    return function (number) {
        return number * 5
    }
};
//I can set 2 parameters num and number.
function fareDoubler (number) {
    return number * 2
};
function fareTripler (number) {
    return number * 3
};
function selectDifferentDrivers(drivers, func){
    return func(drivers)
  }
