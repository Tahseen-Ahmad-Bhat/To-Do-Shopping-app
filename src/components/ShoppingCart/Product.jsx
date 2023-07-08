import React from "react";
import "./Product.css";

// Product component
const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
