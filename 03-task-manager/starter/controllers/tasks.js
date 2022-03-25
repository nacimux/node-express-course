const express = require('express');

const getAllTasks = (req,res) => {

  res.send("getTasks");
};

const getTask = (req,res) => {
    res.send("getTask");
};

const createTask = (req,res) => {
    res.send("addTask");
};

const updateTask = (req,res) => {
    res.send("update task");
};

const deleteTask = (req,res) => {
    res.send("Delete task");
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask,getTask };