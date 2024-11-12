const express = require('express');
const { ScrapeDealerController } = require('../controllers');
// const { UserMiddleware } = require("../middlewares") ;

const router = express.Router();

router.post('/signup',ScrapeDealerController.signup);
router.post('/signin',ScrapeDealerController.signin);
router.patch('/logout',ScrapeDealerController.logOut);
router.patch('/login',ScrapeDealerController.logIn);


module.exports = router;
