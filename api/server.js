  
const express = require('express');
const helmet = require('helmet');

const GamesRouter = require('../games/games-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/games', GamesRouter);

module.exports = server;