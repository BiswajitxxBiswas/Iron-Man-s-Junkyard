'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { 
    await queryInterface.createTable('UserScrapDealerFeedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      scrapDealerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ScrapDealers', // Referencing the ScrapDealers table
          key: 'id',
        },
        onDelete: 'CASCADE', // Deletes feedback if scrap dealer is deleted
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Referencing the Users table
          key: 'id',
        },
        onDelete: 'CASCADE', // Deletes feedback if user (customer) is deleted
      },
      scrapRequestId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ScrapRequests', // Referencing the ScrapRequests table
          key: 'id',
        },
        onDelete: 'CASCADE', // Deletes feedback if scrap request is deleted
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserScrapDealerFeedbacks');
  },
};
