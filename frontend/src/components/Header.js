import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Menu from "../pages/Menu";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon />
      </div>
      <h1 className="header-name">H cafe</h1>
      <Link to={"/menu"} className="header-menu">
        <MenuIcon />
      </Link>
    </div>
  );
};

export default Header;
