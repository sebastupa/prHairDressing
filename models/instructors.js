const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instructors', {
    instructor_id: {
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
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_picture_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    experience_years: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'instructors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "instructors_pkey",
        unique: true,
        fields: [
          { name: "instructor_id" },
        ]
      },
    ]
  });
};
