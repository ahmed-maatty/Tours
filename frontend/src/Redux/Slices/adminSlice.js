import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name : 'admin',
    initialState:{
        books:null,
        users:null,
    },
    reducers:{
        getAllBooks(state,action){
            state.books = action.payload;
        },
        getAllUsers(state,action){
            state.users = action.payload ;
        }
    }
});

export const adminAction = adminSlice.actions;
export const adminReducer = adminSlice.reducer;