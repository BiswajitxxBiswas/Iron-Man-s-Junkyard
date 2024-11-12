const express = require('express');
const userScrapDealerFeedbackController = require("../controllers/userScrapDealerFeedbackController") ;

const router = express.Router();

router.post('/', userScrapDealerFeedbackController.createFeedback);
router.get('/dealer/:scrapDealerId', userScrapDealerFeedbackController.getFeedbackForDealer);
router.get('/user/:userId', userScrapDealerFeedbackController.getFeedbackForUser);

module.exports = router;
