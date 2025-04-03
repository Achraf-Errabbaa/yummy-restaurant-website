import React, { useState } from 'react';
import { images } from '../constant/images';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const testimonials = [
        {
            name: "John Doe",
            image: images.testimonials1,
            text: "This service exceeded my expectations! The attention to detail and professionalism were outstanding. Highly recommend to anyone looking for quality."
        },
        {
            name: "Emily Carter",
            image: images.testimonials2,
            text: "Absolutely phenomenal! The team went above and beyond to deliver results. I couldn't be happier with the experience."
        },
        {
            name: "Michael Brown",
            image: images.testimonials3,
            text: "Top-notch service with a personal touch. They really care about customer satisfaction and it shows in their work."
        },
        {
            name: "Sarah Wilson",
            image: images.testimonials4,
            text: "From start to finish, the process was seamless. I was impressed by the professionalism and the results speak for themselves!"
        }
    ];

    return (
        <div className='bg-white py-16 md:py-32' id='testimonials'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex items-center justify-center flex-col gap-4 mb-8 md:mb-16'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-lg md:text-xl text-yellow-500 font-bold'
                    >
                        TESTIMONIALS
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-2xl md:text-3xl font-[Satisfy] font-bold text-center'
                    >
                        What Are They <span className='text-red-500'>Saying About Us</span>
                    </motion.h2>
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 p-6 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-lg p-8">
                                    <div className="w-full md:w-2/3">
                                        <motion.h3
                                            className="text-xl md:text-3xl font-bold mb-4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {testimonial.name}
                                        </motion.h3>
                                        <div className="text-yellow-400 text-2xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                                        <motion.p
                                            className="text-base md:text-xl text-gray-600 leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {testimonial.text}
                                        </motion.p>
                                    </div>
                                    <div className="w-full md:w-1/3 flex justify-center">
                                        <motion.img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gray-200 shadow-lg object-cover"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-4 h-4 rounded-full transition-colors ${activeSlide === index ? 'bg-red-500' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveSlide(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};