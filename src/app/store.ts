import { configureStore } from "@reduxjs/toolkit";
import { drawerSlice } from "../entities/drawer/slice";
import { apiSlice } from "../shared/api/slice";

export const store = configureStore({
  reducer: {
    [drawerSlice.name]: drawerSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
