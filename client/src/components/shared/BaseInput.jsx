import PropTypes from "prop-types";

const BaseInput = ({ register, errors, name, label, placeholder }) => {
  return (
    <div className="mb-10 relative flex flex-col w-100">
      <label htmlFor={name} className="text-white text-sm mb-2 ">
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        placeholder={placeholder}
        className="w-full bg-cyan-900 py-2 px-3 focus:outline-none "
      />
      {errors.name && (
        <span className="absolute -bottom-5 right-0 text-xs text-red-500">
          This field is required
        </span>
      )}
    </div>
  );
};

BaseInput.propTypes = {
  register: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default BaseInput;
