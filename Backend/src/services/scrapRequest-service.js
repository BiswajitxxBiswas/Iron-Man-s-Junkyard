//  `id`: Primary Key, UUID
//  `userId`: Foreign Key to User model
//  `scrapDealerId`: Foreign Key to ScrapDealer model
//  `pickupDateTime`: DateTime
//  `status`: Enum (pending, completed, cancelled

const { scrapRequestRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes") ;
const { Auth } = require("../utills/common") ;
const AppError = require("../utills/error/app-error") ;

const ScrapDealerRepository = new scrapRequestRepository() ;

async function name(params) {
    
}


module.exports = {
}