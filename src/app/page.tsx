'use client';

import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/Stats';
import FeaturedMenu from '@/components/FeaturedMenu';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  // This is a placeholder function. Later, this would interact
  // with your cart state (e.g., using a Context).
  const handleAddToCart = () => {
    console.log('Item added to cart!');
    alert('Added to cart! (Placeholder)');
  };

  return (
    <>
      <HeroSection onAddToCart={handleAddToCart} />
      <StatsSection />
      <FeaturedMenu />
      <Testimonials />
    </>
  );
}
