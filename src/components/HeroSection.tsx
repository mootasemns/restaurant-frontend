// components/HeroSection.tsx
'use client';
import React from 'react'; // No longer need useState or useEffect
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, Phone, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onAddToCart: () => void;
}

// Note: No more state management for the animation
const HeroSection = ({ onAddToCart }: HeroSectionProps) => {
  return (
    // The min-h-screen was here, but often better placed on the main page container
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with CSS animation */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span>High rated Restaurant in USA</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Taste the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                {' '}
                Magic
              </span>
              <br />
              of Authentic Flavors
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience culinary excellence with our chef-crafted dishes made
              from the finest ingredients. Every bite tells a story of passion
              and tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onAddToCart}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Order Now
              </button>
              <Link
                href="/menu"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
              >
                View Menu
              </Link>
            </div>
            {/* ... rest of your left column JSX ... */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Fast Delivery</p>
                  <p className="text-sm text-gray-600">30 min average</p>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Phone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">24/7 Support</p>
                  <p className="text-sm text-gray-600">Always here</p>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Local Fresh</p>
                  <p className="text-sm text-gray-600">Farm to table</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content with CSS animation */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main food image placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl shadow-2xl overflow-hidden">
                {/* The image component was causing layout shifts, let's fix it */}
                <Image
                  src="/rest.jpg"
                  width={600}
                  height={600}
                  alt="Delicious pasta dish"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ... rest of your right column JSX ... */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Fresh & Hot
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-lg p-3 shadow-lg transform -translate-y-1/2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">4.9</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">2.5k reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
