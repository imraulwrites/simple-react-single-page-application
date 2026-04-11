import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Stats from './components/sections/Stats';
import NewCustomer from './components/sections/NewCustomer';
import PricingContainer from './components/sections/PricingContainer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    if (cart.find(item => item.id === product.id)) {
      return null;
    } else {
      setCart(current => [...current, product]);
    }
  };

  const removeFromCart = product => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
  };

  const totalCartPrice = () => {
    const total = cart.reduce((initial, item) => Number(item.price) + initial, 0);
    return total;
  };

  return (
    <section className="">
      <Navbar cart={cart} />
      <Hero />
      <Stats />
      <NewCustomer />
      <Products
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        totalCartPrice={totalCartPrice}
      />
      <PricingContainer />

      <Footer />
    </section>
  );
}
export default App;
