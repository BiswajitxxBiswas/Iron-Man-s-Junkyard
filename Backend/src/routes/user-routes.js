const express = require('express');
const { UserController } = require('../controllers');
// const { UserMiddleware } = require("../middlewares") ;

const router = express.Router();

//api/v1/airplanes/  GET
router.post('/signup',UserController.signup);

// //api/v1/airplanes/:id  GET
// router.get('/:id',AirplaneController.getAirplane);

// //api/v1/airplanes/:id  DELETE 
// router.delete('/:id',AirplaneController.destroyAirplane);

// //api/v1/airplanes/:id  PATCH 
// router.patch('/:id',AirplaneController.updateAirplane);

module.exports = router;
