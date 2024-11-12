const { ScrapItemRepository } = require("../services") ;
const {StatusCodes} = require("http-status-codes") ;
const {SuccessResponse , ErrorResponse} = require("../utills/common") ;

/**
 * POST scrap/signup
 * req-body { email : abc@gmail.com , password : dsafjdgxjachv}
 */

async function getScrap(req , res){
    try {
        const response = await ScrapItemRepository.getAllItem() ;

        SuccessResponse.data = response ;
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);
        
    } catch (error) {
        console.log("error inside scrap controller -->" + error) ;
        ErrorResponse.error = error ;
        return res
                .status(error.statusCode)
                .json(ErrorResponse) ;
    }
}

module.exports = {
    getScrap ,
}