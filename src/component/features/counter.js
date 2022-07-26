import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    coin:0,
    total:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState:initialStateValue,
    reducers:{
        increment:(state)=>{
            state.coin += 1;
        },
        decrement:(state)=>{
            state.coin -= 1;
        },
        amountIncrement: (state, action)=>{
            state.total += action.payload
        },
        amountDecrement: (state, action)=>{
            state.total -= action.payload
        }
    }
});

export const {increment,decrement,amountDecrement,amountIncrement} = counterSlice.actions;

export default counterSlice.reducer