import { createContext, useState } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setcartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
    console.log(itemId);
  };
  const removeFromCart = (itemId) => {
    setcartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (let productId in cartItems) {
      if (cartItems[productId] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(productId)
        );
        total += itemInfo.new_price * cartItems[productId];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (let productId in cartItems) {
      if (cartItems[productId] > 0) {
        totalItems += cartItems[productId];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
