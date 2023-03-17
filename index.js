const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("It worked, returned IP:", ip);
// });

fetchCoordsByIP('24.85.226.88', (error, data) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }

  console.log(`It worked! ${data}`);
});