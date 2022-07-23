import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState:{value : []},
    reducers: {
        displayProduct:(state,action)=>{
            state.value = action.payload;
        },
    }
})

export const {displayProduct} = productSlice.actions;

export default productSlice.reducer;