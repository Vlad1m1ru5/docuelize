import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../shared/types";

interface DrawerState {
  newProjectDrawer: DrawerSubState;
  projectDrawer: DrawerSubState;
}

interface DrawerSubState {
  open: boolean;
}

const initialSubState: DrawerSubState = {
  open: false,
};

const initialState: DrawerState = {
  newProjectDrawer: initialSubState,
  projectDrawer: initialSubState,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openNewProjectDrawer: (state) => {
      state.newProjectDrawer.open = true;
    },
    closeNewProjectDrawer: (state) => {
      state.newProjectDrawer.open = false;
    },
    openProjectDrawer: (state) => {
      state.projectDrawer.open = true;
    },
    closeProjectDrawer: (state) => {
      state.projectDrawer.open = false;
    },
  },
});

export const {
  openNewProjectDrawer,
  closeNewProjectDrawer,
  openProjectDrawer,
  closeProjectDrawer,
} = drawerSlice.actions;

export const selectNewProjectDrawerOpen = (state: RootState) =>
  state.drawer.newProjectDrawer.open;
