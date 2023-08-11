import logo from "@/assets/images/classic-logo-02.svg";
import PropTypes from "prop-types";

const BaseLogo = ({ size }) => {
  return <img src={logo} width={`${size}px`} />;
};

export default BaseLogo;

BaseLogo.propTypes = {
  size: PropTypes.node.isRequired,
};
