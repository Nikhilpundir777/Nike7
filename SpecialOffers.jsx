import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this path is correct

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container py-16 bg-gradient-to-r from-gray-100 to-gray-50">
      {/* Image Section */}
      <div
        className="flex-1"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2V8ZW58MHx8MHx8fDA%3D"
          width={773}
          height={687}
          className="object-contain w-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div
        className="flex flex-1 flex-col"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-palanquin font-bold leading-snug">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 text-gray-700">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 text-gray-700">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <button className="flex items-center px-6 py-2 border rounded-md bg-coral-red text-white border-coral-red transition-transform duration-300 ease-in-out hover:bg-red-700 hover:scale-105">
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
              alt="Arrow Right"
              className="w-4 h-4 mr-2"
            />
            Shop Now
          </button>
          <button className="flex items-center px-6 py-2 border rounded-md bg-white text-slate-gray border-slate-gray transition-transform duration-300 ease-in-out hover:bg-slate-gray hover:text-white hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
