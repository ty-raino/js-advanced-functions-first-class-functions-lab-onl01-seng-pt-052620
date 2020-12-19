const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fairAmount) => { return fairAmount * multiplier}
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arr, selectFunction) {
    return selectFunction(arr)
}