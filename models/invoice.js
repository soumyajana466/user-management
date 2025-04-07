'use strict';

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    'Invoices',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: { model: 'customer', key: 'id' },
        onDelete: 'CASCADE',
      },
      invoice_number: {
        type: DataTypes.STRING,
        unique: true,
      },
      issue_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
      },
      notes: {
        type: DataTypes.TEXT,
      },
      total_amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'Invoices',
      timestamps: false,
    }
  );

    Invoice.associate = function (models) {
    Invoice.belongsTo(models.Customer, { foreignKey: 'customer_id' });
    Invoice.hasMany(models.InvoiceItem, { foreignKey: 'invoice_id' });
    Invoice.hasMany(models.Payment, { foreignKey: 'invoice_id' });
  };

  return Invoice;
};
