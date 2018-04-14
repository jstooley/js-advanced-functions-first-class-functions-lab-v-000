// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  var firstTwo = []
  for(let i = 0; i < 2; i++){
    firstTwo.push(drivers[i])
  }
  return firstTwo
}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers[
  returnFirstTwoDrivers(),
  returnLastTwoDrivers()
]

function createFareMultiplier(multi){
  return function fareMultiplier(fare){
    return fare * multi ;
  }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, fn){
  return fn(drivers);
}
