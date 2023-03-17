const request = require('request');

//function will asynchronously return our IP Address using an API
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

//funcion takes in an IP address and returns the latitude and longitude
const fetchCoordsByIP = function(ip, callback) {
  //request data from API
  request(`http://ipwho.is/${ip}`, function(error, response, body) {

    //for errors
    if (error) {
      callback(error, null);
      return;
    }

    //otherwise parse data
    const data = JSON.parse(body);

    //for invalid IP errors
    if (data.success === false) {
      const msg = `Server message says: ${data.message} when searching for IP: ${data.ip}`;
      callback(Error(msg), null);
      return;
    }


    //create object and add key.values
    const coordinates = {};
    coordinates.longitude = data.longitude;
    coordinates.latitude = data.latitude;

    //pass coordinates object to the callback
    callback(null, coordinates);

  });

};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
//ingle API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates
const fetchISSFlyOverTimes = function(coords, callback) {

  //make request for flyovertimes
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, function(error, response, body) {
    //for errors
    if (error) {
      callback(error, null);
      return;
    }

    //handle any http code errors
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    //otherwise parse data
    const data = JSON.parse(body).response;

    //pass data to callback
    callback(null, data);

  });

};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };