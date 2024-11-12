// routes/scrapRequestRoutes.js
const express = require('express');
const router = express.Router();
const { ScrapRequestController } = require('../controllers');
const { ScrapDealerMiddleware } = require('../middlewares');

router.post('/create', ScrapDealerMiddleware.checkDealerOnline, ScrapRequestController.createScrapRequest);
router.post('/:id/accept', ScrapRequestController.acceptRequest);
router.post('/:id/reject', ScrapRequestController.rejectRequest);

module.exports = router;
