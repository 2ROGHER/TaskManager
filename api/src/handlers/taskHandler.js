
const getAllTask = async (req, res) => {
    try {
        res.status(200).json(await getAllUsersController());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getDetailTask = (req, res) => {
    res.status(200).json("NYI: Est ruta me trae el detalle de una tarea");
};
const createNewTask = (req, res) => {
    res.status(200).json("NYI: Esta ruta me crea una nueva tarea");
}
const deleteTask = (req, res) => {
    res.status(200).json("NYI: esta ruta me elmina una tarea en particula");
};
const updateTask = (req, res) => {
    res.status(200).json("NYI: esta ruta me pemirte editar una tarea en particula");
}
module.exports = { getAllTask, getDetailTask, createNewTask, deleteTask, updateTask };