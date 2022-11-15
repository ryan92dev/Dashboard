import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/Theme/themeSlice";
import authReducer from "../features/Auth/authSlice";
import postReducer from "../features/Post/postSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeReducer,
    auth: authReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
