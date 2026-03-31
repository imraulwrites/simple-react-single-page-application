import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Stats from './components/sections/Stats';

function App() {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <Stats />
      <Products />

      <Footer />
    </section>
  );
}
export default App;
