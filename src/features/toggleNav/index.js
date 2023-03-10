import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const toggleNav = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { show, hide } = toggleNav.actions;

export default toggleNav.reducer;
