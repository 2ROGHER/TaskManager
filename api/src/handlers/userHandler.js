const createUserController = require("../controllers/userControllers/createUserController.js");
const getAllUsersController = require("../controllers/userControllers/getAllUsersController.js");
const getUserDetailController = require("../controllers/userControllers/getUserDetailController.js");
const getUserTaskController = require("../controllers/userControllers/getUserTask.js");

const getAllUsers = async (req, res) => {
    try {
        res.status(200).json(await getAllUsersController());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getUserDetail = async (req, res) => {
    const { userId } = req.params;
    try {
        res.status(200).json(await getUserDetailController(userId));
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getUserTask = async (req, res) => {
    const { userId } = req.params;
    try {
        res.status(200).json(await getUserTaskController(userId));
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createNewUser = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        res.status(201).json(await createUserController(name, email, phone));
    } catch (error) {
        res.status(400)
    }
};
const deleteUser = (req, res) => {
    res.status(200).json("NYI: Esta ruta me elimna un user de la lista");
};
const updateUser = (req, res) => {
    res.status(200).json("NYI: Esta ruta me actualiza el estadode un user");
};
module.exports = { getAllUsers, getUserDetail, getUserTask, createNewUser, deleteUser, updateUser }