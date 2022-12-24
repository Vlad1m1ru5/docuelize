import { configureStore } from "@reduxjs/toolkit";
import { drawerSlice } from "../entities/drawer/slice";
import { projectSlice } from "../entities/project/slice";
import { apiSlice } from "../shared/api/slice";

export const store = configureStore({
  reducer: {
    [drawerSlice.name]: drawerSlice.reducer,
    [projectSlice.name]: projectSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
