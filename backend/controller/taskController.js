const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

//Create Task
exports.createTask = catchAsyncError(async (req, res) => {
    const { title, description, toggleImp, toggleComplete } = req.body;

    const task = await Task.create({
        title, description, toggleImp, toggleComplete, ownerId: req.user._id
    });
    res.status(201).json({
        success: true,
        task
    });
});

//Get all tasks of user
exports.getUserTasks = catchAsyncError(async (req, res) => {
    const tasks = await Task.find({ ownerId: req.user._id });

    res.status(200).json({
        success: true,
        tasks
    });
});

//Update Task
exports.updateTask = catchAsyncError(async (req, res, next) => {
    const { taskId } = req.body;
    let task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler("Task does not exist", 404));
    }

    if (task.ownerId.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler("Unauthorized", 404));
    }

    task = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true, runValidators: true, useFindAndModify: false
    });
    await task.save();

    res.status(200).json({
        success: true,
        message: "Task Updated"
    });
});

//Delete Task
exports.deleteTask = catchAsyncError(async (req, res) => {
    const { taskId } = req.body;
    const task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler("Task does not exist", 404));
    }

    if (task.ownerId.toString() !== req.user.id.toString()) {
        return next(new ErrorHandler("Unauthorized", 404));
    }

    const user = await User.findById(req.user._id);
    user.tasks.forEach(async (task) => {
        if (task._id.toString() === taskId.toString()) {
            await task.deleteOne();
        }
    });
    await user.save();

    res.status(200).json({
        success: true,
        message: "Task Deleted"
    });
});