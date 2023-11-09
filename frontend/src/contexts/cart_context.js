import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (itemObject, quantity) => {
    const itemIndex = selectedItems.findIndex(
      (item) => item.itemObject.id === itemObject.id
    );

    if (itemIndex !== -1) {
      const updatedItems = selectedItems.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });

      setSelectedItems(updatedItems);
    } else {
      setSelectedItems((prevItems) => [...prevItems, { itemObject, quantity }]);
    }
  };

  const updateCartItemQuantity = (selectedItem, newQuantity) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.itemObject === selectedItem.itemObject
          ? { itemObject: selectedItem.itemObject, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (selectedItem) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.itemObject !== selectedItem.itemObject)
    );
  };

  const clearCart = () => {
    setSelectedItems([]);
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
        clearCart,
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
