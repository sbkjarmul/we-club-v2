import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseButton from "@/presentation/components/shared/BaseButton";
import BaseLogo from "@/presentation/components/shared/BaseLogo";
import content from "@/presentation/assets/content.json";
const headerContent = content.components.header;

const Header = ({ isLoggedIn }) => {
  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
      </Link>

      <div>
        <BaseButton isBorderless>
          <Link to="/login">
            {isLoggedIn ? headerContent.logout : headerContent.login}
          </Link>
        </BaseButton>

        <BaseButton isOutlined>
          <Link to="/register">{headerContent.register}</Link>
        </BaseButton>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
