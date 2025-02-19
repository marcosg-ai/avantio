import { CardStep } from "../components/CardStep";

export const ConfirmationStep = () => {
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
    </CardStep>
  );
};
