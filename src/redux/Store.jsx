import { configureStore } from "@reduxjs/toolkit";
import MessagesReducer from "./MessagesSlice";
import ImagesReducer from "./ImagesSlice";
import ArticlesReducer from "./ArticlesSlice";
import UsersReducer from "./UsersSlice";

export const store = configureStore({
    reducer:{
        messages : MessagesReducer,
        images : ImagesReducer,
        articles : ArticlesReducer,
        users : UsersReducer,
    }
})