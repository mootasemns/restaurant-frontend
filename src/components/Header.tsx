'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  cartItems: number;
}

const Header = ({ cartItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Do nothing if the click is on the menu button itself
      if (
        buttonRef.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        return;
      }
      // Close the menu if the click is outside of the menu panel
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on component unmount or when menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-white shadow-lg">
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <ChefHat className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-800">
                Delicioso
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/menu"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <Link
            href="/menu"
            className="text-gray-800 hover:text-orange-600 w-full"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-orange-600 w-full"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-orange-600 w-full"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/cart"
            className="relative text-gray-800 hover:text-orange-600"
            onClick={closeMenu}
          >
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span>Cart</span>
              {cartItems > 0 && (
                <span className="bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
