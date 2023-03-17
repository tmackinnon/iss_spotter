const { nextISSTimesForMyLocation  } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const times of passTimes) {
    const datetime = new Date(0);
    datetime.setSeconds(times.risetime);
    console.log(`Next pass at ${datetime} for ${times.duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



//commented out tests for functions in iss.js
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("It worked, returned IP:", ip);
// });

// fetchCoordsByIP('24.85.226.88', (error, data) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log(`It worked! ${data}`);
// });

// fetchISSFlyOverTimes({ latitude: '49.2827291', longitude: '-123.1207375' }, (error, flyOverdata) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("Here are the flyover times", flyOverdata);
// });