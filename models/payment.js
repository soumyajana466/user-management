'use strict';

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'Payments',
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
      payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      transaction_ref: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'Payments',
      timestamps: false,
    }
  );

  Payment.associate = function (models) {
    Payment.belongsTo(models.Invoice, { foreignKey: 'invoice_id' });
  };

  return Payment;
};
