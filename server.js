const express = require(`express`);
const bodyParser = require(`body-parser`);
const server = express();
const apiRouter = require(`./api`);

const PORT = process.env.PORT || 8080;

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(`/api`, apiRouter);

server.post(`/`, (req, res) => {
  console.log(req.body);
})

server.get(`/`, (req, res) => {
  return res.send(`hello world`);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});