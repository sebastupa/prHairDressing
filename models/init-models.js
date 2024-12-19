var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _certificates = require("./certificates");
var _courses = require("./courses");
var _enrollments = require("./enrollments");
var _instructors = require("./instructors");
var _modules = require("./modules");
var _payments = require("./payments");
var _reviews = require("./reviews");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var certificates = _certificates(sequelize, DataTypes);
  var courses = _courses(sequelize, DataTypes);
  var enrollments = _enrollments(sequelize, DataTypes);
  var instructors = _instructors(sequelize, DataTypes);
  var modules = _modules(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  certificates.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(certificates, { as: "certificates", foreignKey: "course_id"});
  enrollments.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(enrollments, { as: "enrollments", foreignKey: "course_id"});
  modules.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(modules, { as: "modules", foreignKey: "course_id"});
  payments.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(payments, { as: "payments", foreignKey: "course_id"});
  reviews.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(reviews, { as: "reviews", foreignKey: "course_id"});
  certificates.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(certificates, { as: "certificates", foreignKey: "user_id"});
  courses.belongsTo(users, { as: "instructor", foreignKey: "instructor_id"});
  users.hasMany(courses, { as: "courses", foreignKey: "instructor_id"});
  enrollments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(enrollments, { as: "enrollments", foreignKey: "user_id"});
  instructors.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(instructors, { as: "instructors", foreignKey: "user_id"});
  payments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(payments, { as: "payments", foreignKey: "user_id"});
  reviews.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(reviews, { as: "reviews", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    certificates,
    courses,
    enrollments,
    instructors,
    modules,
    payments,
    reviews,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
