const { createTask, fetchAllTasks, updateTasksById, deleteTasksById } = require("../Controllers/TaskController");

const router = require("express").Router();

router.post('/',createTask)
router.get('/', fetchAllTasks)
router.put('/:id', updateTasksById)
router.delete('/:id', deleteTasksById)

module.exports = router; 