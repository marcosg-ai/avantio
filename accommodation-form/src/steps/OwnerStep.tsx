import { useDispatch } from "react-redux";
import { CardStep } from "../components/CardStep";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setOwnerData, setStep } from "../redux/formSlice";
import { Footer } from "../components/Footer";
import { FormInput } from "../components/FormInput";
import { useState } from "react";
import { validOwner } from "../utils/utils";

export const OwnerStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);
  const ownerData = useSelector((state: RootState) => state.form.ownerData);

  const [ownerLocalData, setOwnerLocalData] =
    useState<RootState["form"]["ownerData"]>(ownerData);

  const [ownerValidateData, setOwnerValidateData] = useState<
    RootState["form"]["ownerData"]
  >({ name: "", email: "", phone: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOwnerLocalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setOwnerValidateData((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleNextStep = () => {
    dispatch(setStep(step + 1)); // Cambiar al siguiente paso
    dispatch(setOwnerData(ownerLocalData));
  };

  const handlePrevStep = () => {
    dispatch(setStep(step - 1)); // Cambiar al siguiente paso
    dispatch(setOwnerData(ownerLocalData));
  };

  const handleValidate = () => {
    if (validOwner(ownerLocalData, setOwnerValidateData)) handleNextStep();
  };

  return (
    // <form>
    <CardStep title={"Owner"}>
      <div className="flex flex-col">
        <FormInput
          type="text"
          id="name"
          name="name"
          value={ownerLocalData.name}
          handleChange={handleChange}
          required
          error={ownerValidateData.name}
        />

        <FormInput
          type="text"
          id="email"
          name="email"
          value={ownerLocalData.email}
          handleChange={handleChange}
          required
          error={ownerValidateData.email}
        />

        <FormInput
          type="phone"
          id="phone"
          name="phone"
          value={ownerLocalData.phone}
          handleChange={handleChange}
          required
          error={ownerValidateData.phone}
        />
      </div>
      <Footer
        textNext="Next"
        textPrev="Previous"
        handleNext={handleValidate}
        handlePrev={handlePrevStep}
      />
    </CardStep>
    // </form>
  );
};
