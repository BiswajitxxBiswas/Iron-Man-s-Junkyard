const express = require('express');
const { UserController } = require('../controllers');
// const { UserMiddleware } = require("../middlewares") ;

const router = express.Router();

//api/v1/airplanes/  GET
router.post('/signup',UserController.signup);
router.post('/signin',UserController.signin);


module.exports = router;
