'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InvoiceItems', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      invoice_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices', key: 'id' },
        onDelete: 'CASCADE'
      },
      description: { 
        type: Sequelize.TEXT, 
        allowNull: false 
      },
      quantity: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
      unit_price: { 
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false 
      },
      total_price: { 
        type: Sequelize.DECIMAL(10, 2) 
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('InvoiceItems');
  }
};
