import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import SelectedItem from "./SelectedItem";
import { useCartContext } from "../contexts/cart_context";
import CartHeader from "./CartHeader";

const Header = ({ restaurantId }) => {
  const [restaurant, setRestaurant] = useState("");
  const [itemCounts, setItemCounts] = useState(0);

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { selectedItems } = useCartContext();

  let getRestaurant = async () => {
    let response = await fetch(`/api/users/${restaurantId}/`);
    let data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    let counts = 0;
    selectedItems.map((selectedItem) => {
      counts += selectedItem.quantity;
    });

    setItemCounts(counts);
  }, [selectedItems]);

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };
  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon onClick={() => openCartModal()} />
        <p className="item-count-in-cart">{itemCounts}</p>
      </div>
      <h1 className="header-name">{restaurant.username}</h1>
      <button onClick={() => openAboutModal()} className="header-about">
        About
      </button>

      <Modal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        contentLabel="Cart Modal"
        className="cart-modal"
        overlayClassName="overlay"
      >
        <div>
          <CartHeader />
          <div className="cart-body">
            <div>
              {selectedItems.map((selectedItem, index) => (
                <SelectedItem key={index} selectedItem={selectedItem} />
              ))}
            </div>
          </div>
          {selectedItems.length > 0 && (
            <button
              type="button"
              className="place-order-button"
              onClick={() => {
                closeCartModal();
              }}
            >
              Place order
            </button>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={isAboutModalOpen}
        onRequestClose={closeAboutModal}
        contentLabel="About Modal"
        className="about-modal"
        overlayClassName="overlay"
      >
        <div className="about">{restaurant.description}</div>
      </Modal>
    </div>
  );
};

export default Header;
