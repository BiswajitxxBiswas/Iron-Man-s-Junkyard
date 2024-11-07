const crudRepository =  require('./crud-repository');
const { ScrapRequest } = require('../models');

class ScrapRequestRepository extends crudRepository {
    constructor(){
        super(ScrapRequest) ;
    }
    async getUserByEmail(email){
        const user = await ScrapRequest.findOne({
            where : {
                email : email
            }
        }) ;
        return user ;
    }
}

module.exports = ScrapRequestRepository ; 