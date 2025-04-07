"use strict";

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      // ... other invoice fields
    },
    {
      tableName: "Invoices",
      timestamps: false,
    }
  );

  Invoice.associate = function(models) {
    Invoice.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: 'customer'
    });
  };

  return Invoice;
};
