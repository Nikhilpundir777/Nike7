

import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Example testimonial data
const testimonials = [
  {
    name: 'John Doe',
    review: 'Absolutely amazing! The quality of the shoes is unmatched. Highly recommend to anyone looking for premium footwear.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review: 'Great experience from start to finish. The customer service was excellent, and the shoes are even better than expected!',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    review: 'Fantastic shoes and speedy delivery. I am very pleased with my purchase and will definitely be back for more!',
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-coral-red">Customers</span> Say
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-coral-red text-4xl" />
                <div className="ml-4">
                  <p className="text-gray-700 text-lg italic">"{testimonial.review}"</p>
                </div>
              </div>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-right font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
