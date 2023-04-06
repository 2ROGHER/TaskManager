const { User } = require("../../database/database.js");
const getAllUsersController = async () =>{
    return await User.findAll();
};
module.exports = getAllUsersController;