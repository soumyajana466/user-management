"use strict";

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customers",
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
    Customer.hasMany(models.Invoice, { foreignKey: "customer_id" });
  };

  return Customer;
};
