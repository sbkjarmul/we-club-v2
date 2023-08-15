import PropTypes from "prop-types";
import { useState } from "react";

const BaseInput = ({ className, onEnter, ...props }) => {
  const [value, setValue] = useState("");

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      if (!value) return;

      onEnter(value);
      setValue("");
    }
  };

  return (
    <div className="relative flex flex-col w-100">
      <input
        className={
          className
            ? className
            : "w-full bg-blue-900 py-2 px-3 focus:outline-none"
        }
        onKeyDown={onKeyDownHandler}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      />
    </div>
  );
};

BaseInput.propTypes = {
  onEnter: PropTypes.func,
  className: PropTypes.string,
};

export default BaseInput;
