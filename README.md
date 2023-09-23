# redux_toolkit
redux toolkit basics , Async Action with Redux toolkit
# for AsyncAction
1. no need to install redux_thunk, it  is already in  redux toolkit.
2. async action included to todo section
     2.1  create todoSlice function using createSlice
          const todoSlice = createSlice(
              {
                  name: "todo",
                  initialState:{
                      loading: false,
                      todo: [],
                      error: null,
                  },
                  reducers:{},
                  extraReducers:(builder)=>{}
   
       2.2   next create a fetcTodo funcion using createAsyncThunk to fetching Json data (npm install axios)

           export const fetchTodos = createAsyncThunk("todo/fetchTodo", async()=>{
            const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
            //throw new Error ( "my New Error");
            return result.data;
        
        });
   3.  both are sheparate function so "todo/fetchTodo" action apply as a **extraReducers**
         3.1 create three bulder.addCases fetchTodos.pending, fetchTodos.fulfilled , fetchTodos.rejected // **JS   promisess**
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
   5. then  export const todoReducer = todoSlice.reducer;   and fetchTodos funtion
   6. then add reducer to Store.js
      
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
      
  6.finaly execute in main.js
  
         store.dispatch(fetchTodos());
 
