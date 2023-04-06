const express = require("express");
const { getAllUsers, getUserDetail, getUserTask, createNewUser, deleteUser, updateUser } = require("../handlers/userHandler");
const userRouter = express.Router();
userRouter.get("/",getAllUsers);
userRouter.get('/:userId', getUserDetail);
userRouter.get('/:userId/tasks', getUserTask);
userRouter.post("/new-user", createNewUser);
userRouter.delete("/delete-user/:id", deleteUser);
userRouter.put("/update-user",updateUser)
module.exports = userRouter;