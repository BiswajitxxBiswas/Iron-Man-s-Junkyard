const {UserService} = require("../services") ;
const {StatusCodes} = require("http-status-codes") ;
const {SuccessResponse , ErrorResponse} = require("../utills/common") ;

/**
 * POST /signup
 * req-body { email : abc@gmail.com , password : dsafjdgxjachv}
 */

async function signup(req , res){
    try {
        const user = await UserService.signup({
            name : req.body.name,
            email : req.body.email ,
            password : req.body.password ,
            contactNumber : req.body.contactNumber
        }) 
        SuccessResponse.data = user ;
        return res.status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch (error) {
        console.log("inside signup in controller , error is ---> " + error );
        ErrorResponse.error = error ;
        return res
                .status(error.statusCode)
                .json(ErrorResponse) ;
    } 
}


/**
 * POST /signin
 * req-body { email : abc@gmail.com , password : dsafjdgxjachv}
 */

async function signin(req , res){
    try {
        console.log("trying to signin...(backend)") ;
        const user = await UserService.signin({
            email : req.body.email ,
            password : req.body.password ,
        })
        SuccessResponse.data = user ;
        console.log("succesfully loged in ") ;
        return res.status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch (error) {
        console.log("inside signin in controller , error is ---> " + error );
        ErrorResponse.error = error ;
        return res
                .status(error.statusCode)
                .json(ErrorResponse) ;
    } 
}

module.exports = {
    signup ,
    signin
}