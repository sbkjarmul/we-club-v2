import { Link } from "react-router-dom";
import BaseButton from "@/presentation/components/shared/BaseButton";
import BaseLogo from "@/presentation/components/shared/BaseLogo";

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center">
      <Link to="/">
        <BaseLogo size={50} />
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
