import React, { createContext, useContext, useState } from "react";
import all_product_data from "../Components/Assets/all_product";

const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart = {}
    for(let index=0; index<all_product_data.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        console.log(cartItems);

    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
        
    }



    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product_data.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
   


    const getTotalCartItems =()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product: all_product_data, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (<ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>)
}

export const useShopContext = () =>{
    return useContext(ShopContext);
}

export default ShopContextProvider;