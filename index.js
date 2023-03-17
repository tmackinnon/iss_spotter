const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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