const crudRepository =  require('./crud-repository');
const { ScrapDealer } = require('../models');

class scrapDealerRepository extends crudRepository {
    constructor(){
        super(ScrapDealer) ;
    }
    async getUserByEmail(email){
        const user = await ScrapDealer.findOne({
            where : {
                email : email
            }
        }) ;
        return user ;
    }
}

module.exports = scrapDealerRepository ; 