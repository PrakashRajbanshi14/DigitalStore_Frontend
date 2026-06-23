import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";

interface IUser{
    username : string | null,
    email: string | null,
    password : string | null
}

interface ILoginUser{
    username : string,
    email : string
}

interface IAuthState{
    user: IUser,
    status : Status
}

const initialState:IAuthState = {
    user : {
        username: null,
        email: null,
        password: null
    },
    status : Status.LOADING
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser(state:IAuthState, action:PayloadAction<IUser>){
            state.user = action.payload
        },
        setStatus(state:IAuthState, action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})


export const {setStatus, setUser} = authSlice.actions
export default authSlice.reducer

export function registerUser(data:IUser){
    return async function registerUserThunk(dispatch:AppDispatch){
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setUser(data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function loginUser(data:ILoginUser){
    return async function loginUserThunk(dispatch:AppDispatch){
        try {
             const response = await axios.post("http://localhost:3000/api/auth/login", data)
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function forgotPassword(data:{email: string}){
    return async function forgotPasswordThunk(dispatch:AppDispatch){
         try {
            const response = await axios.post("http://localhost:3000/api/auth/forgot-password", data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
        }
    }
}