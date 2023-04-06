const express = require('express');
const app = express();
const userRouter = require('../routes/userRoutes.js');
/* ------------------- IMPLEMENTAMOS LOS MIDDLEWARES ------------------ */
const morgan = require('morgan');
const taskRouter = require('../routes/taskRoutes.js');
app.use(morgan('dev'));
app.use(express.json());
app.use("/users",userRouter);
app.use("/task",taskRouter);
app.get('/user/tasks', (req, res) => {
    res.status(200).json("NYI: me trae todas las tareas del usuario");
});
module.exports = app;