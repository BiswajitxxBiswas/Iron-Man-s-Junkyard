// services/userScrapDealerFeedbackService.js

const UserScrapDealerFeedbackRepository = require("../repositories/userScrapDealerFeedbackRepository")

class UserScrapDealerFeedbackService {
  static async createFeedback(data) {
    if (data.rating < 1 || data.rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }
    return await UserScrapDealerFeedbackRepository.createFeedback(data);
  }

  static async getFeedbackForDealer(scrapDealerId) {
    return await UserScrapDealerFeedbackRepository.getFeedbackByScrapDealer(scrapDealerId);
  }

  static async getFeedbackForUser(userId) {
    return await UserScrapDealerFeedbackRepository.getFeedbackByUser(userId);
  }
}

module.exports = UserScrapDealerFeedbackService;
