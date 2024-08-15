

import React from 'react';

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10 py-16 px-4 bg-gray-100'
    >
      {/* Heading */}
      <h3 className='text-4xl lg:text-5xl font-palanquin font-bold text-gray-800 leading-tight lg:max-w-md'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>

      {/* Subscription Form */}
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full bg-white shadow-md'>
        <input
          type='email'
          placeholder='subscribe@nike.com'
          className='w-full p-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red transition duration-300 ease-in-out'
        />
        <button
          className='w-full p-3 bg-coral-red text-white rounded-full transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-coral-red'
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
