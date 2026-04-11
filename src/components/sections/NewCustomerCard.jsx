import React from 'react';

function NewCustomerCard({ image, text, heading, label }) {
  return (
    <div className="relative flex flex-col p-6 border border-muted/10 shadow rounded-2xl">
      <div className="bg-gradient rounded-full w-fit px-3 py-2 absolute right-6 top-6">
        <p className="text-white">{label}</p>
      </div>
      <div className='flex flex-col items-center justify-center py-14 gap-4'>
        <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary/20">
          <img className="max-w-fit" src={image} alt="" />
        </div>
        <h3 className='text-6 font-bold text-heading-dark'>{heading}</h3>
        <p className='text-base font-normal text-muted'>{text}</p>
      </div>
    </div>
  );
}

export default NewCustomerCard;
