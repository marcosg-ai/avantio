import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/formSlice";

import { AccommodationStep } from "../steps/AccommodationSteps";
import { OwnerStep } from "../steps/OwnerStep";
import { ConfirmationStep } from "../steps/ConfirmationStep";
import { StepIndicator } from "./StepIndicator";
import { RootState } from "../redux/store";

export const Form = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const nextStep = () => {
    if (step < 3) {
      dispatch(setStep(step + 1)); // Cambiar al siguiente paso
    }
  };

  const prevStep = () => {
    if (step > 1) {
      dispatch(setStep(step - 1)); // Cambiar al paso anterior
    }
  };

  return (
    <>
      <StepIndicator />
      {step == 1 && <AccommodationStep />}
      {step == 2 && <OwnerStep />}
      {step == 3 && <ConfirmationStep />}

      <button onClick={prevStep} disabled={step === 1}>
        Previous
      </button>
      <button onClick={nextStep} disabled={step === 3}>
        Next
      </button>
    </>
  );
};
