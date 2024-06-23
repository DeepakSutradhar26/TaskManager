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
            user: data.user
        });
    } catch (error) {
        dispatch({
            type: "loginUserFailure"
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

        const {data} = await axios.post("api/v1/register")

    } catch (error) {
        dispatch({
            type: "registerUserFailure",
            payload: error.response.message,
        });
    }
}