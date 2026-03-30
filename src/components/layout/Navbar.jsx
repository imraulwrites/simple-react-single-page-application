import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DigiTools from '../../assets/digitools.png';

const menus = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

function Navbar() {
  return (
    <header className="border-[1px] border-[#f2f2f2]">
      <div className="wrapper flex items-center justify-between py-4">
        {/* Logo Start */}
        <div className='my-5'>
          <img src={DigiTools} alt="logo" />
        </div>

        {/* Menu Start */}
        <div>
          <ul className="flex gap-8 text-heading-dark font-semibold">
            {menus.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        {/* End Menu */}

        {/* Cart, Login, Get Started Button */}
        <div className="flex justify-center items-center gap-4">
          <div className="text-heading-dark">
            <FontAwesomeIcon icon={faShoppingCart} size="" />
          </div>
          <div className="text-heading-dark text-base font-semibold">
            <button>Login</button>
          </div>
          <div>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
        {/* End Login */}
      </div>
    </header>
  );
}

export default Navbar;
