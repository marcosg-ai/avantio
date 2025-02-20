import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  step: number;
  accommodationData: object;
  ownerData: object;
  submition: object;
}

const initialState: FormState = {
  step: 1,
  accommodationData: {
    name: "",
    address: "",
    description: "",
    location: "",
    images: [] as Array<{ file: File; preview: string }>,
  },
  ownerData: {
    name: "",
    email: "",
    phone: "",
  },
  submition: { status: undefined, open: false },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setAccommodationData(state, action: PayloadAction<object>) {
      console.log(action);
      state.accommodationData = action.payload;
    },
    setOwnerData(state, action: PayloadAction<object>) {
      state.ownerData = action.payload;
    },
    setSubmition(state, action: PayloadAction<object>) {
      state.submition = action.payload;
    },
  },
});

export const { setStep, setAccommodationData, setOwnerData, setSubmition } =
  formSlice.actions;

export default formSlice.reducer;
