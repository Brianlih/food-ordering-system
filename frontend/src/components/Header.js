import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const Header = ({ restaurantId }) => {
  let [restaurant, setRestaurant] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [selectedRest, setSelectedRest] = useState("");

  let getRestaurant = async () => {
    let response = await fetch(`/api/users/${restaurantId}/`);
    let data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  const openModal = (restaurant) => {
    setIsModalOpen(true);
    setSelectedRest(restaurant);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon />
      </div>
      <h1 className="header-name">{restaurant.username}</h1>
      <button onClick={() => openModal(restaurant)} className="header-about">
        About
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="About Modal"
        className="about-modal"
        overlayClassName="overlay"
      >
        <div className="about">{selectedRest.description}</div>
      </Modal>
    </div>
  );
};

export default Header;
