import { useDispatch, useSelector } from "react-redux";
import { CardStep } from "../components/CardStep";
import { RootState } from "../redux/store";
import { setStep } from "../redux/formSlice";
import MultipleImageUploader from "../components/Accommodation/MultipleImageUploader";
import { Footer } from "../components/Footer";

export const ConfirmationStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const accommodationData = useSelector(
    (state: RootState) => state.form.accommodationData
  );

  const ownerData = useSelector((state: RootState) => state.form.ownerData);

  console.log(accommodationData);

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <form>
      <CardStep title={"Confirmation"}>
        <div className="flex flex-col gap-8">
          <div className="text-left flex flex-col gap-2">
            <h1 className="text-left  text-2xl font-semibold ">
              Accommodation
            </h1>
            <div className="flex gap-2">
              <p>Name:</p>
              <p>{accommodationData.name}</p>
            </div>
            <div className="flex gap-2">
              <p>Address:</p>
              <p>{accommodationData.address}</p>
            </div>

            <div className="flex gap-2">
              <p>Description:</p>
              <p>{accommodationData.description}</p>
            </div>

            <div className="flex gap-2">
              <p>Location:</p>
              <p>{accommodationData.address}</p>
            </div>

            <MultipleImageUploader images={accommodationData.images} />
          </div>

          <div className="text-left flex flex-col gap-2">
            <h1 className="text-left  text-2xl font-semibold ">Owner</h1>
            <div className="flex gap-2">
              <p>Name:</p>
              <p>{ownerData.name}</p>
            </div>
            <div className="flex gap-2">
              <p>Email:</p>
              <p>{ownerData.email}</p>
            </div>
            <div className="flex gap-2">
              <p>Phone:</p>
              <p>{ownerData.phone}</p>
            </div>
          </div>
        </div>

        <Footer textNext="Submit" textPrev="Prev" handlePrev={handlePrev} />
      </CardStep>
    </form>
  );
};
