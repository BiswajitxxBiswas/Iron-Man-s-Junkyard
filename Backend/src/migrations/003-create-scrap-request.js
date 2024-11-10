'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScrapRequests', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,  // Integer Primary Key with Auto-Increment
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,  // Integer Foreign Key
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      scrapDealerId: {
        type: Sequelize.INTEGER,  // Integer Foreign Key
        allowNull: false,
        references: {
          model: 'ScrapDealers',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      billId: {
        type: Sequelize.INTEGER,  // Integer Foreign Key
        allowNull: true,
        references: {
          model: 'Bills',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      pickupDateTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ScrapRequests');
  }
};
