// repositories/userScrapDealerFeedbackRepository.js
const { UserScrapDealerFeedback } = require('../models');

class UserScrapDealerFeedbackRepository {
  static async createFeedback(data) {
    return await UserScrapDealerFeedback.create(data);
  }

  static async getFeedbackByScrapDealer(scrapDealerId) {
    return await UserScrapDealerFeedback.findAll({
      where: { scrapDealerId },
      include: ['User', 'ScrapRequest'],  // You can include user and scrapRequest if needed
    });
  }

  static async getFeedbackByUser(userId) {
    return await UserScrapDealerFeedback.findAll({
      where: { userId },
      include: ['ScrapDealer', 'ScrapRequest'],
    });
  }
  
  static async getFeedbackById(id) {
    return await UserScrapDealerFeedback.findOne({ where: { id } });
  }
}

module.exports = UserScrapDealerFeedbackRepository;
