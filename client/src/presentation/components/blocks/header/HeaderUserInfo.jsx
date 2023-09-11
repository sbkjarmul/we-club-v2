import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
import PropTypes from "prop-types";
import BaseAvatar from "../../shared/BaseAvatar";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const headerContent = content.components.header;

const HeaderUserInfo = ({ userInfo, logout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <div className="flex relative w-fit">
      <BaseAvatar />
      <div className="flex flex-col justify-center ml-2">
        <span className="text-white">{userInfo?.name}</span>
        <span className="text-cyan-500 text-sm">{userInfo?.email}</span>
      </div>
      <BaseButton isBorderless onClick={handleIconClick}>
        <FontAwesomeIcon icon={faChevronDown} className="text-cyan-500 px-2" />
      </BaseButton>

      {showDropdown && (
        <div className="absolute inset-y-full backdrop-blur-md shadow-lg border border-cyan-950 w-full h-fit flex justify-center mt-2">
          <BaseButton isBorderless onClick={logout}>
            {headerContent.logout}
          </BaseButton>
        </div>
      )}
    </div>
  );
};

HeaderUserInfo.propTypes = {
  userInfo: PropTypes.object,
  logout: PropTypes.func,
};

export default HeaderUserInfo;
