import React from 'react';
import Button from '../ui/Button';

function Workflow() {
  return (
    <section className='bg-gradient py-30 text-center text-white'>
      <h1 className='text-5xl font-extrabold mb-4'> Ready to Transform Your Workflow?</h1>
      <p className='text-base font-normal mb-10'>
        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your
        free trial today.
      </p>

      <div className='flex gap-4 mb-4 justify-center items-center'>
        <Button className="bg-white rounded-4xl text-primary px-4 py-3 text-base font-semibold">Explore Products</Button>
        <Button className="border border-white rounded-4xl px-8 py-3 text-base font-semibold">View Pricing</Button>
      </div>

      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </section>
  );
}

export default Workflow;
