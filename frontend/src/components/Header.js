import { Link } from "react-router-dom";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon />
      </div>
      <h1 className="header-name">續日</h1>
      <Link to={"/menu"} className="header-menu">
        <MenuIcon />
      </Link>
    </div>
  );
};

export default Header;
