const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
}

const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${data.latitude}&lon=${data.longitude}`)
}

const nextISSTimesForMyLocation = function(body) {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
}

module.exports = { nextISSTimesForMyLocation };