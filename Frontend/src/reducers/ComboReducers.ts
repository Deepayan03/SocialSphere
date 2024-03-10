import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostSlice from "./PostSlice";


const RootReducer = combineReducers({
    UserSlice:UserSlice,
    PostSlice:PostSlice
});

export default RootReducer;
export type RootReducerType = ReturnType<typeof RootReducer>;