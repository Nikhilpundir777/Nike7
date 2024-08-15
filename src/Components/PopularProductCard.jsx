import React from 'react';

const PopularProductCard = ({ imgSrc, description, price }) => {
  return (
    <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full flex-shrink-0 transition-all duration-300 hover:bg-gray-100">
      <img src={imgSrc} alt={description} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-coral-red text-lg font-semibold mb-4">{price}</p>
        <div className="flex justify-between">
          <button className="wishlist-btn bg-white text-coral-red border border-coral-red rounded-lg px-4 py-2 hover:bg-coral-red hover:text-white transition-colors duration-300">
            Add to Wishlist
          </button>
          <button className="cart-btn bg-coral-red text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
