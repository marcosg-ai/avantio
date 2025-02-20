// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

export enum Variant {
  OK = "OK",
  KO = "KO",
}

export interface RootState {
  form: {
    step: number;
    accommodationData: {
      name: string;
      address: string;
      description: string;
      location: string;
      images: Array<{ file: File; preview: string }>;
    };
    ownerData: {
      name: string;
      email: string;
      phone: string;
    };
    submition: {
      status: Variant;
      open: boolean;
    };
  };
}

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
