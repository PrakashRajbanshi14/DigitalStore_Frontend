import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./types";


const productInfo:Product = {
    products : []
}

const productSlice = createSlice({
    name: "product",
    initialState: productInfo,
    reducers : {
        setProduct(state:Product, action:PayloadAction<Product>){
            state.products =[{
                productName : "rum pum",
                qty: 5
            }]
        }
    }
})

const {setProduct} = productSlice.actions
export default productSlice.reducer