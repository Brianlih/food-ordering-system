import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const Header = ({ restaurantId }) => {
  let [restaurant, setRestaurant] = useState("");

  let getRestaurant = async () => {
    let response = await fetch(`/api/users/${restaurantId}/`);
    let data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon />
      </div>
      <h1 className="header-name">{restaurant.username}</h1>
      <Link to={`/${restaurant.id}/about`} className="header-about">
        About
      </Link>
    </div>
  );
};

export default Header;
