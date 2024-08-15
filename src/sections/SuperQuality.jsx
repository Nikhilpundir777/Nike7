import React, { useRef } from 'react';

import './SuperQuality.css'; // Import the custom CSS for the gooey effect
const SuperQuality = () => {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const overlay = overlayRef.current;
    const rect = overlay.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // Create a "hole" in the overlay where the mouse is
    const radius = 50; // Radius of the reveal area
    const circle = `circle(${radius}px at ${offsetX}px ${offsetY}px)`;
    overlay.style.clipPath = circle;
  };

  return (
    <section
      id="about-us"
      className="flex justify-between items-center lg:flex-row flex-col gap-10 w-full px-4 py-16 bg-gray-100"
    >
      {/* Text Content */}
      <div className="flex flex-1 flex-col lg:text-left text-center">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold leading-snug">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg text-gray-600">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg text-gray-600">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-8">
        
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex-1 flex justify-center items-center relative"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image */}
        <img
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/416fc7f2-500e-474c-83d2-fa691976b32c/air-max-dn-electric-shoes-3pwX55.png"
          alt="Background product detail"
          className="object-contain w-full h-auto max-w-xs lg:max-w-md"
        />
        {/* Overlay Image */}
        <div
          ref={overlayRef}
          className="overlay absolute top-0 left-0 w-full h-full"
        >
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png"
            alt="Overlay product detail"
            className="object-contain w-full h-auto max-w-xs lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;