import React from 'react';
import Image from 'next/image'; // Assuming you'll have images
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Placeholder data - this will come from your backend later
const featuredItems = [
  {
    name: 'Spicy Arrabiata',
    description: 'Classic pasta with a fiery tomato and chili sauce.',
    price: '$14.99',
    image: '/placeholder-pasta.jpg', // Add a placeholder image in your /public folder
  },
  {
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and san marzano tomatoes.',
    price: '$16.50',
    image: '/placeholder-pizza.jpg',
  },
  {
    name: 'Tiramisu',
    description: 'A creamy delight of coffee, mascarpone, and cocoa.',
    price: '$8.00',
    image: '/placeholder-tiramisu.jpg',
  },
];

const FeaturedMenu = () => {
  return (
    <section className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Signature Dishes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hand-picked by our chef, loved by our customers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-56">
                {/* You can use a real Image component here */}
                <div className="w-full h-full bg-orange-200 flex items-center justify-center text-orange-500 font-medium">
                  {item.name} Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price}
                  </span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center text-orange-600 font-semibold text-lg hover:text-orange-800 transition-colors"
          >
            View Full Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
