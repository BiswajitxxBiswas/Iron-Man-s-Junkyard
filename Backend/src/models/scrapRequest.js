'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class ScrapRequest extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'userId',
                targetKey: 'id',
            });
            this.belongsTo(models.ScrapDealer, {
                foreignKey: 'scrapDealerId',
                targetKey: 'id',
            });
            this.hasOne(models.Bill, {
                foreignKey: 'scrapRequestId',
            });
        }
    }

    ScrapRequest.init({
        id: {
            type: DataTypes.INTEGER,  // Integer Primary Key with Auto-Increment
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,  // Integer Foreign Key
            allowNull: false,
        },
        scrapDealerId: {
            type: DataTypes.INTEGER,  // Integer Foreign Key
            allowNull: false,
        },
        pickupDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            defaultValue: 'pending',
        },
        billId: {
            type: DataTypes.INTEGER,  // Integer Foreign Key
            references: {
                model: 'Bills',
                key: 'id',
            },
        }
    }, {
        sequelize,
        modelName: 'ScrapRequest',
    });

    return ScrapRequest;
};
