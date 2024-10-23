import React, { createContext } from "react";
import AllProduct from "../Component/Assets/Allproduct.js";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { AllProduct }; // Use a different variable name
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
