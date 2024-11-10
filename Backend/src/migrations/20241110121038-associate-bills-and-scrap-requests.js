'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('ScrapRequests', {
      fields: ['billId'],  // Field in ScrapRequests table
      type: 'foreign key',
      name: 'fk_scraprequest_bill',  // Custom name for the foreign key
      references: {
        table: 'Bills',  // Referenced table
        field: 'id',     // Referenced field
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    // Add foreign key in Bills table that references ScrapRequests
    await queryInterface.addConstraint('Bills', {
      fields: ['scrapRequestId'],  // Field in Bills table
      type: 'foreign key',
      name: 'fk_bill_scraprequest',  // Custom name for the foreign key
      references: {
        table: 'ScrapRequests',  // Referenced table
        field: 'id',             // Referenced field
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */ await queryInterface.removeConstraint('ScrapRequests', 'fk_scraprequest_bill');
    await queryInterface.removeConstraint('Bills', 'fk_bill_scraprequest');

  }
};
