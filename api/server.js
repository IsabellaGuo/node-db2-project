const express = require('express');

const server = express();

server.use(express.json());

module.export = server;