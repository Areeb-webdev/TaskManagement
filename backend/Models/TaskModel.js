import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false // Ensures it has a default value
    },
}) // Adds createdAt & updatedAt fields

const TaskModel = model("todos", TaskSchema); // Use a more generic collection name

export default TaskModel;
