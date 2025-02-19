// import { useDispatch, useSelector } from "react-redux";
// import { setStep } from "../redux/formSlice";

import { useSelector } from "react-redux";

import { AccommodationStep } from "../steps/AccommodationSteps";
import { OwnerStep } from "../steps/OwnerStep";
import { ConfirmationStep } from "../steps/ConfirmationStep";
import { StepIndicator } from "./StepIndicator";
import { RootState } from "../redux/store";

export const Form = () => {
  const step = useSelector((state: RootState) => state.form.step);

  //   const dispatch = useDispatch();
  //   const nextStep = () => {
  //     if (step < 3) {
  //       dispatch(setStep(step + 1)); // Cambiar al siguiente paso
  //     }
  //   };

  //   const prevStep = () => {
  //     if (step > 1) {
  //       dispatch(setStep(step - 1)); // Cambiar al paso anterior
  //     }
  //   };

  return (
    <>
      <StepIndicator />
      {step == 1 && <AccommodationStep />}
      {step == 2 && <OwnerStep />}
      {step == 3 && <ConfirmationStep />}
    </>
  );
};
