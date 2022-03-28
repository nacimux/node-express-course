const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task name is required"],
    },
    completed: {   
        type: Boolean,
        default: false,
    },

});

module.exports = mongoose.model("Task", taskSchema); // name of the collection in the database