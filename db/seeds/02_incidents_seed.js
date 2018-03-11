
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(`incidents`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`incidents`).insert([
        {
          time: 1520723111,
          longitude: `20.218672`,
          latitude: `-155.796713`,
          device_id: 1,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218672`,
          latitude: `-155.796713`,
          device_id: 1,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218672`,
          latitude: `-155.796713`,
          device_id: 1,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218672`,
          latitude: `-155.796713`,
          device_id: 1,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218672`,
          latitude: `-155.796713`,
          device_id: 1,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218862`,
          latitude: `-155.797161`,
          device_id: 2,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218862`,
          latitude: `-155.797161`,
          device_id: 2,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218862`,
          latitude: `-155.797161`,
          device_id: 2,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218862`,
          latitude: `-155.797161`,
          device_id: 2,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.218862`,
          latitude: `-155.797161`,
          device_id: 2,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219129`,
          latitude: `-155.797678`,
          device_id: 3,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219129`,
          latitude: `-155.797678`,
          device_id: 3,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219129`,
          latitude: `-155.797678`,
          device_id: 3,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219129`,
          latitude: `-155.797678`,
          device_id: 3,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219129`,
          latitude: `-155.797678`,
          device_id: 3,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219596`,
          latitude: `-155.797496`,
          device_id: 4,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219596`,
          latitude: `-155.797496`,
          device_id: 4,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219596`,
          latitude: `-155.797496`,
          device_id: 4,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219596`,
          latitude: `-155.797496`,
          device_id: 4,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219596`,
          latitude: `-155.797496`,
          device_id: 4,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.220284`,
          latitude: `-155.797228`,
          device_id: 5,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.220284`,
          latitude: `-155.797228`,
          device_id: 5,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.220284`,
          latitude: `-155.797228`,
          device_id: 5,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.220284`,
          latitude: `-155.797228`,
          device_id: 5,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.220284`,
          latitude: `-155.797228`,
          device_id: 5,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219860`,
          latitude: `-155.796714`,
          device_id: 6,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219860`,
          latitude: `-155.796714`,
          device_id: 6,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219860`,
          latitude: `-155.796714`,
          device_id: 6,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219860`,
          latitude: `-155.796714`,
          device_id: 6,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219860`,
          latitude: `-155.796714`,
          device_id: 6,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219560`,
          latitude: `-155.796194`,
          device_id: 7,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219560`,
          latitude: `-155.796194`,
          device_id: 7,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219560`,
          latitude: `-155.796194`,
          device_id: 7,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219560`,
          latitude: `-155.796194`,
          device_id: 7,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219560`,
          latitude: `-155.796194`,
          device_id: 7,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        },
        {
          time: 1520723111,
          longitude: `20.219136`,
          latitude: `-155.796389`,
          device_id: 8,
          user_id: 1,
          image_url: `https://s3-us-west-1.amazonaws.com/virtual.fence.bucket/Screen+Shot+2018-03-10+at+5.48.28+PM.png`
        }
      ]);
    });
};
