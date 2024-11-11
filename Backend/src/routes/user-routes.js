const express = require('express');
const { UserController } = require('../controllers');
// const { UserMiddleware } = require("../middlewares") ;

const router = express.Router();

router.post('/signup',UserController.signup);


module.exports = router;
