import { createAction } from "@reduxjs/toolkit";

// export const handlename=(status)=>{
//     return{
//         type:"UPDATE_STATUS",
//         payload:status
//     }
// }

export const handlest=  createAction("UPDATE_STATUS")

// network request 
export const handlename=()=>{
    // return function 
    return async(dispatch)=>{
        const res=await   fetch('https://jsonplaceholder.typicode.com/users')
        const result=await res.json()
        dispatch({type:"UPDATE_NAME",payload:result[0].name})
    } 
}