const express = require("express");
const router = express.Router();
const {
    createTask,
    getUserTasks,
    updateTask,
    deleteTask,
} = require("../controller/taskController");
const { isAuthenticatedUser } = require("../middleware/auth");


router.route("/task/create").post(isAuthenticatedUser, createTask);
router.route("/tasks").get(isAuthenticatedUser, getUserTasks);
router.route("/task/update").put(isAuthenticatedUser, updateTask);
router.route("/task/delete").delete(isAuthenticatedUser, deleteTask);

module.exports = router;