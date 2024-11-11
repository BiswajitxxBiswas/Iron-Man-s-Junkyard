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
            this.belongsTo(models.ScrapItem, {
                foreignKey: 'scrapItemId',
                targetKey: 'id',
            });
            this.hasOne(models.Bill, {
                foreignKey: 'scrapRequestId',
            });
        }
    }

    ScrapRequest.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        scrapDealerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        scrapItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ScrapItems',
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,  // Ensure this is not nullable
        },
        pickupDateTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            defaultValue: 'pending',
        },
        billId: {
            type: DataTypes.INTEGER,
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
