import { createSlice } from "@reduxjs/toolkit";

 const drinkSlice = createSlice(
    {
        name: "drink",
        initialState: {noOfDrink: 37, },
        reducers:{
            buyDrink: (state,action)=>{
                state.noOfDrink--;

            },
            addDrink:(state, action)=>{
                state.noOfDrink= state.noOfDrink- action.payload;

            }
        }
    
    }
)
export const drinkReducer = drinkSlice.reducer;
export const {buyDrink, addDrink}  = drinkSlice.actions;