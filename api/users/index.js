const express = require(`express`);
const router = express.Router();
const User = require(`../../db/models/User`);
const Incident = require(`../../db/models/Incident`);
module.exports = router;

// Add a user and get all users
router.route(`/`)
.get((req, res) => {
  return User
  .fetchAll()
  .then(users => {
    return res.json(users);
  })
  .catch(err => res.status(400).json({ message: err.message }));
})
.post((req, res) => {
  const {
    email,
    username,
    password
  } = req.body;

  return new User({ email, username, password })
  .save()
  .then(user => {
    return res.json(user);
  })
  .catch(err => res.status(400).json({ message: err.message }));
});

// Get a specific user by ID
router.route(`/:user_id`)
.get((req, res) => {
  return new User({ id: req.params.user_id })
  .fetch()
  .then(user => {
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: `User was not found` });
    }
  })
  .catch(err => res.status(400).json({ message: err.message }));
});

// Get a specific user's incidents and post a new incident
router.route(`/:user_id/incidents`)
.get((req, res) => {
  return new Incident()
  .query((qb) => {
    qb.where({ user_id: req.params.user_id })
  })
  .fetchAll()
  .then(incidents => {
    return res.json(incidents);
  })
  .catch(err => res.status(400).json({ message: err.message }));
})
.post((req, res) => {
  const {
    longitude,
    latitude
  } = req.body;
  const user_id = req.params.user_id;

  return new Incident({ longitude, latitude, user_id })
  .save()
  .then(incident => {
    return res.json(incident);
  }) 
  .catch(err => res.status(400).json({ message: err.message }));
});

// Get an incident related to a user
router.route(`/:user_id/incidents/:id`)
.get((req, res) => {
  return new Incident({ id: req.params.id, user_id: req.params.user_id })
  .fetch()
  .then(incident => {
    if (incident) {
      return res.json(incident);
    } else {
      return res.status(404).json({ message: `Incident was not found` });
    }
  })
  .catch(err => res.status(400).json({ message: err.message }));
});