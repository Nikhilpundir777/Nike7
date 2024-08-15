import React from 'react';
import PopularProductCard from '../Components/PopularProductCard';
import './PopularProducts.css'; // Import the CSS file for styles

const PopularProducts = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Experience top-notch quality and style with our sought-after solutions.
          Discover a world of comfort, design, and value.
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              {/* Duplicate the content for continuous scrolling */}
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a748438-2634-454a-b137-431f99e4db1a/cortez-textile-shoes-tVF5KG.png"
                description="Comfortable and stylish sneakers for everyday wear."
                price="$99.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/843f298f-7d8b-4f24-83c5-540d695c1a22/custom-nike-pegasus-41-by-you.png"
                description="Premium quality running shoes designed for performance."
                price="$129.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4a5d5069-308b-4aae-b7bd-ae41934f2cc9/W+NIKE+DUNK+LOW+PRM.png"
                description="Versatile and durable shoes for all occasions."
                price="$89.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7dd43210-b5f6-4282-b1fd-f48daa7b7230/NIKE+P-6000.png"
                description="Elegant shoes with a Silky-touch."
                price="$159.99"
              />
              {/* Repeat to ensure continuous scrolling */}
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a748438-2634-454a-b137-431f99e4db1a/cortez-textile-shoes-tVF5KG.png"
                description="Comfortable and stylish sneakers for everyday wear."
                price="$99.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/843f298f-7d8b-4f24-83c5-540d695c1a22/custom-nike-pegasus-41-by-you.png"
                description="Premium quality running shoes designed for performance."
                price="$129.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4a5d5069-308b-4aae-b7bd-ae41934f2cc9/W+NIKE+DUNK+LOW+PRM.png"
                description="Versatile and durable shoes for all occasions."
                price="$89.99"
              />
              <PopularProductCard
                className="product-card"
                imgSrc="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a748438-2634-454a-b137-431f99e4db1a/cortez-textile-shoes-tVF5KG.png"
                description="Elegant shoes with a Silky-touch."
                price="$159.99"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
