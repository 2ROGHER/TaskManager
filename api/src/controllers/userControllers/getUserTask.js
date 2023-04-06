const { User } = require("../../database/database.js");
const Task = require('../../models/Task');
const getUserTaskController = async (userId) => {
    if (!userId) throw new Error("El id del usuario debe ser existir");
    if (userId.length !== 32) throw new Error(`El id ${userId} no cuenta con los parametros requeridos`);
    return await User.findByPk(userId, {
        include: {
            model: Task,
        }
    });
};
module.exports = getUserTaskController;