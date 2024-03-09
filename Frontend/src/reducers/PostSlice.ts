import { PayloadAction, createSlice} from "@reduxjs/toolkit";

type postCommentType = {
    commentId:string,
    comment:string
}

type postSliceType = {
    postTitle:String,
    postDate:string,
    postLike:string,
    postStatus:string,
    postImg:string,
    postComments:postCommentType[]
}

const initialState:postSliceType[] = [];

const PostSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost:(state,action)=>{},
        deletePost:(state,action)=>{},
        updatePost:(state,action)=>{},
    }
});

export const {addPost,deletePost,updatePost} = PostSlice.actions;
export default PostSlice.reducer



