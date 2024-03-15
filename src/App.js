import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {

  const doesExist = cartItems.find((cartItem) => cartItem.item === item);

  if (doesExist) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.item === item
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );

  } else {

    setCartItems([...cartItems, { item: item, quantity: 1 }]);

  }

    setTotal(parseFloat((total + item.price).toFixed(2)));

  };


  return (
    <div className="App">
      <h1>Blueno's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="content">
      <div className="item-container">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem 
            image={item.image} 
            name = {item.name} 
            description = {item.description} 
            price = {item.price}
            pastry = {item}
            addToCart = {addToCart}
            />
        ))}
      </div>

      <div className="Cart">
        <h2>My Cart</h2>
        <ul>
            {cartItems.map((cartItem, index) => (
               <li>
               {cartItem.quantity}x - {cartItem.item.name}
             </li>
            ))}
        </ul>
        <h3>Total: {total}</h3>
      </div>
      </div>
    </div>
  );
}

export default App;
