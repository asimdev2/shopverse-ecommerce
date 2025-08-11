import React, { createContext, useEffect, useReducer } from "react";
export const MyCartContext = createContext();
function CartProvider({ children }) {
  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...state, action.payload];
      case "REMOVE_FROM_CART":
        return state.filter((item) => item.id !== action.payload);
      case "CHANGE_QUANTITY":
        return state.map((cartProduct) => {
          if (cartProduct.id === action.payload.id) {
            return { ...cartProduct, quantity: action.payload.quantity };
          }
          return cartProduct;
        });
      default:
        return state;
    }
  }

  const init = () => {
    const storedCart = localStorage.getItem("myCart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  let [cart, dispatch] = useReducer(cartReducer, [], init);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
    // console.log("Local Storage Data:", cart);
  }, [cart]);
  return (
    <>
      <MyCartContext.Provider value={{ cart, dispatch }}>
        {children}
      </MyCartContext.Provider>
    </>
  );
}

export default CartProvider;
