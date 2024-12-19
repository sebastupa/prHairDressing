const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    review_id: {
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'reviews',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reviews_pkey",
        unique: true,
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
