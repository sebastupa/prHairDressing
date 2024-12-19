const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modules', {
    module_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'courses',
        key: 'course_id'
      }
    },
    module_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    video_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "modules_pkey",
        unique: true,
        fields: [
          { name: "module_id" },
        ]
      },
    ]
  });
};
