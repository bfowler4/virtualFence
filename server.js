const express = require(`express`);
const bodyParser = require(`body-parser`);
const server = express();
const apiRouter = require(`./api`);

const PORT = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(`/api`, apiRouter);

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});