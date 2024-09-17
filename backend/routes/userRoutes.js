// express import 

const express = require('express');
const userController = require('../controller/userController');
const user = require('../models/userModel');
const { model } = require('mongoose');

//  express.Router()
const router = express.Router();

router.post('/register', userController.signup);

module.exports = router ;