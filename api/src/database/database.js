const { Sequelize } = require('sequelize');
const connectionTest = require('./config/test/connectionTest.js');
const UserModel = require('../models/User.js');
const TaskModel = require('../models/Task.js');
require("dotenv").config();
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER } = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);
connectionTest(sequelize);

UserModel(sequelize);
TaskModel(sequelize);
//*---------------- RELATION SHIP MODELS --------------------------//
const { User, Task } = sequelize.models;

User.hasMany(Task);
Task.belongsTo(User);

module.exports = { conn: sequelize, ...sequelize.models }