interface DropDownProp {
  handleChange: (e: React.ChangeEventHandler<HTMLSelectElement>) => void;
  error: string;
  value: string;
}

export const DropDown = ({ handleChange, error, value }: DropDownProp) => {
  return (
    <div className="mb-4 ">
      <label
        htmlFor="countries"
        className="block text-left mb-2  text-sm font-medium text-white dark:text-white"
      >
        Location
      </label>
      <select name="location" className="field" onChange={handleChange}>
        <option selected={value == "Choose a country"}>Choose a country</option>
        <option selected={value == "United States"} value="United States">
          United States
        </option>
        <option selected={value == "Canada"} value="Canada">
          Canada
        </option>
        <option selected={value == "France"} value="France">
          France
        </option>
        <option selected={value == "Germany"} value="Germany">
          Germany
        </option>
      </select>

      <p className="text-red-700 text-left">{error}</p>
    </div>
  );
};
