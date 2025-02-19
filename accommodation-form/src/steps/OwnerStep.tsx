import { useDispatch } from "react-redux";
import { CardStep } from "../components/CardStep";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setStep } from "../redux/formSlice";

export const OwnerStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);

  const handleNext = () => {
    dispatch(setStep(step + 1));
  };
  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <CardStep title={"Owner"}>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // required
          />
        </div>

        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input mt-1 block w-full"
        />
      </form>

      <div className="flex w-full items-center justify-center ">
        <div className=" flex  justify-between w-3/4">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </CardStep>
  );
};
