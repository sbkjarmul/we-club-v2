import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ button, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="flex relative w-fit">
        <div className="flex" onClick={handleIconClick}>
          {button}
        </div>

        {isOpen && (
          <div className="absolute z-50 inset-y-full -inset-x-full backdrop-blur-md shadow-lg border border-cyan-950 w-fit h-fit flex justify-center mt-2">
            {dropdown}
          </div>
        )}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  button: PropTypes.node.isRequired,
  dropdown: PropTypes.node.isRequired,
};

export default Dropdown;
