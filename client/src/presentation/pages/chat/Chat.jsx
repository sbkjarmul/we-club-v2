import { useEffect } from "react";
// Presentation Layer
import UserChat from "@/presentation/components/chat/UserChat";
// Application Layer
import { useDispatch, useSelector } from "react-redux";
// Application Layer
import {
  getUserChats,
  getAllUsers,
  createChat,
} from "@/application/features/chat/chat.action";
import { selectUserInfo } from "@/application/features/auth/";
import {
  selectUserChats,
  selectAllUsers,
  selectIsChatLoading,
} from "@/application/features/chat/";
// Presentation Layer
import BaseInput from "@/presentation/components/shared/BaseInput";

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const userChats = useSelector(selectUserChats);
  const allUsers = useSelector(selectAllUsers);
  const isChatsLoading = useSelector(selectIsChatLoading);
  const dispatch = useDispatch();

  const handleCreateChat = (recipientId) => {
    console.log("create chat");
    console.log("CURRENT USER ID", userInfo._id);
    console.log("RECIPIENT ID", recipientId);
    const userId = userInfo._id;
    dispatch(createChat({ firstId: userId, secondId: recipientId }));
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
                <div key={index}>
                  <UserChat chat={chat} user={userInfo} />
                </div>
              ))}
            </div>
          </div>

          <div>
            MessagexBox
            <div className="border border-black m-1 h-96"></div>
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
