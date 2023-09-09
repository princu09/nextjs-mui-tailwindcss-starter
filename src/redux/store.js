import { configureStore } from "@reduxjs/toolkit";
import viewportSlice from "./slices/viewportSlice";

const store = configureStore({
  reducer: {
    viewport: viewportSlice,
  },
});

export default store;
