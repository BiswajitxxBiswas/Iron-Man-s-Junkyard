'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserScrapDealers', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Name of the users table
          key: 'id',
        },
        // onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      scrapDealerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ScrapDealers', // Name of the scrap dealers table
          key: 'id',
        },
        // onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      rating: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserScrapDealers');
  }
};
