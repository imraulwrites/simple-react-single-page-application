import React from 'react';
import Button from '../ui/Button';

export default function Products() {
  return (
    <section className='wrapper my-28 '>
      <div className='text-center '>
        <h1 className='text-5xl text-dark-shade font-extrabold mb-4'>Premium Digital Tools</h1>
        <p className='text-base font-normal text-muted mb-4'>
          Choose from our curated collection of premium digital products designed <br /> to boost your
          productivity and creativity.
        </p>
      </div>

      <div className='flex gap-4 justify-center'>
        <Button className="btn-primary">Products</Button>
        <Button>Cart (**2)</Button>
      </div>
    </section>
  );
}
