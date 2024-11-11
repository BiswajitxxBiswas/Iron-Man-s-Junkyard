const { ScrapDealerService } = require("../services") ;
const {StatusCodes} = require("http-status-codes") ;
const {SuccessResponse , ErrorResponse} = require("../utills/common") ;

/**
 * POST scrap/signup
 * req-body { email : abc@gmail.com , password : dsafjdgxjachv}
 */
async function signup(req, res) {
    try {
        const user = await ScrapDealerService.signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNo: req.body.phoneNo,
            gender: req.body.gender,
            address: req.body.address,
            dob: req.body.dob,
            country: req.body.country,
            city: req.body.city,
            pincode: req.body.pincode,
            operationalLocations: req.body.operationalLocations,
            status: req.body.status || 'offline' // Default to 'offline' if not provided
        });

        // SuccessResponse.data = user;

         // Generate a username based on email
        const emailPrefix = user.email.split('@')[0];
        const randomTwoDigit = Math.floor(10 + Math.random() * 90);
        const generatedUsername = `${emailPrefix}${randomTwoDigit}`;
        
        // Generate a random 8-character password
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        const generatedPassword = Array.from({ length: 8 }, () =>
            characters.charAt(Math.floor(Math.random() * characters.length))
        ).join('');

        console.log("Generated username ---> " + generatedUsername);
        console.log("Generated password ---> " + generatedPassword);

        const response = {
            username : generatedUsername ,
            password : generatedPassword ,
        }

        SuccessResponse.data = response ;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log("inside signup in controller, error is ---> " + error);
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
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