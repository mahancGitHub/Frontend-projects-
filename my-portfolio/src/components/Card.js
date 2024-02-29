// src/components/Card.js
import React from 'react';

const Card = ({ title, description, technologies }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-500 text-sm mt-2">{technologies}</p>
      </div>
    </div>
  );
};

export default Card;
