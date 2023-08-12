import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Chat from "@/presentation/pages/chat/Chat";
import Login from "@/presentation/pages/auth/Login";
import Register from "@/presentation/pages/auth/Register";
import Header from "@/presentation/components/blocks/Header";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="h-full grid grid-rows-[75px_auto]">
      <Header isLoggedIn={isLoggedIn} />
      <div className="p-4 row-span-5">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
