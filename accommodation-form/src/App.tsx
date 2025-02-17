import "./App.css";
// import { AccommodationStep } from "./steps/AccommodationSteps";

// import logo from "./assets/react.svg";

// import { useDispatch, useSelector } from "react-redux";
// import { setStep } from "./redux/formSlice";
import { Form } from "./components/Form";

// interface RootState {
//   form: {
//     step: number;
//     accommodationData: object;
//     ownerData: object;
//   };
// }

const App = () => {
  // const dispatch = useDispatch();
  // const step = useSelector((state: RootState) => state.form.step);

  // const nextStep = () => {
  //   if (step < 3) {
  //     dispatch(setStep(step + 1)); // Cambiar al siguiente paso
  //   }
  // };

  // const prevStep = () => {
  //   if (step > 1) {
  //     dispatch(setStep(step - 1)); // Cambiar al paso anterior
  //   }
  // };

  return (
    <>
      {/* <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={logo} alt="ChitChat Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={logo}
          alt=""
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
          </button>
        </div>
      </div> */}

      {/* <div>
        <div>Step: {step}</div>
        <button onClick={prevStep} disabled={step === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={step === 3}>
          Next
        </button>
      </div> */}

      {/* <AccommodationStep /> */}
      <Form />
    </>
  );
};

export default App;
