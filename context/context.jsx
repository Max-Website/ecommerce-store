import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useProvideStoreState() {
  //landing page data
  const [homepage, setHomePage] = useState({});

  //product data
  const [rings, setRings] = useState();
  const [bracelets, setBracelets] = useState();
  const [necklaces, setNecklaces] = useState();

  //cart data
  const initialCartState = {
    items: [],
    total: 0,
  };

  const [cart, setCart] = useState(initialCartState);

  const updateRingState = () => {
    //TODO: assign rign state
  };

  const updateNecklaceState = () => {
    //TODO: assign necklace data
  };

  const updateBraceletState = () => {
    //TODO: assign Necklace data
  };

  const addToCart = (item) => {
    //TODO: addItems to Cart
  };

  const removeFromCart = (item) => {
    //TODO: remove item from cart
  };

  const buyItemsInCart = () => {
    //TODO: buy functionality
  };

  return {
    homepage,
    setHomePage,
    rings,
    setRings,
    necklaces,
    setNecklaces,
    bracelets,
    setBracelets,
  };
}

export function useStoreState() {
  return useContext(AppContext);
}
