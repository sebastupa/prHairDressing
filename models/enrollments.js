const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enrollments', {
    enrollment_id: {
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
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    progress: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'enrollments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enrollments_pkey",
        unique: true,
        fields: [
          { name: "enrollment_id" },
        ]
      },
    ]
  });
};
