const { userScrapDealerRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes") ;
const { Auth } = require("../utills/common") ;
const AppError = require("../utills/error/app-error") ;

const UserScrapDealerRepository = new userScrapDealerRepository() ;

async function  createFeedback(data) {
    try {
        const response = await UserScrapDealerRepository.createFeedback(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = {
    createFeedback
}