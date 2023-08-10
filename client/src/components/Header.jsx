import { Link } from "react-router-dom";
import BaseButton from "./BaseButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <Logo size={50} />
      </Link>
      <div>
        <BaseButton isBorderless>
          <Link to="/login">Login</Link>
        </BaseButton>

        <BaseButton isOutlined>
          <Link to="/register">Register</Link>
        </BaseButton>
      </div>
    </header>
  );
};

export default Header;
