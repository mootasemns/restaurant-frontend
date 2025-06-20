import { ChefHat, Leaf, Users } from 'lucide-react';
import StatsSection from '@/components/Stats';

// This can remain a Server Component as it has no client-side interactivity
export const metadata = {
  title: 'About Us | Delicioso',
  description:
    'Learn about the story, passion, and people behind Delicioso restaurant.',
};

export default function AboutPage() {
  return (
    <>
      {/* No Header or Footer here! */}
      <section className="bg-gradient-to-br from-amber-50 to-red-100 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Culinary Story
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Delicioso was born from a simple idea: to share the magic of
            authentic, home-style cooking with our community, using only the
            freshest local ingredients.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Passion on a Plate
            </h2>
            <p className="text-lg text-gray-600">
              Our philosophy is straightforward. We believe great food starts
              with great ingredients. We partner with local farmers and
              purveyors to ensure every dish is fresh, vibrant, and full of
              flavor. Our chefs blend traditional techniques with a modern twist
              to create a truly memorable dining experience.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <Leaf className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Farm-to-Table Freshness
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sourcing the best local produce.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ChefHat className="h-8 w-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Expert Craftsmanship
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dishes perfected by our skilled chefs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-orange-100 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center p-8">
              <Users className="h-20 w-20 text-orange-500/60 mx-auto mb-4" />
              <p className="text-orange-600/80 font-medium">
                Placeholder for 'Our Team' Image
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Head Chef
          </h2>
          <div className="max-w-md mx-auto h-40 w-40 rounded-full bg-orange-200 mb-6 flex items-center justify-center shadow-inner">
            <p className="text-orange-500 text-sm">Chef Photo</p>
          </div>
          <h3 className="text-3xl font-semibold text-gray-800">
            Chef Isabella Rossi
          </h3>
          <p className="text-orange-600 font-medium mt-1">Culinary Director</p>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            "For me, cooking is not just a job; it's a way to connect with
            people and share joy. Every ingredient has a story, and I love
            telling it through my food."
          </p>
        </div>
      </section>
    </>
  );
}
