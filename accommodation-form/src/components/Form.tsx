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
      {step == 1 && <AccommodationStep />}
      {step == 2 && <OwnerStep />}
      {step == 3 && <ConfirmationStep />}
    </>
  );
};
