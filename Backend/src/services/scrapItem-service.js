const { ScrapItemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes") ;
const { Auth } = require("../utills/common") ;
const AppError = require("../utills/error/app-error") ;

const scrapItemRepository = new ScrapItemRepository() ;

async function getAllItem(){
    try {
        const response = await scrapItemRepository.getAll() ;
        return response ;
    } catch (error) {
        console.log("error inside getallItem in scrap item service  ---> " + error) ;
        throw new AppError('Cannot geta all scrapItem', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    getAllItem
}