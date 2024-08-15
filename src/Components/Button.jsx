import React from 'react';

const Button = ({ label, iconURL }) => {
  return (
    <button
      className='flex items-center bg-coral-red text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-coral-red-dark transition duration-700 ease-in-out'
    >
      {label}
      <img src={iconURL} alt="arrow right icon" className='ml-2 w-5 h-5' />
    </button>
  );
}

export default Button;
