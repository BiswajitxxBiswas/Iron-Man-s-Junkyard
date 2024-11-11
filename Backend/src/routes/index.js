const express = require('express');

const sDealerRoutes = require('./scrapDealer-routes');
const userRoutes = require('./user-routes');
const  auth = require('./auth');
const userScrapDealerFeedbackRoutes = require("./userScrapDealerFeedback") ;

const router = express.Router();

router.use('/feedback', userScrapDealerFeedbackRoutes)
router.use('/user', userRoutes);
router.use('/sdealer', sDealerRoutes);
router.use('/auth', auth);

module.exports = router;