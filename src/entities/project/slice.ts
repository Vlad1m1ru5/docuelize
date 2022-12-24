import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/types";

interface ProjectState {
  nameFilter: string;
}

const initialState: ProjectState = {
  nameFilter: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
    resetNameFilter: (state) => {
      state.nameFilter = initialState.nameFilter;
    },
  },
});

export const { setNameFilter, resetNameFilter } = projectSlice.actions;

export const selectProjectNameFilter = (state: RootState) =>
  state.project.nameFilter;
