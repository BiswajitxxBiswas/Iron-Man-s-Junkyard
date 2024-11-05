const express = require("express") ;
const router = express.Router() ;
const { UserMiddleware } = require("../middlewares") ;

const { UserController } = require("../controllers") ;


// localhost:5000/signup
router.post("/" ,UserMiddleware.validateUserSignup, UserController.signup ); 

module.exports = router ;