import React from 'react';

const ServiceCard = ({ label, description, icon }) => {
  return (
    <div className="service-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
      {icon && (
        <div className="mb-4">
          <img src={icon} alt={`${label} icon`} className="w-16 h-16 object-contain" />
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-coral-red">
        {label}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
