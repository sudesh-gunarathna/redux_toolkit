import { configureStore } from '@reduxjs/toolkit'
import { fruitReducer } from './features/fruit/fruitSlice';
import { drinkReducer } from './features/drink/drinkSlice';
import logger from 'redux-logger';
import { pharmacyReducer } from './features/pharmacy/pharmacySlice';
import { todoReducer } from './features/todo/todoSlice';

const store = configureStore({
    reducer: {
        fruit: fruitReducer,
        drink: drinkReducer,
        pharmacy: pharmacyReducer,
        todo: todoReducer,
        
    },
    middleware : (getDefaultMiddleware)=>{
        //console.log (getDefaultMiddleware())
        return [...getDefaultMiddleware(), logger]
    },
})
export default store;