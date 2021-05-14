import {createSlice,current} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"counterSlice",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByValue:(state,action)=>{
            state.value+=parseInt(action.payload)
            console.log(current(state));
        },
        decrementByValue:(state,action)=>{
            state.value-=parseInt(action.payload)
        }
    }
});

export const {increment,decrement,incrementByValue,decrementByValue} = counterSlice.actions;

export default counterSlice.reducer;

