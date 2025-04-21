import React from 'react';
import "./CSS/ShopCategory.css"
import { useShopContext } from '../contexts/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const {all_product} = useShopContext(); 
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shopcategory-banner' />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 </span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          <p>
            sort by <img src={dropdown_icon} alt="" />
          </p>
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((product,i)=>{
            if(props.category === product.category){
              return <Item 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            }
            return null;
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
