import React from 'react';
import ServiceCard from '../components/ServiceCard';

// Example service options
const serviceOptions = [
  {
    label: 'Fast Delivery',
    description: 'Get your orders delivered at lightning speed with our efficient delivery system.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3258/3258591.png', // Placeholder icon URL
  },
  {
    label: '24/7 Support',
    description: 'We provide round-the-clock support to assist you with any inquiries or issues.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4359/4359722.png',
  },
  {
    label: 'Quality Assurance',
    description: 'Our products go through rigorous quality checks to ensure the best for you.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2477/2477152.png',
  },
  {
    label: 'Easy Returns',
    description: 'Not satisfied with your purchase? Enjoy hassle-free returns within 30 days.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png',
  },
  {
    label: 'Secure Payment',
    description: 'Your payments are secure with our top-notch encryption technology.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1651/1651713.png',
  },
];

const getRandomServices = (count) => {
  const shuffled = serviceOptions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Services = () => {
  const services = getRandomServices(3); // Get 3 random services

  return (
    <section className="max-container py-16 bg-gray-100">
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
