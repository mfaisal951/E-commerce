import React, { createContext, useContext } from "react";
import all_product_data from "../Components/Assets/all_product";

const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{
    const contextValue = {all_product: all_product_data};
    
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}

export const useShopContext = () =>{
    return useContext(ShopContext);
}

export default ShopContextProvider;