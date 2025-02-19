import { CardStep } from "../components/CardStep";
import { DropDown } from "../components/Accommodation/DropDown";
import MultipleImageUploader from "../components/Accommodation/MultipleImageUploader";

import { setAccommodationData, setStep } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { Footer } from "../components/Footer";

// import { setStep } from "../redux/formSlice";

export const AccommodationStep = () => {
  const step = useSelector((state: RootState) => state.form.step);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    images: [] as File[], // Si estás usando MultipleImageUploader, puedes añadir imágenes aquí
  });

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    dispatch(setStep(step + 1)); // Cambiar al siguiente paso
    dispatch(setAccommodationData(formData));
  };

  return (
    <form>
      <CardStep title={"Accommodation"}>
        <div className="flex flex-col">
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            required
          />

          <FormInput
            type="text"
            id="address"
            name="address"
            value={formData.address}
            handleChange={handleChange}
            required
          />

          <FormInput
            type="textArea"
            id="description"
            name="description"
            value={formData.description}
            handleChange={handleChange}
            required
            wide
          />

          <DropDown />

          {/* Imágenes subidas */}
          <MultipleImageUploader
            onImageChange={(newImages: File[]) => {
              console.log(newImages);
              setFormData((prev) => ({ ...prev, images: newImages }));
            }}
          />
        </div>

        <Footer textNext="Next" handleNext={handleNextStep} />
      </CardStep>
    </form>
  );
};
