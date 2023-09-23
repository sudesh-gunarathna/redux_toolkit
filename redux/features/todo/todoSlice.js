import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodo", async()=>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    //throw new Error ( "my New Error");
    return result.data;
});

//fetchTodos.pending
//fetchTodos.fulfilled
//fetchTodos.rejected


const todoSlice = createSlice(
    {
        name: "todo",
        initialState:{
            loading: false,
            todo: [],
            error: null,
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(fetchTodos.pending,(state,action)=>{
                state.loading =  true;
            })
            builder.addCase(fetchTodos.fulfilled, (state, action)=>{
                state.loading = false;
                state.todo = action.payload;
            })
            builder.addCase(fetchTodos.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })

        }
    }
);

export const todoReducer = todoSlice.reducer;