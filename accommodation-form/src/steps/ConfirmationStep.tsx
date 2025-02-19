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
      <CardStep title={"Confirmation"}>
        <div className="flex flex-col">
          <h1 className="text-left font-semibold">Accomodation</h1>
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

          <div className="mt-10 text-left">
            <h1 className="text-left font-semibold">Owner</h1>
            <div className="flex gap-2">
              <p className="font-medium">Name:</p>
              <p className="">NOMBREEE</p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium">Email:</p>
              <p className="">EMAAIL</p>
            </div>
          </div>
        </div>

        <Footer textNext="Submit" textPrev="Prev" handlePrev={handlePrev} />
      </CardStep>
    </form>
  );
};
