import React, { useState } from 'react';
import { arrowRight } from "../assets/icons";
import Button from '../Components/Button';
import bigShoe1 from './big-shoe1.png';
import bigShoe2 from './big-shoe2.png';
import bigShoe3 from './big-shoe3.png';
import ShoeCard from '../Components/ShoeCard';

// Example shoe data
const shoeData = [
  { image: bigShoe1, title: 'Nike Air Max', price: 120 },
  { image: bigShoe2, title: 'Nike Air Zoom', price: 130 },
  { image: bigShoe3, title: 'Nike Air Force', price: 110 },
];

const Hero = () => {
  // State to manage the displayed hero image
  const [currentShoe, setCurrentShoe] = useState(shoeData[0]);

  const handleShoeClick = (shoe) => {
    setCurrentShoe(shoe);
  };

  return (
    <section
      id='home'
      className='w-full flex flex-col justify-center min-h-screen gap-10 max-container bg-white px-16'
    >
      {/* Text and Main Image Section */}
      <div className='relative w-full flex flex-col xl:flex-row justify-center items-start w-full max-xl:px-6 pt-28'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full'>
          <p className='text-xl font-montserrat text-coral-red'>
            Our Summer Collections
          </p>

          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button label='Shop now' iconURL={arrowRight} />
        </div>

        <div className="xl:w-3/5 flex justify-center items-center relative">
          <img src={currentShoe.image} alt={currentShoe.title} className="max-w-full h-auto z-10" />
        </div>
      </div>

      {/* Shoe Cards Section */}
      <div className="w-full flex justify-center mt-10 gap-6 flex-wrap">
        {shoeData.map((shoe, index) => (
          <ShoeCard
            key={index}
            shoeImage={shoe.image}
            title={shoe.title}
            price={`$${shoe.price}`}
            onClick={() => handleShoeClick(shoe)}
            isActive={currentShoe.image === shoe.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
