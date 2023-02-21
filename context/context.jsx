import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function ContextWrapper({ children }) {
  let sharedState = {
    rings: [],
    bracelets: [],
    necklaces: [],
    cart: {
      items: [],
      total: 0,
    },
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
