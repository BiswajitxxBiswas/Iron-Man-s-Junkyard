const express = require("express") ;
const router = express.Router() ;
const { UserMiddleware } = require("../middlewares") ;

const { UserController } = require("../controllers") ;

// localhost:5000/signin
router.post("/" ,UserMiddleware.validateUserSignup, UserController.signin );

module.exports = router ;