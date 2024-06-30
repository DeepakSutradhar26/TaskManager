import axios from "axios";

export const createTask = ({ title, description, toggleImp, toggleComplete }) => async (dispatch) => {
    try {
        dispatch({
            type: "createTaskRequest"
        })

        const { data } = await axios.post("api/v1/task/create",
            { title, description, toggleImp, toggleComplete },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({
            type: "createTaskSuccess",
            payload: data.task,
        });
    } catch (error) {
        dispatch({
            type: "createTaskFailure",
            payload: error.message,
        });
    }
}

export const getUserTasks = () => async (dispatch) => {
    try {
        dispatch({
            type: "getUserTasksRequest"
        });

        const { data } = await axios.get("api/v1/tasks");
        dispatch({
            type: "getUserTasksSuccess",
            payload: data.tasks,
        });
    } catch (error) {
        dispatch({
            type: "getUserTasksFailure",
            payload: error.message,
        });
    }
}

export const updateTask = ({ title, description, toggleImp, toggleComplete }) => async (dispatch) => {
    try {
        dispatch({
            type: "updateTaskRequest"
        });

        const { data } = await axios.put("api/v1/task/update",
            { title, description, toggleImp, toggleComplete },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({
            type: "updateTaskSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "updateTaskFailure",
            payload: error.message,
        });
    }
}

export const deleteTask = () => async (dispatch) => {
    try {
        dispatch({
            type: "deleteTaskRequest"
        });

        const { data } = await axios.delete("api/v1/task/delete");
        dispatch({
            type: "deleteTaskSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteTaskFailure",
            payload: error.message
        })
    }
}