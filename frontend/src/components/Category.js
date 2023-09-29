import { useState, useEffect } from "react";
import Modal from "react-modal";
import ListItem from "../components/ListItem";
import coffeeImage from "../assets/coffee.jpeg";
import "../App.css";

const Category = ({ cat }) => {
  let [items, setItems] = useState([]);
  let [selectedItem, setSelectedItem] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let getItems = async () => {
    let response = await fetch(`/api/${cat.id}/items/`);
    let data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div id={`category-${cat.id}`}>
        <p className="category-title">{cat.name}</p>
        <div className="items-wrapper">
          {items.map((item, index) => (
            <ListItem key={index} item={item} onClick={() => openModal(item)} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Item Modal"
        className="ordering-modal"
        overlayClassName="overlay"
      >
        <div className="item-ordering-container">
          <div className="item-ordering-img-container">
            <img
              src={selectedItem.image ? selectedItem.image : coffeeImage}
              className="item-ordering-img"
              alt=""
            />
          </div>
          <div className="item-ordering-name-price">
            <p className="item-ordering-name">{selectedItem.name}</p>
            <p className="item-ordering-price">{selectedItem.price}</p>
          </div>
          <div className="item-ordering-description">
            <p>{selectedItem.description}</p>
          </div>
          <div className="item-quantity-container">
            <span>數量</span>
            <div className="item-quantity">
              <button
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                className={
                  quantity == 1
                    ? "item-quantity-button is-disabled"
                    : "item-quantity-button"
                }
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={() => setQuantity(quantity)}
                className="item-quantity-inputbox"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="item-quantity-button"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            className="add-to-cart-button"
            onClick={closeModal}
          >
            加入購物車
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Category;
