// Code your solution here:

function driversWithRevenueOver(drivers, amount){
  const topDrivers = drivers.filter(function(driver){
    return driver.revenue > amount;
  });
  return topDrivers;
}


function driverNamesWithRevenueOver(drivers, revenue){
  const topDrivers = drivers.filter(function(driver){
    if (driver.revenue > revenue){
      return driver.name;
    }
  });
  const driversNames = topDrivers.map(function(driver){
    return driver.name;
  });
  return driversNames;
}


function exactMatch(drivers, match){
  const matchKey = Object.key(match);
  const topDrivers = drivers.filter(function(driver){
    return driver[matchKey] === match[matchKey];
  });
  return topDrivers;
}


function exactMatchToList(){

}
