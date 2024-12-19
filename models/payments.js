const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'courses',
        key: 'course_id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    is_free: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    discount_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "payments_transaction_id_key"
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "pending"
    },
    previous_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payments_pkey",
        unique: true,
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "payments_transaction_id_key",
        unique: true,
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  });
};
