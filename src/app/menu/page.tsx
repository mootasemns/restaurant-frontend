'use client';

import React, { useState, useMemo } from 'react';
import { menuData, MenuItem } from '@/lib/data';

import { UtensilsCrossed, ShoppingBag } from 'lucide-react';

// Reusable Menu Item Card Component
const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const handleAddToCart = () => {
    // This will connect to your cart logic later
    console.log(`Added ${item.name} to cart`);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <div className="relative h-56 bg-orange-100 flex items-center justify-center">
        {/* Placeholder for image */}
        <UtensilsCrossed className="h-16 w-16 text-orange-400/50" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-extrabold text-orange-600">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg font-semibold text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Menu Page Component
export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(
    () => [
      'All',
      ...Array.from(new Set(menuData.map((item) => item.category))),
    ],
    []
  );

  const filteredMenu = menuData.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <>
      {/* Page Hero */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Explore Our Menu
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            A symphony of authentic flavors crafted with passion.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 md:space-x-4 bg-white p-2 rounded-xl shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-orange-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
