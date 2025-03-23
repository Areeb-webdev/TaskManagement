import { useEffect, useState } from "react";
import { FaCheck, FaPenAlt, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { createTask, deleteTaskById, getAllTask, updateTaskById } from "./api";
import { notify } from "../src/utils";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getAllTask();
      if (response.success) setTasks(response.data);
      else notify(response.message, "error");
    } catch {
      notify("Failed to fetch tasks", "error");
    }
  };

  const handleTask = async () => {
    if (!input.trim()) return notify("Task cannot be empty!", "error");

    try {
      const response = updateTask
        ? await updateTaskById(updateTask._id, { taskName: input, isDone: updateTask.isDone })
        : await createTask({ taskName: input, isDone: false });

      if (response.success) {
        notify(response.message, "success");
        setInput("");
        setUpdateTask(null);
        fetchTasks();
      } else notify(response.message, "error");
    } catch {
      notify("Failed to process task", "error");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await deleteTaskById(id);
      if (response.success) {
        notify(response.message, "success");
        fetchTasks();
      } else notify(response.message, "error");
    } catch {
      notify("Failed to delete task", "error");
    }
  };

  const handleToggleTask = async (task) => {
    try {
      const response = await updateTaskById(task._id, { taskName: task.taskName, isDone: !task.isDone });
      if (response.success) {
        notify(response.message, "success");
        fetchTasks();
      } else notify(response.message, "error");
    } catch {
      notify("Failed to update task", "error");
    }
  };

  const filteredTasks = tasks.filter((task) => task.taskName.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className="d-flex flex-column align-items-center w-50 m-auto mt-5 p-4 border rounded shadow-lg" style={{ background: "linear-gradient(135deg, #ece9e6, #ffffff)" }}>
        <h1 className="mb-4 text-primary fw-bold">Task Manager</h1>

        {/* Input & Search */}
        <div className="d-flex w-100 gap-2 mb-3">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control border-primary shadow-sm"
              placeholder="Add a new Task"
            />
            <button onClick={handleTask} className={`btn ${updateTask ? "btn-warning" : "btn-success"} btn-sm fw-bold`}>
              {updateTask ? "Update" : <FaPlus />}
            </button>
          </div>

          <div className="input-group">
            <span className="input-group-text bg-primary text-white shadow-sm">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search tasks"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control border-primary shadow-sm"
            />
          </div>
        </div>

        {/* Task List */}
        <div className="w-100">
          {filteredTasks.length ? (
            filteredTasks.map((task) => (
              <div key={task._id} className="m-2 p-3 border rounded d-flex justify-content-between align-items-center shadow-sm" style={{ backgroundColor: task.isDone ? "#d4edda" : "#fff", transition: "all 0.3s ease" }}>
                <span className={`flex-grow-1 ${task.isDone ? "text-decoration-line-through text-muted" : "fw-bold text-dark"}`}>
                  {task.taskName}
                </span>
                <div className="d-flex gap-2">
                  <button onClick={() => handleToggleTask(task)} className="btn btn-outline-success btn-sm fw-bold" title="Mark as Done">
                    <FaCheck />
                  </button>
                  <button onClick={() => setUpdateTask(task)} className="btn btn-outline-primary btn-sm fw-bold" title="Edit Task">
                    <FaPenAlt />
                  </button>
                  <button onClick={() => handleDeleteTask(task._id)} className="btn btn-outline-danger btn-sm fw-bold" title="Delete Task">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No tasks found.</p>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
export default App;