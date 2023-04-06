const express = require('express');
const { getAllTask, getDetailTask, deleteTask, createNewTask, updateTask } = require('../handlers/taskHandler');
const taskRouter = express.Router();
taskRouter.get('/', getAllTask);
taskRouter.get('/:idTask', getDetailTask)
taskRouter.post("/new-task", createNewTask);
taskRouter.delete("/delete-task/:idTask", deleteTask);
taskRouter.put("/update-task/:idTask", updateTask)
module.exports = taskRouter;