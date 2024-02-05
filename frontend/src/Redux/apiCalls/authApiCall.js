import Domain from "../../utils/config";
import { authAction } from "../Slices/authSlice";
import {toast} from "react-toastify";

export function loginFunc(userData){
    return async (dispatch)=>{
        try {
            const {data} = await Domain.post("/auth/login" , userData);
            dispatch(authAction.login(data));
            localStorage.setItem("userInfo" ,JSON.stringify(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
};

export function registerFunc(userData) {
    return async (dispatch) => {
        try {
            const {data} = await Domain.post("/auth/register" ,userData );
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
};

export function logOutFunc(){
    return async (dispatch)=>{
        try {
            dispatch(authAction.logOut());
            localStorage.removeItem("userInfo");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
};