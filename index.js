// Code your solution in this file!
const drivers = ['Bob', 'Melissa', 'Brandy', 'Chad']

const returnFirstTwoDrivers = function (drivers) {
    let firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function (drivers) {
    let lastTwoDrivers = drivers.slice(2, 4);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num) {
    const fareMultiplier = function (fare) {
        return fare * num;
    }
    return fareMultiplier;
}

function fareDoubler (fare) {
    const doubled = createFareMultiplier(2);
    return doubled(fare);
}

function fareTripler (fare) {
    const tripled = createFareMultiplier(3);
    return tripled(fare);
}

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}