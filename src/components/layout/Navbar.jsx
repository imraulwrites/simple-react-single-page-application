import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DigiTools from '../../assets/digitools.png';
import { useState } from 'react';

const menus = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border border-[#f2f2f2] sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="wrapper flex items-center justify-between py-4">
        {/* Logo Start */}
        <div className="my-5">
          <img src={DigiTools} alt="logo" />
        </div>

        {/* Menu Start */}
        <div className="hidden md:flex">
          <ul className="flex gap-8 text-heading-dark font-semibold">
            {menus.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
        {/* End Menu */}

        {/* Cart, Login, Get Started Button */}
        <div className="flex justify-center items-center gap-4">
          <div className="text-heading-dark flex items-center relative pr-8 md:pr-2">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cart.length > 0 && (
              <p className="bg-red-500 text-white rounded-full text-xs font-bold absolute left-6 -top-3 md:left-6 md:-top-2 px-1.5 py-0.5">
                {cart.length}
              </p>
            )}
          </div>
          <div className="text-heading-dark text-base font-semibold hidden md:block">
            <button>Login</button>
          </div>
          <div className="hidden md:block">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
        {/* End Login */}

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(current => !current)}
          className="md:hidden flex flex-col gap-1 absolute top-11 right-2 z-50"
        >
          <span
            className={`block h-1 w-6 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-black transition-all  ${menuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 md:hidden bg-white/80 backdrop-blur-2xl w-full z-10">
            <ul className="flex flex-col justify-center items-center gap-5 py-5 text-heading-dark font-semibold">
              {menus.map((item, id) => (
                <li className="hover:underline " key={id}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
