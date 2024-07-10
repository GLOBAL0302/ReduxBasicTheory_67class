import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CounterState{
    value: number
}

const initialState:CounterState = {
    value:10
}
export const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers:{
        increase:(state)=>{
            state.value += 1
        },
        decrease:(state)=>{
            state.value -= 1
        },
        increaseBy:(state, action:PayloadAction<number>)=>{
            state.value += action.payload
        },
        decreaseBy:(state, action:PayloadAction<number>)=>{
            state.value -= action.payload
        }
    },
    }
);

export const counterReducer = counterSlice.reducer

export const {increase, decrease, decreaseBy, increaseBy} = counterSlice.actions