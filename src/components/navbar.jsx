import React, { useState } from 'react';
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "#hero", text: "Home" },
    { to: "#about", text: "About" },
    { to: "#menu", text: "Menu" },
    { to: "#testimonials", text: "Testimonials" },
    {to: "#event",text: "Events"},
    { to: "#chefs", text: "Chefs" },
    { to: "#gallery", text: "Gallery" },
    
  ];

  return (
    <nav className="bg-gray-900 text-white px-4 py-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-3xl">
          Yummy<span className="text-red-600 font-extrabold text-2xl">.</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.li 
                key={link.to}
                whileHover={{ scale: 1.2, color: "#60a5fa" }} 
                className="cursor-pointer"
              >
                <Link smooth to={link.to}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
              <Link smooth to="/#contact">Contact</Link>
            </motion.div>
            <motion.button whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
              Login
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} mt-4`}>
        <ul className="flex flex-col items-center gap-6 text-lg">
          {navLinks.map((link) => (
            <motion.li 
              key={link.to}
              whileHover={{ scale: 1.1 }} 
              className="w-full text-center"
              onClick={toggleMenu}
            >
              <Link 
                smooth 
                to={link.to} 
                className="block py-2 hover:bg-gray-800 rounded"
              >
                {link.text}
              </Link>
            </motion.li>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              <Link smooth to="/#contact" className="block py-2">Contact</Link>
            </motion.div>
            <motion.button whileHover={{ scale: 1.1 }} className="cursor-pointer px-4 py-2">
              Login
            </motion.button>
          </div>
        </ul>
      </div>
    </nav>
  );
};