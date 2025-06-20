'use client';
import React from 'react';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '150+', label: 'Menu Items' },
  { value: '50+', label: 'Cities Served' },
  { value: '24/7', label: 'Service' },
];

const StatsSection = () => {
  return (
    <section className="bg-white/90 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transition-all hover:scale-105 hover:bg-orange-50 rounded-xl p-4"
            >
              <p className="text-4xl font-extrabold text-orange-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-700 text-base md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
