"use strict";

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer", // Changed from "Customers" to "Customer"
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      number: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "Customers",
      timestamps: false,
    }
  );

  Customer.associate = function (models) {
    // Make sure models.Invoice exists
    if (!models.Invoice) {
      throw new Error("Invoice model is not defined");
    }
    Customer.hasMany(models.Invoice, {
      foreignKey: "customer_id",
      as: "invoices", // Adding an alias for better readability
    });
  };

  return Customer;
};
