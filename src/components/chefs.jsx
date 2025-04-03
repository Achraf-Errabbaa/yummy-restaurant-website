import React from 'react';
import { images } from "../constant/images";
import { motion } from "framer-motion";

export const Chefs = () => {
    return (
        <div className='mt-10 mb-10 ' id='chefs'>
            {/* Section Heading */}
            <div className='flex items-center justify-center flex-col gap-4 text-center'>
                <h2 className='text-xl text-yellow-500 font-bold'>Chefs</h2>
                <h1 className='text-3xl font-[Satisfy] font-bold'>Our <span className="text-red-500">Professional Chefs</span></h1>
            </div>

            {/* Chefs Container */}
            <div className='flex items-center justify-center gap-60 mt-10 flex-wrap'>

                {/* Chef 1 */}
                <motion.div initial={{ zIndex: 1, opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }} className='flex flex-col items-center'>
                    <div className="relative">
                        <img src={images.chef1} alt="Chef" className="w-[250px] h-[250px] rounded-full z-10 relative" />
                        <img src={images.teamShape} alt="Background Shape" className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[280px] z-0" />
                    </div>
                    <div className="text-center mt-6">
                        <h3 className="text-xl font-bold">Walter White</h3>
                        <p className="text-sm text-gray-500">Cook</p>
                        <p className="mt-2 text-gray-700 w-[250px]">
                            "Cooking is not just about food; it’s about creating an experience. Our dishes tell a story, and every bite should be a journey through tradition, flavor, and passion."
                        </p>
                    </div>
                </motion.div>

                {/* Chef 2 */}
                <motion.div initial={{ zIndex: 1, opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }} className='flex flex-col items-center'>
                    <div className="relative">
                        <img src={images.chef2} alt="Chef" className="w-[250px] h-[250px] rounded-full z-10 relative" />
                        <img src={images.teamShape} alt="Background Shape" className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[280px] z-0" />
                    </div>
                    <div className="text-center mt-6">
                        <h3 className="text-xl font-bold">Sarah Johnson</h3>
                        <p className="text-sm text-gray-500">Patissier</p>
                        <p className="mt-2 text-gray-700 w-[250px]">
                            "The joy of food is in its simplicity. At our kitchen, we focus on perfecting the basics and elevating them into something extraordinary. Every dish is made to be unforgettable."
                        </p>
                    </div>
                </motion.div>

                {/* Chef 3 */}
                <motion.div initial={{ zIndex: 1, opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }} className='flex flex-col items-center'>
                    <div className="relative">
                        <img src={images.chef3} alt="Chef" className="w-[250px] h-[250px] rounded-full z-10 relative" />
                        <img src={images.teamShape} alt="Background Shape" className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[280px] z-0" />
                    </div>
                    <div className="text-center mt-6">
                        <h3 className="text-xl font-bold">William Anderson</h3>
                        <p className="text-sm text-gray-500">Head Chef</p>
                        <p className="mt-2 text-gray-700 w-[250px]">
                            "Food is my art, my therapy, and my joy. I aim to connect with every guest through flavors that excite, nourish, and bring people together. It's all about quality and care in every detail."
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
