// controllers/userScrapDealerFeedbackController.js
const UserScrapDealerFeedbackService = require('../services/userScrapDealerFeedbackService');

class UserScrapDealerFeedbackController {
  static async createFeedback(req, res) {
    try {
      const { scrapDealerId, userId, scrapRequestId, rating, comment } = req.body;
      const feedbackData = { scrapDealerId, userId, scrapRequestId, rating, comment };
      const feedback = await UserScrapDealerFeedbackService.createFeedback(feedbackData);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getFeedbackForDealer(req, res) {
    try {
      const { scrapDealerId } = req.params;
      const feedback = await UserScrapDealerFeedbackService.getFeedbackForDealer(scrapDealerId);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getFeedbackForUser(req, res) {
    try {
      const { userId } = req.params;
      const feedback = await UserScrapDealerFeedbackService.getFeedbackForUser(userId);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UserScrapDealerFeedbackController;
