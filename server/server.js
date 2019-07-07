// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());