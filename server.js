require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router =  require('./router/router');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', router);

server.get('/', (req, res) => {

    res.status(200).json({message: "api up and running"});
})

module.exports = server;