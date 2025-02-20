export const DropDown = ({ handleChange }) => {
  return (
    <div className="mb-4 ">
      <label
        htmlFor="countries"
        className="block text-left mb-2  text-sm font-medium text-white dark:text-white"
      >
        Location
      </label>
      <select
        name="location"
        id="countries"
        className="field"
        onChange={handleChange}
      >
        <option selected>Choose a country</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
      </select>
    </div>
  );
};
