// Code your solution here:

function driversWithRevenueOver(drivers, amount){
  const topDrivers = drivers.filter(function(driver){
    return driver.revenue > amount;
  });
  return topDrivers;
}


function driverNamesWithRevenueOver(drivers, revenue){
  const topDrivers = drivers.map(function(driver){
    return driver.name;
  });
  return topDrivers;
}


function exactMatch(){

}


function exactMatchToList(){

}
