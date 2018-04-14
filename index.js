const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
  var lastTwo = []
  for(let i = drivers.length - 2; i < drivers.length; i++){
    lastTwo.push(drivers[i])
  }
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){
    return (fare * int)
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (drivers,fn) => {
  return fn(drivers)
}
