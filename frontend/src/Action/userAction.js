const axios = require("axios");

export const loginUser = (email, password) = async (dispatch) => {
    try {
        dispatch({
            type: "loginUserRequest"
        });

        const data = await axios.post("/api/v1/login",
            { email, password },
            {
                headers: {
                    "Content-type": "application/json",
                }
            }
        );
        dispatch({
            type: "loginUserSuccess",
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: "loginUserFailure",
            payload: error.response.message
        });
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutUserRequest",
        });

        await axios.get("/app/v1/logout");
        dispatch({
            type: "logoutUserSuccess",
        });

    } catch (error) {
        dispatch({
            type: "logoutUserFailure",
            payload: error.response.message,
        });
    }
}

export const registerUser = (name, email, avatar, password) = async (dispatch) => {
    try {
        dispatch({
            type: "registerUserRequest",
        });

        const { data } = await axios.post("api/v1/register",
            { name, email, avatar, password },
            {
                headers: {
                    "Content-type": "application/json",
                }
            }
        );
        dispatch({
            type: "registerUserSuccess",
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: "registerUserFailure",
            payload: error.response.message,
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get("/api/v1/me");
        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFailure",
            payload: error.response.message,
        });
    }
}