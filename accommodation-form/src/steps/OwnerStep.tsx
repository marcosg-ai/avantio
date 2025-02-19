import { useDispatch } from "react-redux";
import { CardStep } from "../components/CardStep";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setOwnerData, setStep } from "../redux/formSlice";
import { Footer } from "../components/Footer";
import { FormInput } from "../components/FormInput";
import { useState } from "react";

export const OwnerStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const [ownerLocalData, setOwnerLocalData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOwnerLocalData((prevData) => ({
      ...prevData,
      [name]: value,
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

  return (
    <CardStep title={"Owner"}>
      <form>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={ownerLocalData.name}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="text"
          id="address"
          name="address"
          value={ownerLocalData.address}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="phone"
          id="phone"
          name="phone"
          value={ownerLocalData.phone}
          handleChange={handleChange}
          required
        />
        <Footer
          textNext="Next"
          textPrev="Previous"
          handleNext={handleNextStep}
          handlePrev={handlePrevStep}
        />
      </form>
    </CardStep>
  );
};
