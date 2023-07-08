import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "./ShoppingCart.css";
import { useNotificationContext } from "../../util/customHooks";

// Product data
const productsData = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
  { id: 4, name: "Product 4", price: 25 },
];

// Shopping Cart component
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(cartItems.length);
  const [totalAmount, setTotalAmount] = useState(0);

  const { updateNotification } = useNotificationContext();

  // Function for calculating total amount
  const calculateTotalAmount = (operation = "", cartItems = []) => {
    let amount = 0;
    cartItems.forEach((item) => {
      if (operation === "add") amount = amount + item.price;
      else amount = amount - item.price;
    });

    return amount;
  };

  // Add item to cart
  const addToCart = (productId) => {
    const product = productsData.find((item) => item.id === productId);

    setTotalAmount(calculateTotalAmount("add", [...cartItems, product]));
    setCartItems([...cartItems, product]);
    setCartItemCount(cartItemCount + 1);

    updateNotification("Product added successfully!");
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);

    setTotalAmount(calculateTotalAmount("add", updatedCart));
    setCartItems(updatedCart);
    setCartItemCount(cartItemCount - 1);

    updateNotification("Product removed successfully!");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cartItems">
        <p>
          Number of Items in cart: <span>{cartItemCount}</span>
        </p>
        <p>
          Total amount: <span>{totalAmount}</span>
        </p>
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ShoppingCart;
