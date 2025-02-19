export const DropDown = ({ handleChange }) => {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Select an option
        </label>
        <select id="countries" className="field" onChange={handleChange}>
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
    </>
  );
};
