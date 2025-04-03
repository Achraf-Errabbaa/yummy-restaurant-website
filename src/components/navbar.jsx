import React from 'react';
import { images } from "../constant/images";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-gray-900 text-white px-4 py-6">
      <h1 className="font-bold text-3xl">
        Yummy<span className="text-red-600 font-extrabold text-2xl">.</span>
      </h1>
      <ul className="flex items-center gap-10 text-lg font-semibold">
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#hero">Home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#about">About</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#menu">Menu</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#testimonials">Testimonials</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#chefs">Chefs</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="#gallery">Gallery</Link>
        </motion.div>

        {/* Dropdown */}
        
      </ul>
      <div className="flex flex-row items-end gap-4 text-lg font-semibold">
        <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          <Link smooth to="/#contact">Contact</Link>
        </motion.div>
        <motion.button whileHover={{ scale: 1.2, color: "#60a5fa" }} className="cursor-pointer">
          Login
        </motion.button>
      </div>
    </nav>
  );
};
