import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ id, image, name, new_price, old_price }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img 
        onClick={window.scrollTo(0,0) }
          src={image} 
          alt={`${name} product image`}
          width="350"
          height="350"
          loading="lazy"
        />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {formatPrice(new_price)}
        </div>
        <div className="item-price-old">
          {formatPrice(old_price)}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired
};

export default Item;
