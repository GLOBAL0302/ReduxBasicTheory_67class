import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";


interface CounterState{
    value: number,
    isLoading:boolean,
    error:boolean;
}

const initialState:CounterState = {
    value:0,
    isLoading:false,
    error:false
}

// export const fetchCounterStarted = createAction("counter/fetchStarted");
// export const fetchCounterSuccess = createAction("counter/fetchSuccess", (value:number)=> ({payload:value}));
// export const fetchCounterFailure = createAction("counter/fetchFailure");
// export const fetchCounter = async (dispatch:AppDispatch)=>{///Thunk
//     try {
//         dispatch(fetchCounterStarted());
//         const {data} = await axiosApi.get<number | null>("/counter.json");
//         if(data === null){
//             dispatch(fetchCounterSuccess(0))
//         }else{
//             dispatch(fetchCounterSuccess(data))
//         }
//
//     }catch (e){
//         dispatch(fetchCounterFailure())
//     }
// }

export  const fetchCounterThunk = createAsyncThunk("counter/fetch", async()=>{
    const {data:counter} = await axiosApi.get<number | null>("/counter.json")
    return counter;
});

export const increaseCounterThunk = createAsyncThunk("counter/increase", async(_arg, thunkAPI)=>{
    const current = thunkAPI.getState().counter.value
    await axiosApi.put("/counter.json", current + 1)
    return
})

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
    extraReducers:(builder)=>{
        builder.addCase(fetchCounterThunk.pending, (state:CounterState)=>{
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(fetchCounterThunk.fulfilled, (state:CounterState, action)=>{
            state.isLoading = false;
            state.value = action.payload

        })
        builder.addCase(fetchCounterThunk.rejected, (state:CounterState)=>{
            state.isLoading = false;
            state.error = true
        })
        builder.addCase(increaseCounterThunk.pending, (state:CounterState)=>{
            state.isLoading =false;

        })
    }
});

export const counterReducer = counterSlice.reducer

export const {increase, decrease, decreaseBy, increaseBy} = counterSlice.actions