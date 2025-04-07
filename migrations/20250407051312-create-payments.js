'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
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
      payment_date: { 
        type: Sequelize.DATE, 
        allowNull: false 
      },
      payment_method: { 
        type: Sequelize.STRING 
      },
      amount: { 
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false 
      },
      transaction_ref: { 
        type: Sequelize.STRING 
      },
      created_at: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Payments');
  }
};
