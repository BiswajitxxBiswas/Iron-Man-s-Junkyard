const express = require("express") ;
const router = express.Router() ;
const { UserMiddleware } = require("../middlewares") ;

const { UserController } = require("../controllers") ;

// localhost:5000/signin
// router.post("/" ,UserMiddleware.validateUserSignup, UserController.signin );   // since from our backend email is coming in the form of username we set the middleware for checking email, so if we use this middleware then we are not able to sign in 
router.post("/" , UserController.signin ); 

module.exports = router ;