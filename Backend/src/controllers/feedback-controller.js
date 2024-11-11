const { Feedback } = require("../services") ;
const {StatusCodes} = require("http-status-codes") ;
const {SuccessResponse , ErrorResponse} = require("../utills/common") ;

async function createFeedback(req , res){
    try {
        const user = await Feedback.createFeedback({
            userEmail : req.body.userEmail ,
            dealerEmail : req.body.dealerEmail ,
            rating : req.body.rating,
            comment : req.body.comment,
        }) 
        SuccessResponse.data = user ;
        return res.status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch (error) {
        console.log("inside signup in controller , error is ---> " + error );
        ErrorResponse.error = error ;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse) ;
    } 
}

module.exports = {
    createFeedback
}
