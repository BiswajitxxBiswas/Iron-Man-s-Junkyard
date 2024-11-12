const express = require('express');
const sDealerRoutes = require('./scrapDealer-routes');
const userRoutes = require('./user-routes');
const  auth = require('./auth');
const scrapRequestRoute = require('./scrapRequest-Routes');
const userScrapDealerFeedbackRoutes = require("./userScrapDealerFeedback") ;
const { ScrapItemController } = require("../controllers") ;

const router = express.Router();

//Test
const { feedbackController } =  require('../controllers');
const scrapItemRepository = require('../repositories/scrapItem-repository');
// const { success, message } = require('../utills/common/error-response');

router.use('/feedback',userScrapDealerFeedbackRoutes);
// router.post('/feedback',feedbackController.createFeedback)
router.use('/user',userRoutes);
router.use('/sdealer',sDealerRoutes);
router.use('/auth',auth);
router.use('/request',scrapRequestRoute);
router.get('/product' , ScrapItemController.getScrap) ;

module.exports = router;