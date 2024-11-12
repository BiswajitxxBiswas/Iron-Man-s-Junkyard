const crudRepository =  require('./crud-repository');
const { ScrapItem } = require('../models');

class scrapItemRepository extends crudRepository {
    constructor(){
        super(ScrapItem) ;
    }
}

module.exports = scrapItemRepository ; 