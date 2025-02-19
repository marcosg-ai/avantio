export const DropDown = ({ handleChange }) => {
  return (
    <div className="mb-4 ">
      <label
        htmlFor="countries"
        className="block text-left mb-2  text-sm font-medium text-white dark:text-white"
      >
        Location
      </label>
      <select id="countries" className="field" onChange={handleChange}>
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};
