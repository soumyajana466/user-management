'use strict';

module.exports = (sequelize, DataTypes) => {
  const InvoiceItem = sequelize.define(
    'InvoiceItems',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      invoice_id: {
        type: DataTypes.INTEGER,
        references: { model: 'invoice', key: 'id' },
        onDelete: 'CASCADE',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      total_price: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: 'InvoiceItems',
      timestamps: false,
    }
  );

  InvoiceItem.associate = function (models) {
    InvoiceItem.belongsTo(models.Invoice, { foreignKey: 'invoice_id' });
  };

  return InvoiceItem;
};
