// Code your solution here:

function driversWithRevenueOver(drivers, amount){
  const topDrivers = drivers.filter(function(driver){
    if (driver.revenue > amount) {
      return driver;
    }
  });
  return topDrivers;
}


function driverNamesWithRevenueOver(){

}


function exactMatch(){

}


function exactMatchToList(){

}
