const crudRepository = require("./crud-repository") ;
const { User } = require("../models/user") ;

class UserRepository extends crudRepository {
    constructor(){
        super(User) ;
    }

    async getUserByEmail(email){
        const user = await User.findOne({
            where : {
                email : email
            }
        }) ;
        return user ;
    }
}

module.exports = UserRepository ; 