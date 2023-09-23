import { createSlice } from "@reduxjs/toolkit";
import { buyFruit } from "../fruit/fruitSlice";

const pharmacySlice = createSlice(
    {   name: "pharmacyItem",
        initialState:{noOfPharmacyItem:98,},
        reducers: {
            buyPharmacyItem:(state, action)=>{
                state.noOfPharmacyItem= state.noOfPharmacyItem - action.payload;
            },
            addPharmacyItem:(state, action)=>{
                state.noOfPharmacyItem= state.noOfPharmacyItem + action.payload;
            },
        },
        extraReducers:
        {
            [buyFruit]: (state, action)=>{
                state.noOfPharmacyItem= state.noOfPharmacyItem - action.payload;
            }
        }
        
    }

)
export const pharmacyReducer = pharmacySlice.reducer;
export const {buyPharmacyItem,addPharmacyItem} = pharmacySlice.actions;