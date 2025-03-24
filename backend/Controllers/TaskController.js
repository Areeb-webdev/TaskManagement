import TaskModel, { find, findOneAndUpdate, findByIdAndDelete } from "../Models/TaskModel";

const  createTask = async (req,res) => {
    const data = req.body ;
    try{
const model = new TaskModel(data);
     await model.save();
     res.status(201).json({message: 'task created' , success : true})
    }catch(err){
        res.status(500).json({message:"Failed to create task" ,success : false })

    }

}
const  fetchAllTasks = async (req,res) => {
    
    try{
const data = await find({});
     
     res.status(201).json({message: 'All tasks' , success : true,data})
    }catch(err){
        res.status(500).json({message:"Failed to create task" ,success : false })

    }

}

const updateTasksById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };

        await findOneAndUpdate(
            { _id: id },  // Correct filter
            obj,
            { new: true }  // Returns the updated task
        );
        res.status(200).json({ message: "Task Updated", success: true, });
    } catch (err) {
        res.status(500).json({ message: "Failed to update task", success: false, error: err.message });
    }
};

const  deleteTasksById = async (req,res) => {
    
    try{
        const id = req.params.id ;
const deleteTask = await findByIdAndDelete(id);
     
     res.status(201).json({message: 'Task deleted' , success : true,deleteTask})
    }catch(err){
        res.status(500).json({message:"Failed to delete task" ,success : false })

    }

}
export default {
    createTask ,
    fetchAllTasks,
    updateTasksById,
    deleteTasksById
}