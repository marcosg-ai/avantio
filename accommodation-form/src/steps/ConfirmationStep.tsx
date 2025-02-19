import { useDispatch, useSelector } from "react-redux";
import { CardStep } from "../components/CardStep";
import { RootState } from "../redux/store";
import { setStep } from "../redux/formSlice";

export const ConfirmationStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <CardStep title={"Accommodation"}>
      <form>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>

      <button onClick={handlePrev} disabled={step === 1}>
        Previous
      </button>
    </CardStep>
  );
};
