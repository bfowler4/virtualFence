const express = require(`express`);
const router = express.Router();
module.exports = router;

router.route(`/`)
.get((req, res) => {
  res.send(`smoke test router`);
})
.post((req, res) => {
  console.log(req.body);
  return res.send(`got request`);
});