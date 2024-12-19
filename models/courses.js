const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    course_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'courses',
    schema: 'public',
    timestamps: true, // Adaugă createdAt și updatedAt
    underscored: true, // Folosește created_at și updated_at în loc de camelCase
    indexes: [
      {
        name: "courses_pkey",
        unique: true,
        fields: [
          { name: "course_id" },
        ]
      },
    ]
  });
};
