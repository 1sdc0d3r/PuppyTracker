const express = require("express");

const apiRouter = require("./api/api-router");

const server = express();

const configureMiddleware = require("./api/middleware/config");
configureMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
