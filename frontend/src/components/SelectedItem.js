import { useState } from "react";
import { useCartContext } from "../contexts/cart_context";

const SelectedItem = ({ selectedItem }) => {
  const [quantity, setQuantity] = useState(selectedItem.quantity);
  const { updateCartItemQuantity, removeFromCart } = useCartContext();
  return (
    <div className="selectedItems-wrapper">
      <span>{selectedItem.itemObject.name}</span>
      <div className="selectedItem-quantity">
        <button
          type="button"
          onClick={() => {
            if (quantity > 1) {
              updateCartItemQuantity(selectedItem, quantity - 1);
              setQuantity(quantity - 1);
            } else {
              removeFromCart(selectedItem);
            }
          }}
          className={"selectedItem-quantity-button"}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          onChange={() => setQuantity(quantity)}
          className="selectedItem-quantity-inputbox"
        />
        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          className="selectedItem-quantity-button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SelectedItem;
