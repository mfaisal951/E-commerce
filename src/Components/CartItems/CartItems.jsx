import React from 'react';
import './CartItems.css';
import { useShopContext } from '../../contexts/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useShopContext();
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
      <p>Product</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return(
                <div>
        <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} alt="" className='cartitems-remove-icon' onClick={()=>removeFromCart(e.id)} />
        </div>
        <hr />
      </div>
      
            )}
            return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                
            </div>
            <button> PROCCED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promocode, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default CartItems;
