import {createSlice} from "@reduxjs/toolkit"
export const fruitSlice= createSlice ({
    name: "fruit",
    initialState: {onOfFruits: 75},
    reducers:{
        buyFruit: (state, action)=>{
            console.log(action)
            state.onOfFruits = state.onOfFruits-action.payload;
        },
        addFruit: (state, action)=>{

            state.onOfFruits++;
        },
    }
 }
)

export const fruitReducer = fruitSlice.reducer;
export const {buyFruit, addFruit} = fruitSlice.actions;