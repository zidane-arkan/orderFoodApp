import React, {useState} from 'react';
// import Main from './components/Layout/Main';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartClick, setIsCartClick] = useState(false);
  const changeCartHandler = (statusCart) => { 
    setIsCartClick(statusCart);
  };
  return (
    <CartProvider>
      {isCartClick ? <Cart changeCartHandler={changeCartHandler} /> : ""}
      <Header changeCartHandler={changeCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
