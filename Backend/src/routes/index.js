const express = require('express');

// const v1Routes = require('./v1');
const signup = require("./signup") ;
const signin = require("./signin") ;

const router = express.Router();

router.use('/signup', signup) ;
router.use('/signin', signin) ;

module.exports = router;