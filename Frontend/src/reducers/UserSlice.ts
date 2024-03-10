import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type userSliceType = {
    userName:string,
    userStatus:boolean,
    userEmail:string,
    userPassword:string
}

type initialStateType = {
    users:userSliceType[]
}

const initialState:initialStateType = {
    users:[]
}

const UserSLice = createSlice({
    name:"User",
    initialState,
    reducers:{
        // we need to provide action type that is "action:PayloadAction<type>"
        addUser:(state,action:PayloadAction<userSliceType>)=>{
            state.users = [...state.users,action.payload]
        },
        deleteUser:(state,action)=>{},
        updateUser:(state,action)=>{},
        searchUser:(state,action)=>{}
    }
});

export const {addUser,deleteUser,updateUser,searchUser} = UserSLice.actions;
export default UserSLice.reducer
