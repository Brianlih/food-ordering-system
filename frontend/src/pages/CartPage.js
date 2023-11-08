import CartHeader from "../components/CartHeader";
import { useCartContext } from "../contexts/cart_context";
import SelectedItem from "../components/SelectedItem";
import "../App.css";

const CartPage = () => {
  const { selectedItems } = useCartContext();
  return (
    <div>
      <CartHeader />
      <div className="cart-body">
        <div>
          {selectedItems.map((selectedItem, index) => (
            <SelectedItem key={index} selectedItem={selectedItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
