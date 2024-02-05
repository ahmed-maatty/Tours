import { toast } from "react-toastify";
import Domain from "../../utils/config"
import { adminAction } from "../Slices/adminSlice";



export function getAllBooksFunc(){
    return async (dispatch , state) => {
        try {
            const {data} = await Domain.get("/booking",{
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            });
            dispatch(adminAction.getAllBooks(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
};

export function getAllUsersFunc(){
    return async (dispatch , state) => {
        try {
            const {data} = await Domain.get("/users" , {
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            });
            dispatch(adminAction.getAllUsers(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}

export function deleteUserFunc(id){
    return async (dispatch , state) => {
        try {
            const {data} = await Domain.delete( `/users/${id}` ,{
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            })
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
};

export function updateUserFunc(id , newUpdate){
    return async (dispatch , state) =>{
        try {
            const {data} = await Domain.put( `/users/${id}` , newUpdate , {
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            })
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.messsage)
        }
    }
}

export function createTourFunc(tourData){
    return async (dispatch , state) => {
        try {
            const {data} = await Domain.post("/tours" , tourData , {
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            });
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.messsage)
        }
    }
}


export function deleteTourFunc(id){
    return async (dispatch , state) => {
        try {
            const { data } = await Domain.delete(`/tours/${id}` , {
                headers : {
                    Authorization : "Bearer " + state().auth.user.token
                }
            });
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.messsage)
        }
    }
}