import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "../App.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import SelectedItem from "./SelectedItem";
import { useCartContext } from "../contexts/cart_context";
import CartHeader from "./CartHeader";

const Header = ({ restaurantId }) => {
  const { tableId } = useParams();
  const [table, setTable] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [itemCounts, setItemCounts] = useState(0);

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { selectedItems, clearCart } = useCartContext();

  let getRestaurant = async () => {
    let response = await fetch(`/api/users/${restaurantId}/`);
    let data = await response.json();
    setRestaurant(data);
  };

  let getTable = async () => {
    let response = await fetch(`/api/table/${tableId}/`);
    let data = await response.json();
    setTable(data);
  };

  useEffect(() => {
    getRestaurant();
    getTable();
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

  const placeOrder = (selectedItems) => {
    if (selectedItems.length > 0) {
      const csrfToken = getCookie("csrftoken");

      const itemsArray = selectedItems.map((selectedItem) => ({
        item: selectedItem.itemObject.id,
        quantity: selectedItem.quantity,
      }));

      fetch(`/api/${restaurantId}/place_order/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ items: itemsArray, table: table }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Order placed successfully:", data);
        })
        .catch((error) => {
          console.error("Error placing order:", error);
        });
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  return (
    <div className="header-container">
      <div className="header-cart">
        <CartIcon onClick={() => openCartModal()} />
        <p className="item-count-in-cart">{itemCounts}</p>
      </div>
      <h1 className="header-name">{restaurant.name}</h1>
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
                placeOrder(selectedItems);
                clearCart();
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
