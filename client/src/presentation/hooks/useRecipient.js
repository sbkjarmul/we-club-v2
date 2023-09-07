import { useSelector } from "react-redux";
import { selectAllUsers } from "@/application/features/chat";

export const useRecipient = (chat, currentUserId) => {
  const allUsers = useSelector(selectAllUsers);
  const recipientId = chat?.members.find((member) => member !== currentUserId);
  const recipientUser = allUsers.find((user) => user.id === recipientId);

  return { recipientUser };
};
