const Axios = require(`axios`);
module.exports = notifyDevice;

const URL = `http://http`;

function notifyDevice(incident) {
  return new Promise((resolve, reject) => {
    Axios.post(URL, incident)
    .then(data => {
      resolve(data);
    })
    .catch(err => reject(err));
  });
}