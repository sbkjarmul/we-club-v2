import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseLogo from "@/presentation/components/shared/BaseLogo";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
import { logoutUser } from "../../../../application/features/auth/auth.action";
import HeaderUserInfo from "./HeaderUserInfo";
import Dropdown from "@/presentation/components/shared/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ChatItemList from "@/presentation/components/chat/ChatItemList";

import {
  setActiveChat,
  getMessages,
} from "@/application/features/chat/chat.action";

import {
  selectUserChats,
  selectIsChatLoading,
  selectOnlineUsers,
} from "@/application/features/chat";

const headerContent = content.components.header;

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();

  // Chat feature
  const userChats = useSelector(selectUserChats);
  const isChatsLoading = useSelector(selectIsChatLoading);
  const onlineUsers = useSelector(selectOnlineUsers);
  const isUserOnline = (userId) =>
    onlineUsers && onlineUsers.some((user) => user.id === userId);

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const openChat = (chat) => {
    dispatch(setActiveChat(chat));
    dispatch(getMessages(chat.id));
  };

  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
      </Link>

      {userInfo && (
        <div className="flex">
          <Dropdown
            button={
              <BaseButton isBorderless className="mx-8">
                <FontAwesomeIcon icon={faComment} size="xl" />
              </BaseButton>
            }
            dropdown={
              <div className="p-3">
                <ChatItemList
                  currentUserId={userInfo.id}
                  chats={userChats}
                  isUserOnline={isUserOnline}
                  isChatsLoading={isChatsLoading}
                  openChat={openChat}
                />
              </div>
            }
          />

          <HeaderUserInfo userInfo={userInfo} logout={handleLogout} />
        </div>
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
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.object,
};

export default Header;
