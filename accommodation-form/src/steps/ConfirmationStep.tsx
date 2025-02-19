import { useDispatch, useSelector } from "react-redux";
import { CardStep } from "../components/CardStep";
import { RootState } from "../redux/store";
import { setStep } from "../redux/formSlice";
import MultipleImageUploader from "../components/Accommodation/MultipleImageUploader";
import { FormInput } from "../components/FormInput";
import { Footer } from "../components/Footer";

export const ConfirmationStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <form>
      <CardStep title={"Accommodation"}>
        <div className="flex flex-col">
          <FormInput
            type="textArea"
            id="description"
            name="description"
            value={"formData.description"}
            handleChange={handlePrev}
            required
            wide
          />

          {/* Imágenes subidas */}
          <MultipleImageUploader
            onImageChange={(newImages: File[]) =>
              setFormData((prev) => ({ ...prev, images: newImages }))
            }
          />
        </div>

        <Footer textNext="Submit" textPrev="Prev" handlePrev={handlePrev} />
      </CardStep>
    </form>
  );
};
