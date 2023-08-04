import {createReducer, createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// async thunk
export const fetchname = createAsyncThunk('fetchuser', 
async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  // return payload hai
  return result[0].name;
});

const initialState = {
  name:    'subhan',
  age: 20,
  status: 'coder',
};
const userReducer = createSlice({
  name: 'person',
  initialState,
  reducers: {
    changename(state, action) {
      state.name = action.payload;
    },
    changestatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchname.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const {changename, changestatus} = userReducer.actions;
export default userReducer.reducer;

// old way to create reducer

//  export const userReducer= (state=initialState,action)=>{
//     if(action.type=="UPDATE_NAME"){
//         return{...state,
//             name:action.payload
//         }
//     }
//     return state
//  }

// export const userReducer= createReducer(initialState,(builder)=>{
// builder.addCase("UPDATE_NAME",(state,action)=>{
//     state.name=action.payload
// })
// .addCase("UPDATE_STATUS",(state,action)=>{
//   state.status=action.payload
// })
// })
