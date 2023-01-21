const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

//ISS1
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
  return ip;
 });
//ISS2

fetchCoordsByIP("76.64.125.158", (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log(data);
});
// fetchCoordsByIP("11.222.111.000", (error,data) => {
//   if(error){
//     console.log("Invalid IP address:", error);
//     return
//   }
//   console.log(data);
// })

// ISS 3
const exampleCoords = { latitude: '43.653226', longitude: '-79.3831843' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});

//ISS 4

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});