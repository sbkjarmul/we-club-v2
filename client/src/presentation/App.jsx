import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "@/presentation/pages/chat/Chat";
import Login from "@/presentation/pages/auth/Login";
import Register from "@/presentation/pages/auth/Register";
import Header from "@/presentation/components/blocks/header";
import BaseLoader from "@/presentation/components/shared/BaseLoader";
import Main from "./pages/main/Main";

function App() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <div className="h-full grid grid-rows-[75px_auto]">
      <Header userInfo={userInfo} />
      <div className="p-4 row-span-5">
        <Routes>
          <Route
            path="/"
            element={userInfo ? <Chat /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!userInfo ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <BaseLoader isShowed={isLoading} />
    </div>
  );
}

export default App;
