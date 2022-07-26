import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    total:0
}

export const amountSlice = createSlice({
    name:'amount',
    initialState:initialStateValue,
    reducers:{
        amountIncrement: (state, action)=>{
            state.total += action.payload
        },
        amountDecrement: (state, action)=>{
            state.total -= action.payload
        }
    }
});

export const {amountDecrement,amountIncrement} = amountSlice.actions;
export default amountSlice.reducer;