import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Presentation Layer
import ChatBox from "@/presentation/components/chat/ChatBox";
import ChatUsersList from "@/presentation/components/chat/ChatUsersList";
import ChatItemList from "@/presentation/components/chat/ChatItemList";
import BaseTile from "@/presentation/components/shared/BaseTile";
import GameCanvas from "@/presentation/components/game/GameCanvas";
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
} from "@/application/features/chat";

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const userChats = useSelector(selectUserChats);
  const otherUsers = useSelector(selectOtherUsers);
  const messages = useSelector(selectMessages);
  const activeChat = useSelector(selectActiveChat);
  const isChatsLoading = useSelector(selectIsChatLoading);
  const onlineUsers = useSelector(selectOnlineUsers);
  const dispatch = useDispatch();

  console.log("Chat render");

  useEffect(() => {
    dispatch(getUserChats(userInfo.id));
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    dispatch(connectSocket(userInfo.id));

    return () => {
      dispatch(disconnectSocket());
    };
  }, []);

  const isUserOnline = (userId) =>
    onlineUsers && onlineUsers.some((user) => user.id === userId);

  const isChatExists = (recipientId) =>
    userChats && userChats.some((chat) => chat.members.includes(recipientId));

  const handleCreateChat = (recipientId) => {
    if (isChatExists(recipientId)) return;
    dispatch(createChat({ firstId: userInfo.id, secondId: recipientId }));
  };

  const openChat = (chat) => {
    dispatch(setActiveChat(chat));
    dispatch(getMessages(chat.id));
  };

  const closeChat = () => {
    dispatch(setActiveChat(null));
  };

  const handleSendMessage = (text, recipientId) => {
    const message = {
      chatId: activeChat.id,
      senderId: userInfo.id,
      to: recipientId,
      text,
    };

    dispatch(sendMessage(message));
  };

  return (
    <>
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 bg-blue-900">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl uppercase">GameBox</h1>
            <GameCanvas />
          </div>
        </div>

        <div className="bg-blue-950 grid grid-rows-[150px_1fr_auto] gap-y-3 p-3">
          <BaseTile
            header="Friends online:"
            body={
              <ChatUsersList
                users={otherUsers}
                createChat={handleCreateChat}
                isUserOnline={isUserOnline}
              />
            }
          />

          <BaseTile
            header="Chats:"
            body={
              <ChatItemList
                currentUserId={userInfo.id}
                chats={userChats}
                isUserOnline={isUserOnline}
                isChatsLoading={isChatsLoading}
                openChat={openChat}
              />
            }
          />

          <div className="p-3 bg-blue-900 rounded-lg">
            <ChatBox
              messages={messages}
              currentUserId={userInfo.id}
              chat={activeChat}
              sendMessage={handleSendMessage}
              closeChat={closeChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
