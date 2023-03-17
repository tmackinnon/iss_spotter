/**
 * function will asynchronously return our IP Address using an API.
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API

  request('https://api.ipify.org/?format=json', function(error, response, body) {
    //if there's an error - pass the error to the callback function
    if (error) return callback(error, null);

    //handle any http code errors
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    //change the body from string to obj
    const data = JSON.parse(body);
    //if no error pass the ip (as a string) to the callback (the callback function decl is in index.js)
    callback(null, data.ip);

  });

};



module.exports = { fetchMyIP };