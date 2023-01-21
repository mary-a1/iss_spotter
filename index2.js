const { fetchISSFlyOverTimes } = require('./iss_promised');
const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

// const fetching = function() {
//   return fetchMyIP()
//     .then(fetchCoordsByIP)
//     .then(fetchISSFlyOverTimes)
//     .then((data) => {
//       return data;
//     })
//     .catch(error => console.log(error));

// };
// fetching().then(data => console.log((data)));

// fetchMyIP()
// .then((response)=>fetchCoordsByIP(response))
// .then((response)=> fetchISSFlyOverTimes(response))
// // .then(response => console.log(response))
// // .then(response => {
// // console.log("response", response)
// //   const data = JSON.parse(response).response
// // console.log(data);
// // });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });