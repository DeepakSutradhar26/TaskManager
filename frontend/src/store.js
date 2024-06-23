import { configure } from "@reduxjs/toolkit";
import { useReducer } from "./Reducer/userReducer";

const store = configure({
    reducer: {
        user: useReducer
    }
});
module.exports = store;