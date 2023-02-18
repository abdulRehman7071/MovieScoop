import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/toggleNav/index";

export const store = configureStore({
  reducer: {
    toggleNav: navSlice
  }
});
