import BaseInput from "@/presentation/components/shared/BaseInput";

const ChatInput = ({ ...props }) => {
  return (
    <BaseInput
      className="border border-cyan-500 rounded-2xl w-full text-sm antialiased bg-blue-900 text-white py-2 px-3 focus:outline-none"
      {...props}
    />
  );
};

export default ChatInput;
