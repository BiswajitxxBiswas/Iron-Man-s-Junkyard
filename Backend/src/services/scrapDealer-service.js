const { scrapDealerRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes") ;
const { Auth } = require("../utills/common") ;
const AppError = require("../utills/error/app-error") ;

const ScrapDealerRepository = new scrapDealerRepository() ;

async function signup(data){
    try {
        // console.log("inside try in signup in user services") ;
        const user = await ScrapDealerRepository.create(data) ;
        return user ;       
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        // Throwing a generic Internal Server Error if the error is not a validation error
        console.log("error inside the user service in while sign up ---> " + error) ;
        throw new AppError('Cannot create a new user object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function signin(data){
    try {
        // first step for sign in is to first check user id (user is registered or not)
        const user = await ScrapDealerRepository.getUserByEmail(data.email) ;
        if(!user){
            throw new AppError("no user fund for the given email " , StatusCodes.NOT_FOUND) ;
        }

        // second step , if user exist then check for the password 
        const passwordMatch = await Auth.checkPassword(data.password , user.password) ;
        if(!passwordMatch){
            console.log("inside if block of password match in user service ") ;
            throw new AppError("invalid password , try again " , StatusCodes.BAD_REQUEST) ;
        } 

        // now if both id and password is correct, then it's correct time to provide jwt token to user 
        const jwt = await Auth.createToken({id : user.id , email : user.email}) ;
        if(!jwt){
            throw new AppError("something wrong while creating the jwt token  " , StatusCodes.INTERNAL_SERVER_ERROR) ;
        }
        return jwt ;
    } catch (error) {
        if(error instanceof AppError) throw error;
        console.log(error);
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function logOut(data){
    try {
        // console.log("inside try in signup in user services") ;
        const user = await ScrapDealerRepository.updateLogout(data.email, { status: 'offline' }) ;
        return user ;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        console.log("error inside the user service in while logging out Dealer ---> " + error) ;
        throw new AppError('User successfully logged out and status updated to offline.', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function logIn(data){
    try {
        // console.log("inside try in signup in user services") ;
        const user = await ScrapDealerRepository.updateLogin(data.email, { status: 'online' }) ;
        return user ;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        console.log("error inside the user service in while logging in Dealer ---> " + error) ;
        throw new AppError('User successfully logged in and status updated to online.', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    signup ,
    signin ,
    logOut,
    logIn
}