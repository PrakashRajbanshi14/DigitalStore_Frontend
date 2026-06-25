import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import productSlice from "./productSlice"

const store = configureStore({
    reducer: {
        auth : authSlice,
        products: productSlice
    }
})

export default store
// exporting defined type from store for the useDispatch, useSelecter
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>