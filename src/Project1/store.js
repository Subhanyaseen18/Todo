import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../Project1/reducer'
import  userReducer  from "./reducer";

export  const store=configureStore({
    reducer :
        userReducer
    
   
})   