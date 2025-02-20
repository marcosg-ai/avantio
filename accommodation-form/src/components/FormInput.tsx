interface FormInputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required: boolean;
  wide?: boolean;
}

export const FormInput = ({
  type,
  id,
  name,
  value,
  handleChange,
  required,
  wide,
}: FormInputProps) => {
  return (
    <div className="mb-4 ">
      <label
        htmlFor="name"
        className="block text-left text-sm font-medium text-white"
      >
        {String(name).charAt(0).toUpperCase() + String(name).slice(1)}
      </label>

      {!wide ? (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-2 border field"
          required={required}
        />
      ) : (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Explain us a bit more about your home"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required={required}
        />
      )}
    </div>
  );
};
