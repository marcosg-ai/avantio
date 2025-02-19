import { CardStep } from "../components/CardStep";
import { DropDown } from "../components/Accommodation/DropDown";
import MultipleImageUploader from "../components/Accommodation/MultipleImageUploader";

import { setAccommodationData, setStep } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { FormInput } from "../components/FormInput";

// import { setStep } from "../redux/formSlice";

export const AccommodationStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    images: [] as File[], // Si estás usando MultipleImageUploader, puedes añadir imágenes aquí
  });

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
    <CardStep title={"Accommodation"}>
      <form>
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
          onImageChange={(newImages: File[]) =>
            setFormData((prev) => ({ ...prev, images: newImages }))
          }
        />
      </form>
      <div className="footer">
        <button onClick={handleNextStep}>Next</button>
      </div>
    </CardStep>
  );
};
