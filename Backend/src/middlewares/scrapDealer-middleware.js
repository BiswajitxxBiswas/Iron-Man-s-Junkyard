const { StatusCodes } = require('http-status-codes');
const { ScrapDealer } = require('../models');
const AppError = require('../utills/error/app-error');

const checkDealerOnline = async (req, res, next) => {
    const { scrapDealerId } = req.body;

    const dealer = await ScrapDealer.findByPk(scrapDealerId);
    if (dealer && dealer.status === 'online') {
        next();
    } else {
        throw new AppError(`Scrap dealer is offline. Cannot create a request.`,StatusCodes.FORBIDDEN);
    }
};

module.exports = {checkDealerOnline};
