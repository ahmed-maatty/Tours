import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
    name:'trip',
    initialState:{
        tours:null,
        toursCount:null,
        singleTour:null,
        searchedTour:null,
        loading :true,
    },
    reducers:{
        setLoadingTrue(state){
            state.loading = true ;
        },
        setLoadingFalse(state){
            state.loading = false ;
        },
        getAllTrips(state ,action){
            state.tours = action.payload;
        },
        getSingleTour(state, action){
            state.singleTour = action.payload ;
        },
        toursCount(state , action){
            state.toursCount = action.payload ;
        },
        getTourBySearch(state,action){
            state.searchedTour = action.payload
        }
    }
})

export const tripsReducer = tripSlice.reducer ;
export const tripAction = tripSlice.actions ;