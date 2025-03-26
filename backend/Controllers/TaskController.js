import TaskModel from "../Models/TaskModel.js"; // Ensure correct path & extension

const createTask = async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({ message: "Task created", success: true });
    } catch (err) {
        res.status(500).json({ message: "Failed to create task", success: false, error: err.message });
    }
};

const fetchAllTasks = async (req, res) => {
    try {
        const data = await TaskModel.find({}); // Corrected
        res.status(200).json({ message: "All tasks", success: true, data });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch tasks", success: false, error: err.message });
    }
};

const updateTasksById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedTask = await TaskModel.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true } // Return updated task
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found", success: false });
        }

        res.status(200).json({ message: "Task updated", success: true, updatedTask });
    } catch (err) {
        res.status(500).json({ message: "Failed to update task", success: false, error: err.message });
    }
};
const deleteTasksById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await TaskModel.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found", success: false });
        }

        res.status(200).json({ message: "Task deleted", success: true, deletedTask });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete task", success: false, error: err.message });
    }
};

// Correct export syntax
export { createTask, fetchAllTasks, updateTasksById, deleteTasksById };
