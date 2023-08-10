import PropTypes from "prop-types";

const BaseButton = ({ isOutlined, isBorderless, children }) => {
  return (
    <button
      className={`
      p-2 ml-4 uppercase tracking-wide font-thin text-sm bg-teal-500 text-white
      ${isOutlined ? "border border-teal-500 bg-transparent text-teal-500" : ""}
      ${isBorderless ? "bg-transparent border-0 text-teal-500" : ""}
      `}
    >
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  isOutlined: PropTypes.bool,
  isBorderless: PropTypes.bool,
};

export default BaseButton;
