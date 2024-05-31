import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state,action)=>{
            state.push(action.payload)
        },
        updateUser: (state,action)=>{
            const {id,name,email,address} = action.payload
            const uu = state.find(u=>u.id == id)
            if(uu){
                uu.name= name;
                uu.email=email;
                uu.address=address
            }
        },
        deleteUser: (state,action)=>{
            const {id} = action.payload;
            const uu = state.find(u=>u.id == id)
            if(uu){
                return state.filter((user)=>user.id !== id)
            }
            
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;