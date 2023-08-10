import logo from "../assets/classic-logo-02.svg";
import PropTypes from "prop-types";

const Logo = ({ size }) => {
  return <img src={logo} width={`${size}px`} />;
};

export default Logo;

Logo.propTypes = {
  size: PropTypes.node.isRequired,
};
