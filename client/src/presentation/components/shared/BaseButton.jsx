import PropTypes from "prop-types";

const BaseButton = ({ isOutlined, isBorderless, children, ...props }) => {
  return (
    <button
      className={`
      p-2 uppercase tracking-wide font-thin text-sm bg-cyan-500
      ${isOutlined && "border border-cyan-500 bg-transparent text-cyan-500"}
      ${isBorderless && "bg-transparent border-0 text-cyan-500"}
      ${!isOutlined && !isBorderless && "text-white"}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isOutlined: PropTypes.bool,
  isBorderless: PropTypes.bool,
};

export default BaseButton;
