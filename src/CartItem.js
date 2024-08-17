import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
      <div>
        <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      </div>
      <p>${item.price}</p>
    </div>
  );
};

export default CartItem;