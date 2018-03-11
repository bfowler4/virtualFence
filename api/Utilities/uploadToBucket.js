module.exports = uploadPromise;

const AWS = require(`aws-sdk`);
const path = require(`path`);

AWS.config.loadFromPath(path.join(__dirname, `..`, `..`, `config`, `awsConfig.json`));
const s3 = new AWS.S3();

function uploadPromise (id, item, req) {
  return new Promise((resolve, reject) => {
    const params = {
      Body: Buffer.from(req.body.imageFile.split(`,`)[1], `base64`),
      // Body: Buffer.from(req.body.imageFile, `base64`),
      Bucket: `virtual.fence.bucket`,
      Key: id
    };

    s3.putObject(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let image_url = `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/${id}`;

        item.save({ image_url })
        .then(item => {
          resolve(item);
        });
      }
    });
  });
}