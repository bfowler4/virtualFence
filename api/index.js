const express = require(`express`);
const router = express.Router();

const usersRoute = require(`./users`);

module.exports = router;

router.use(`/users`, usersRoute);
