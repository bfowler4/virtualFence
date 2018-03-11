const Axios = require(`axios`);
const photonAccessToken = require(`../config/config.js`).photon.accessToken;
const isIncidentURL = `https://api.particle.io/v1/devices/220030000447363332363639/pilauHere`;
const lastIncidentURL = `https://api.particle.io/v1/devices/220030000447363332363639/lastPilau`;
const serverURL = `http://localhost:8080/api/users/1/incidents`;

const MAX_DIFF = 20;
let lastIncident = -1;

function watchDevice() {
  return getDataFromPhoton(isIncidentURL)
  .then(isIncident => {
    if (isIncident) {
      return getDataFromPhoton(lastIncidentURL)
      .then(newIncident => {
        if (newIncident === lastIncident) {
          return false;
        } else {
          lastIncident = newIncident;
          return newIncident;
        }
      });
    } else {
      return false;
    }
  });
}

function getDataFromPhoton(url) {
  return Axios.get(url, {
    headers: {
      'Authorization': `Bearer ${photonAccessToken}`
    }
  })
  .then(data => data.data.result)
  .catch(err => console.log(err.message));
}

function sendIncidentToServer(time) {
  return Axios.post(`${serverURL}`, {
    time: time,
    longitude: `2.9890834098098`,
    latitude: `23.0980980999`,
    device_id: 5,
  })
  .then(incident => {
    return incident;
  })
  .catch(err => console.log(err.message));
}

function loop() {
  watchDevice()
  .then(time => {
    if (time) {
      sendIncidentToServer(time);
    }
    loop();
  })
}

loop();