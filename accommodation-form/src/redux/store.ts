// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

export interface RootState {
  form: {
    step: number;
    accommodationData: object;
    ownerData: object;
  };
}

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
