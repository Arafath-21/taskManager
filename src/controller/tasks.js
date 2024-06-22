// controllers/taskController.js
import taskModel from '../models/Task.js'
import asyncWrapper from '../middleware/asyncWrapper.js'
import { createCustomError } from '../error/custom-error.js'

const createTask = asyncWrapper(async (req, res) => {
    const task = await taskModel.create(req.body)
    res.status(201).send({
        message: 'Task created successfully',
        task
    })
})

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await taskModel.find({})
    res.status(200).send({
        message: `Fetched all tasks`,
        tasks
    })
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

export default {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask
}
