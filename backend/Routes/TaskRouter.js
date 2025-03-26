import express from "express";
import { createTask, fetchAllTasks, updateTasksById, deleteTasksById } from "../Controllers/TaskController.js";

const router = express.Router();

router.post('/', createTask);
router.get('/', fetchAllTasks);
router.put('/:id', updateTasksById);
router.delete('/:id', deleteTasksById);

export default router; 