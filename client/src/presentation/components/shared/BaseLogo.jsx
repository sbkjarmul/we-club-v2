import logo from "@/presentation/assets/images/classic-logo-02.svg";
import PropTypes from "prop-types";

const BaseLogo = ({ size }) => {
  return <img src={logo} width={`${size}px`} />;
};

BaseLogo.propTypes = {
  size: PropTypes.node.isRequired,
};

export default BaseLogo;
