import { CardStep } from "../components/CardStep";
import { DropDown } from "../components/Accommodation/DropDown";
import MultipleImageUploader from "../components/Accommodation/MultipleImageUploader";

import { setAccommodationData, setStep } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { Footer } from "../components/Footer";
import { validAccomodation } from "../utils/utils";

export const AccommodationStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);
  const accommodationData = useSelector(
    (state: RootState) => state.form.accommodationData
  );

  const [formData, setFormData] = useState(accommodationData);

  const [formValidate, setFormValidate] = useState({
    name: "",
    address: "",
    description: "",
    location: "",
    images: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormValidate((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleNextStep = () => {
    dispatch(setStep(step + 1)); // Cambiar al siguiente paso
    dispatch(setAccommodationData(formData));
  };

  const handleUploadImages = (
    newImages: Array<{ file: File; preview: string }>
  ) => {
    setFormData((prev) => ({
      ...prev,
      images: [...formData.images, ...newImages],
    }));

    setFormValidate((prev) => ({
      ...prev,
      images: "",
    }));
  };

  const handleDeleteImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: [...formData.images.filter((_, i) => i !== index)],
    }));
    setFormValidate((prev) => ({
      ...prev,
      images: "",
    }));
  };

  const handleValidate = () => {
    if (validAccomodation(formData, setFormValidate)) handleNextStep();
  };

  return (
    //<form>
    <CardStep title={"Accommodation"}>
      <div className="flex flex-col ">
        <FormInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          handleChange={handleChange}
          required
          error={formValidate.name}
        />

        <FormInput
          type="text"
          id="address"
          name="address"
          value={formData.address}
          handleChange={handleChange}
          required
          error={formValidate.address}
        />

        <FormInput
          type="textArea"
          id="description"
          name="description"
          value={formData.description}
          handleChange={handleChange}
          required
          wide
          error={formValidate.description}
        />

        <DropDown
          value={formData.location}
          handleChange={handleChange}
          error={formValidate.location}
        />

        <MultipleImageUploader
          handleUpdloadImages={handleUploadImages}
          handleDeleteImage={handleDeleteImage}
          images={formData.images}
          error={formValidate.images}
        />
      </div>

      <Footer textNext="Next" handleNext={handleValidate} />
    </CardStep>
    //</form>
  );
};
