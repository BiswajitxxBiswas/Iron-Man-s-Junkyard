const {StatusCodes} = require('http-status-codes');
const AppError = require('../utills/error/app-error');
const crudRepository = require('./crud-repository');
const {ScrapDealer} = require('../models');

class scrapDealerRepository extends crudRepository {
    constructor() {
        super(ScrapDealer);
    }

    async getUserByEmail(email) {
        const user = await ScrapDealer.findOne({
            where: {
                email: email
            }
        });
        return user;
    }

    async updateLogout(email) {
        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }

        const res = await ScrapDealer.update(
            {status: 'offline'},
            {
                where: {
                    email: email,
                },
            }
        );
        return res;
    }

    async updateLogin(email) {
        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }

        const res = await ScrapDealer.update(
            {status: 'online'},
            {
                where: {
                    email: email,
                },
            }
        );
        return res;
    }
}

module.exports = scrapDealerRepository;