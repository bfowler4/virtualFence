const Axios = require(`axios`);
const androidAccessToken = require(`../../config/config`).android.accessToken;
module.exports = sendIncidentToAndroid;

function sendIncidentToAndroid(id) {
  return Axios({
    method: `post`,
    url: `https://fcm.googleapis.com/fcm/send`,
    headers: { 
      'Authorization': `key=AAAA1kDIX0Q:APA91bGnzz_qI8WXReMnGPBIayzJdJsnkC1QOr7kbFjFrtJIQk8RN0jPg3pSHB8ySy3txfM_R-KiPtLAxeRe9HEA0P-_QSAcO2AhrWEeV13kInH-okpYAZ2H6GTU5vIbzQk4DZ4K63qq`,
      'Content-Type': `application/json`
    },
    data: { 
      "to": "/topics/theft",
      "notification" : {
        "body" : "theft!",
        "content_available" : true,
        "priority" : "high",
        "title" : "theft"
      },
      "data" : {
        "body" : "great match!",
        "content_available" : true,
        "priority" : "high",
        "title" : "theft"
      }
    }
  })
  .then(result => {
    console.log(result.data);
    return result; 
  })
  .catch(err => console.log(`ERROR`, err));
}