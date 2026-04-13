import React from 'react';
import Button from '../ui/Button';
import products from '../data/products';
import ProductCard from './ProductCard';
import CartElement from './CartElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export default function Products({
  isCartOpen,
  cart,
  setIsCartOpen,
  setCart,
  addToCart,
  removeFromCart,
  totalCartPrice,
}) {
  return (
    <section className="wrapper my-28 flex flex-col justify-center items-center">
      <div className="text-center ">
        <h1 className="text-5xl text-dark-shade font-extrabold mb-4">Premium Digital Tools</h1>
        <p className="text-base font-normal text-muted mb-4">
          Choose from our curated collection of premium digital products designed <br /> to boost
          your productivity and creativity.
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 p-1 border border-muted/10 w-fit rounded-4xl ">
        <div onClick={() => setIsCartOpen(false)}>
          <Button className={`${isCartOpen ? 'btn-normal' : 'btn-primary'}`}>Products</Button>
        </div>
        <div onClick={() => setIsCartOpen(true)}>
          <Button className={`${isCartOpen ? 'btn-primary' : 'btn-normal'}`}>
            Cart ({cart.length})
          </Button>
        </div>
      </div>

      {!isCartOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {products?.map((item, id) => (
            <ProductCard key={id} product={item} addToCart={addToCart} cart={cart} />
          ))}
        </div>
      )}

      {isCartOpen && (
        <div className="p-10 my-10 border border-muted/20 rounded-2xl flex flex-col gap-6 w-full shadow-md">
          <h4 className="text-2xl font-bold text-heading-dark">Your Cart</h4>
          {cart.length ? (
            <div>
              {cart.map((item, id) => (
                <CartElement key={id} item={item} removeFromCart={removeFromCart} />
              ))}
              <div className="flex justify-between">
                <p className="text-muted/90">Total:</p>
                <p className="text-2xl font-bold text-heading-dark">${totalCartPrice()}</p>
              </div>
              <div
                onClick={() => {
                  setCart([]);
                  toast.success('Payment Completed');
                }}
              >
                <Button className="btn-primary">Proceed To Checkout</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center opacity-70">
              <FontAwesomeIcon icon={faShoppingCart} size="2xl" />
              <p className="my-3 ">Your Cart is empty</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
