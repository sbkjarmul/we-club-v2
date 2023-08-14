import { useState, useEffect } from "react";
import { userApi } from "@/infrastructure/api";

export const useFetchRecipient = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members.find((member) => member !== user._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return;

      try {
        const response = await userApi.findUser(recipientId);
        if (response.status === 200) {
          setRecipientUser(response.data);
        }
      } catch (error) {
        setError(error);
      }
    };

    getUser();
  }, [recipientId]);

  return { recipientUser, error };
};
