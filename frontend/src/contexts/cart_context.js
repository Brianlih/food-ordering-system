import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const addToCart = (itemObject, quantity) => {
    setSelectedItems((prevState) => [...prevState, { itemObject, quantity }]);
  };

  const updateCartItemQuantity = (selectedItem, newQuantity) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.itemObject.name === selectedItem.itemObject.name
          ? { itemObject: selectedItem.itemObject, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (selectedItem) => {
    setSelectedItems((prevItems) =>
      prevItems.filter(
        (item) => item.itemObject.name !== selectedItem.itemObject.name
      )
    );
  };
  /* children means the all sub-components wrapped in CartContext.Provider,
    and this kind of components can access the data (which are
    in the value field) provided by CartContext.Provider. So basically,
    CartContext.Provider just a data provider. */
  return (
    <CartContext.Provider
      value={{
        selectedItems,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
