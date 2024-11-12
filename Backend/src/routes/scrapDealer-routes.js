const express = require('express');
const { ScrapeDealerController } = require('../controllers');
// const { UserMiddleware } = require("../middlewares") ;

const router = express.Router();

router.post('/signup',ScrapeDealerController.signup);


module.exports = router;
