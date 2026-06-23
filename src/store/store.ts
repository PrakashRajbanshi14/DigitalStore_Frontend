import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth : authSlice
    }
})

export default store
// exporting defined type from store for the useDispatch, useSelecter
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>