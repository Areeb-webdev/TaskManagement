import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema ;

const TaskSchema = new Schema({
    taskName: {
        type: String,
         required: true 
    },
    isDone: {
        type: Boolean,
         required: true 
    },
});
const TaskModel = model('todos',TaskSchema);
export default TaskModel;   