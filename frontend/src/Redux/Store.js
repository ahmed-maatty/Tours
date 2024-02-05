import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./Slices/authSlice";
import { tripsReducer } from "./Slices/tripSlice";
import { adminReducer } from "./Slices/adminSlice";

const Store = configureStore({
    reducer:{
        auth : authReducer,
        tour :tripsReducer,
        admin : adminReducer
    }
});

export default Store ;