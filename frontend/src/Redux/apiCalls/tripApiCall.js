import Domain from "../../utils/config";
import { tripAction } from "../Slices/tripSlice";
import {toast} from "react-toastify";

export function getAllToursFunc(pageNum){
    return async (dispatch) => {
        try {
            const {data} = await Domain.get(`/tours?page=${pageNum}`);
            dispatch(tripAction.setLoadingTrue());
            dispatch(tripAction.getAllTrips(data));
            dispatch(tripAction.setLoadingFalse());
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
};

export function getSpecificTourFunc(id){
    return async (dispatch) =>{
        try {
            const {data} = await Domain.get(`/tours/${id}`);
            dispatch(tripAction.setLoadingTrue());
            dispatch(tripAction.getSingleTour(data));
            dispatch(tripAction.setLoadingFalse());
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
};

export function getToursCountFunc(){
    return async (dispatch)=> {
        try {
            const {data} = await Domain.get("/tours/search/count");
            dispatch(tripAction.toursCount(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

export function getTourBySearchFunc(city,distance,maxGroupSize){
    return async (dispatch) => {
        try {
            const { data } = await Domain.get(`/tours/search/getBySearch?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
            dispatch(tripAction.setLoadingTrue());
            dispatch(tripAction.getTourBySearch(data));
            dispatch(tripAction.setLoadingFalse());
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Reviews Api Call 

export function createReviewFunc(id , review){
    return async (dispatch , state) => {
        try {
            const {data} = await Domain.post(`/reviews/${id}`,
            review,
            {
                headers:{
                    Authorization : "Bearer " + state().auth.user.token
                }
            });
            toast.success(data.message , {position:'top-center'});
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Booking Api Call

export function createBookFunc(bookData){
    return async (dispatch , state)=>{
        try {
            const {data} = await Domain.post("/booking" ,
                bookData,
                {
                    headers :{
                        Authorization : "Bearer " + state().auth.user.token
                    }
                }
            );
            toast.success(data.message , {position:'top-center'});
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

