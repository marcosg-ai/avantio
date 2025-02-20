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

            {Object.keys(accommodationData).map((field, key) => (
              <>
                <div key={key} className="flex gap-2">
                  <p className="font-semibold">
                    {String(field).charAt(0).toUpperCase() +
                      String(field).slice(1)}
                    :
                  </p>
                  <p>{accommodationData[field]}</p>
                </div>
              </>
            ))}

            <MultipleImageUploader images={accommodationData.images} />
          </div>

          <div className="text-left flex flex-col gap-2">
            <h1 className="text-left  text-2xl font-semibold ">Owner</h1>
            {Object.keys(ownerData).map((field, key) => (
              <>
                <div key={key} className="flex gap-2">
                  <p className="font-semibold">
                    {String(field).charAt(0).toUpperCase() +
                      String(field).slice(1)}
                    :
                  </p>
                  <p>{ownerData[field]}</p>
                </div>
              </>
            ))}
          </div>
        </div>

        <Footer textNext="Submit" textPrev="Prev" handlePrev={handlePrev} />
      </CardStep>
    </form>
  );
};
