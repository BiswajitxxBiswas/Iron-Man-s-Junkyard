const express = require('express');

const sDealerRoutes = require('./scrapDealer-routes');
const userRoutes = require('./user-routes');

const router = express.Router();

//Test
const { feedbackController } =  require('../controllers');


router.post('/feedback',feedbackController.createFeedback)
router.use('/user',userRoutes);
router.use('/sdealer',sDealerRoutes);

module.exports = router;