import {createSlice} from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addedToCart: (state, action) => {
            state.value = action.payload
        },
        removeToCart:(state, action) => {
            state.value = state.value
        }
    }
})