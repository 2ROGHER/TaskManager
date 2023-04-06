const { User } = require("../../database/database.js");
const getUserDetailController = async (userId) => {
    if(!userId) throw new Error("El id del usuario es requerido");
    //debemos verificar que el usuario sea un UUID valido
    if(typeof userId !== 'string' || userId.length < 5) throw new Error(`El id ${userId} debe ser un id valido`);
    return await User.findByPk(userId);
};
module.exports = getUserDetailController;