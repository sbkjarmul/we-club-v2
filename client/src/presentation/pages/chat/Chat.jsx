import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Presentation Layer
import UserChat from "@/presentation/components/chat/UserChat";
import BaseInput from "@/presentation/components/shared/BaseInput";
// Application Layer
import {
  getUserChats,
  getAllUsers,
  createChat,
  setActiveChat,
} from "@/application/features/chat/chat.action";
import { selectUserInfo } from "@/application/features/auth/";
import {
  selectUserChats,
  selectAllUsers,
  selectIsChatLoading,
  selectMessages,
} from "@/application/features/chat/";
import { getMessages } from "../../../application/features/chat/chat.action";

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const userChats = useSelector(selectUserChats);
  const allUsers = useSelector(selectAllUsers);
  const messages = useSelector(selectMessages);
  const isChatsLoading = useSelector(selectIsChatLoading);
  const dispatch = useDispatch();

  const handleCreateChat = (recipientId) => {
    dispatch(createChat({ firstId: userInfo._id, secondId: recipientId }));
  };

  const handleSetActiveChat = (chat) => {
    dispatch(setActiveChat(chat));
    dispatch(getMessages(chat._id));
  };

  useEffect(() => {
    // TODO: create mapper for dtos
    dispatch(getUserChats(userInfo._id));
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 bg-blue-900 opacity-80">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-4xl uppercase">GameBox</h1>
          </div>
        </div>

        <div className="bg-blue-100">
          <div>
            Users:
            <div className="border">
              {allUsers.map((user, index) => (
                <div
                  key={index}
                  className="inline"
                  onClick={() => handleCreateChat(user._id)}
                >
                  <div className="rounded-full border border-teal-500 w-16 inline-flex justify-center">
                    {user.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            Chats:
            <div className="border">
              {isChatsLoading && <div>Loading messages...</div>}
              {userChats.map((chat, index) => (
                <div key={index} onClick={() => handleSetActiveChat(chat)}>
                  <UserChat chat={chat} user={userInfo} />
                </div>
              ))}
            </div>
          </div>

          <div>
            Chatbox
            <div className="border border-black m-1 h-96">
              {messages.map((message, index) => (
                <div key={index} className="bg-green-300 rounded-sm">
                  <div>{message.text}</div>
                  <div>{message.createdAt}</div>
                  <div>{message.senderId}</div>
                </div>
              ))}
            </div>
            <div className="p-1">
              <BaseInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
