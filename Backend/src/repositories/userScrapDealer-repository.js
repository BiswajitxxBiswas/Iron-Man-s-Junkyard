const crudRepository = require("./crud-repository") ;
const { UserScrapDealer, User, ScrapDealer  } = require("../models") ;

class UserScrapDealerRepository extends crudRepository {
    constructor(){
        super(UserScrapDealer) ;
    }

    async createFeedback(data){
        const user = await User.findOne(
            { where: { 
                email: data.userEmail 

            } 
        });
        const dealer = await ScrapDealer.findOne(
            { where: {
                email: data.dealerEmail 
            } 
        });

        const feedback = await UserScrapDealer.create({
            userId: user.id,
            scrapDealerId: dealer.id,
            rating: data.rating,
            comment: data.comment,
        });

        return feedback;
    }

}

module.exports = UserScrapDealerRepository ; 

