import { createSlice } from "@reduxjs/toolkit";


const auth = createSlice({
    name : "auth",
    initialState:{
        user : localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem("userInfo")): null ,
        register:{
            success:null,
            message:null
        },
    },
    reducers:{
        login(state , action){
            state.user = action.payload ;
            state.register = null ;
        },
        register(state , action){
            state.register.success = action.payload.success ;
            state.register.message = action.payload.message ;
        },
        logOut(state){
            state.user = null ;
        }
    }
});

export const authReducer = auth.reducer;
export const authAction = auth.actions;
