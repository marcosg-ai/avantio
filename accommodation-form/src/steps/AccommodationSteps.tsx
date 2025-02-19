import { CardStep } from "../components/CardStep";
import { DropDown } from "../components/DropDown";

export const AccommodationStep = () => {
  return (
    <CardStep title={"Accommodation"}>
      <form>
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            className="w-full px-4 py-2 border field"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="C/"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Explain us a bit more about your home"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <DropDown />
      </form>
    </CardStep>
  );
};
