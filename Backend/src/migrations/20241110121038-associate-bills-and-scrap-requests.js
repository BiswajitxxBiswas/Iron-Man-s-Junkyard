'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Only add the foreign key constraint if it does not exist already
    await queryInterface.addConstraint('Bills', {
      fields: ['scrapRequestId'],
      type: 'foreign key',
      name: 'fk_bill_scraprequest',  // Custom name for the foreign key
      references: {
        table: 'ScrapRequests',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes by removing the foreign key constraint
    await queryInterface.removeConstraint('Bills', 'fk_bill_scraprequest');
  }
};
