import PropTypes from "prop-types";
import content from "@/presentation/assets/content.json";

const errorContent = content.errors;

const BaseInput = ({
  register,
  error = {},
  name,
  label,
  placeholder,
  value,
}) => {
  return (
    <div className="mb-10 relative flex flex-col w-100">
      <label htmlFor={name} className="text-white text-sm mb-2 ">
        {label}
      </label>

      <input
        {...register(name, { required: true })}
        value={value}
        placeholder={placeholder}
        className="w-full bg-blue-900 py-2 px-3 focus:outline-none"
      />

      {error.type === "required" && (
        <span className="absolute -bottom-5 right-0 text-xs text-red-500">
          {errorContent.required}
        </span>
      )}
    </div>
  );
};

BaseInput.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default BaseInput;
