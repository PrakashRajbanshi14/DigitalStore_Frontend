import { createSlice } from "@reduxjs/toolkit";
import type { User } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";

const userInfo:User = {
    name: "Prakash",
    age: 22
}

const userSlice = createSlice({
    name : "user",
    initialState : userInfo,
    reducers : {
        setName(state:User,action:PayloadAction<string>){
            state.name = action.payload
        },
        setAge(state:User,action:PayloadAction<number>){
            state.age = action.payload
        }
    }
})

//actions
// const setName = userSlice.actions.setName
// const setAge = userSlice.actions.setAge other way=>

export const {setName, setAge} = userSlice.actions
export default userSlice.reducer