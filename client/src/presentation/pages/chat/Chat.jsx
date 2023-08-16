import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Presentation Layer
import ChatItem from "@/presentation/components/chat/ChatItem";
import ChatBox from "@/presentation/components/chat/ChatBox";
import ChatUsersList from "@/presentation/components/chat/ChatUsersList";
// Application Layer
import {
  getUserChats,
  getAllUsers,
  createChat,
  setActiveChat,
  getMessages,
  sendMessage,
  connectSocket,
  disconnectSocket,
} from "@/application/features/chat/chat.action";
import { selectUserInfo } from "@/application/features/auth/";
import {
  selectUserChats,
  selectOtherUsers,
  selectIsChatLoading,
  selectMessages,
  selectActiveChat,
  selectOnlineUsers,
} from "@/application/features/chat/";

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const userChats = useSelector(selectUserChats);
  const otherUsers = useSelector(selectOtherUsers);
  const messages = useSelector(selectMessages);
  const activeChat = useSelector(selectActiveChat);
  const isChatsLoading = useSelector(selectIsChatLoading);
  const onlineUsers = useSelector(selectOnlineUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: create mapper for dtos
    dispatch(getUserChats(userInfo._id));
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    dispatch(connectSocket());

    return () => {
      dispatch(disconnectSocket());
    };
  }, []);

  const isUserOnline = (userId) => {
    return onlineUsers && onlineUsers.some((user) => user.id === userId);
  };

  const handleCreateChat = (recipientId) => {
    dispatch(createChat({ firstId: userInfo._id, secondId: recipientId }));
  };

  const handleSetActiveChat = (chat) => {
    dispatch(setActiveChat(chat));
    dispatch(getMessages(chat._id));
  };

  const handleSendMessage = (text) => {
    const message = {
      chatId: activeChat._id,
      senderId: userInfo._id,
      text,
    };

    dispatch(sendMessage(message));
  };

  return (
    <>
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 bg-blue-900 opacity-80">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-4xl uppercase">GameBox</h1>
          </div>
        </div>

        <div className="bg-blue-950 grid grid-rows-[100px_1fr_auto]">
          <div>
            Users:
            <ChatUsersList
              users={otherUsers}
              createChat={handleCreateChat}
              isUserOnline={isUserOnline}
            />
          </div>

          <div>
            Chats:
            <div>
              {isChatsLoading && <div>Loading messages...</div>}
              {userChats.map((chat, index) => (
                <div key={index} onClick={() => handleSetActiveChat(chat)}>
                  <ChatItem chat={chat} user={userInfo} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <ChatBox
              messages={messages}
              user={userInfo}
              chat={activeChat}
              sendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
