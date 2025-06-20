import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    quote:
      'The best pasta I have ever had! The service was impeccable and the atmosphere was cozy and inviting. A must-visit!',
    rating: 5,
  },
  {
    name: 'Mike D.',
    quote:
      'Delicioso lives up to its name. Every dish was a burst of flavor. Fast delivery and the food arrived hot. Highly recommend the pizza!',
    rating: 5,
  },
  {
    name: 'Jessica P.',
    quote:
      'A wonderful experience from start to finish. The attention to detail is amazing. This is our new favorite spot for date night.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We love our customers, and they love us too.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
