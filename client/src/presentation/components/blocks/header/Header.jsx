import { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseLogo from "@/presentation/components/shared/BaseLogo";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
import { logoutUser } from "../../../../application/features/auth/auth.action";
import HeaderUserInfo from "./HeaderUserInfo";

const headerContent = content.components.header;

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
      </Link>

      {userInfo && <HeaderUserInfo userInfo={userInfo} logout={handleLogout} />}

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
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.object,
};

export default Header;
