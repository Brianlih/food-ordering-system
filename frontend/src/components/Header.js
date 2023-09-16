import React from "react";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon />
      </div>
      <h1 className="header-name">H cafe</h1>
      <div className="header-menu">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
