import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'Delicioso - Authentic Flavors',
  description: 'Experience culinary excellence with our chef-crafted dishes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartItemCount = 0;

  return (
    <html lang="en" className={geist.variable}>
      <body>
        <Header cartItems={cartItemCount} />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
