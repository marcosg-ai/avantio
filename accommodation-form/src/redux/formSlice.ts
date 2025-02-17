// src/features/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  step: number;
  accommodationData: object;
  ownerData: object;
}

const initialState: FormState = {
  step: 1,
  accommodationData: {},
  ownerData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setAccommodationData(state, action: PayloadAction<object>) {
      state.accommodationData = action.payload;
    },
    setOwnerData(state, action: PayloadAction<object>) {
      state.ownerData = action.payload;
    },
  },
});

export const { setStep, setAccommodationData, setOwnerData } =
  formSlice.actions;

export default formSlice.reducer;
