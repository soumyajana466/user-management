"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: "Customers", key: "id" },
        onDelete: "CASCADE",
      },
      invoice_number: { 
        type: Sequelize.STRING, 
        unique: true 
      },
      issue_date: { 
        type: Sequelize.DATE, 
        allowNull: false 
      },
      due_date: { 
        type: Sequelize.DATE, 
        allowNull: false 
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      notes: { 
        type: Sequelize.TEXT 
      },
      total_amount: { 
        type: Sequelize.DECIMAL(10, 2) 
      },
      created_at: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Invoices");
  },
};
