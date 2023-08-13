import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BaseButton from "@/presentation/components/shared/BaseButton";
import BaseLogo from "@/presentation/components/shared/BaseLogo";
import content from "@/presentation/assets/content.json";
import { logoutUser } from "../../../application/features/auth/auth.action";

const headerContent = content.components.header;

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
      </Link>

      <>
        {userInfo && (
          <BaseButton isBorderless onClick={handleLogout}>
            {headerContent.logout}
          </BaseButton>
        )}

        {!userInfo && (
          <div>
            <BaseButton isBorderless>
              <Link to="/login">{headerContent.login}</Link>
            </BaseButton>

            <BaseButton isOutlined>
              <Link to="/register">{headerContent.register}</Link>
            </BaseButton>
          </div>
        )}
      </>
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.object,
};

export default Header;
