const Task = require('../models/tasks');
const asyncWrapper = require('../middlewares/asyncOp');


const getAllTasks = asyncWrapper((req,res) => {
    const tasks = await Task.find()
     res.status(200).json({tasks:tasks});
       res.status(500).json({message:error.message});
     }) ;

const getTask = asyncWrapper( (req,res) => {
        const id = req.params.id;
        const task = await Task.findOne({_id:id})
        if (!task) {
            return res.status(404).json({message:"Task not found!"});
        }
        res.status(200).json({id:task._id});
});

const createTask = asyncWrapper( (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({tasks:task});
   
})

const updateTask = asyncWrapper( (req,res) => {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:false})
        res.status(200).json({task:task});
})

const deleteTask = asyncWrapper((req,res) => {

        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Task deleted"});
})

module.exports = { getAllTasks, createTask, updateTask, deleteTask,getTask };