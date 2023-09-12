import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectUserInfo, logoutUser } from "@/application/features/auth";
import { selectOnlineUsers } from "@/application/features/chat";

export const useUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserInfo);
  const onlineUsers = useSelector(selectOnlineUsers);

  const isUserOnline = (userId) =>
    onlineUsers && onlineUsers.some((user) => user.id === userId);

  const logout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return { isUserOnline, logout, currentUser };
};
