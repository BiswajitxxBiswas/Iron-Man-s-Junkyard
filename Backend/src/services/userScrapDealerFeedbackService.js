// services/userScrapDealerFeedbackService.js

const UserScrapDealerFeedbackRepository = require("../repositories/userScrapDealerFeedbackRepository");
const { UserScrapDealerFeedback, ScrapRequest } = require("../models");

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


  static async getFeedbackWithScrapRequest(userId) {
    // Use an async method to perform the query with the alias
    return await UserScrapDealerFeedback.findAll({
      where: { userId },
      include: [
        {
          model: ScrapRequest,
        },
      ],
    });
  }
}

module.exports = UserScrapDealerFeedbackService;
