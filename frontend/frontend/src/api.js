import { API_URL } from "./utils";

export const createTask = async (taskObj) => {
    const url = `${API_URL}/tasks`;
    console.log(url);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskObj),
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error("Error creating task:", err);
        return { success: false, message: "Error creating task" };
    }
};

export const getAllTask = async () => { // Removed `taskObj`
    const url = `${API_URL}/tasks`;
    console.log(url);

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error("Error fetching tasks:", err);
        return { success: false, message: "Error fetching tasks" };
    }
};

export const deleteTaskById = async (id) => { // Changed `taskObj` to `id`
    const url = `${API_URL}/tasks/${id}`; // Append ID to the URL
    console.log(url);

    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error("Error deleting task:", err);
        return { success: false, message: "Error deleting task" };
    }
};

export const updateTaskById = async (id, reqBody) => { // Changed `taskObj` to `id`
    const url = `${API_URL}/tasks/${id}`; // Append ID to the URL
    console.log(url);

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody)
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error("Error deleting task:", err);
        return { success: false, message: "Error deleting task" };
    }
};
