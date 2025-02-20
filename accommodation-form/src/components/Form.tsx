import { useSelector } from "react-redux";

import { AccommodationStep } from "../steps/AccommodationSteps";
import { OwnerStep } from "../steps/OwnerStep";
import { ConfirmationStep } from "../steps/ConfirmationStep";
import { RootState } from "../redux/store";
import { Logo } from "./Logo";

export const Form = () => {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <>
      <Logo />

      <div className="relative overflow-hidden">
        <div className={`step ${step === 1 ? "step-active" : ""}`}>
          {step === 1 && <AccommodationStep />}
        </div>
        <div className={`step ${step === 2 ? "step-active" : ""}`}>
          {step === 2 && <OwnerStep />}
        </div>
        <div className={`step ${step === 3 ? "step-active" : ""}`}>
          {step === 3 && <ConfirmationStep />}
        </div>
      </div>
    </>
  );
};
