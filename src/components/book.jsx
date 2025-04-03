import React from 'react';
import { images } from "../constant/images";
import { motion } from "framer-motion";

export const BookTable = () => {
    return (
        <div id='BookTable'>
        <motion.div 
            className='mt-10 mb-10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the element is in view
        >
            {/* Header Section */}
            <motion.div 
                className='flex items-center justify-center flex-col gap-4 text-center'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h3 className='text-xl font-bold text-yellow-500'>Book A Table</h3>
                <h1 className='text-3xl font-bold font-[Satisfy]'>Book Your <span className='text-red-500'>Stay With Us</span></h1>
            </motion.div>

            <div className='flex items-center justify-around flex-wrap mt-10 px-11'>
                {/* Image Section with Motion */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full md:w-auto px-4 md:px-0"
                >
                    <img 
                        className="w-full md:w-[460px] lg:w-[560px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl" 
                        src={images.reservation} 
                        alt="Reservation" 
                    />
                </motion.div>

                {/* Form Section */}
                <motion.form 
                    className="mx-auto w-[560px] h-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {["First Name", "Last Name"].map((label, index) => (
                            <motion.div 
                                key={index} 
                                className="relative z-0 w-full h-20 mb-5 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <input type="text" name={label.toLowerCase().replace(" ", "_")} id={label.toLowerCase()} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={label.toLowerCase()} className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {[ 
                            { label: "Phone (123-456-7890)", type: "tel", id: "phone" },
                            { label: "Email Address", type: "email", id: "email" }
                        ].map((field, index) => (
                            <motion.div 
                                key={index} 
                                className="relative z-0 w-full mb-5 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <input type={field.type} name={field.id} id={field.id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor={field.id} className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{field.label}</label>
                            </motion.div>
                        ))}
                    </div>

                    {/* Message Box */}
                    <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none" placeholder="Write your message here..." required></textarea>
                        </div>
                    </motion.div>

                    {/* Submit Button with Motion */}
                    <motion.div 
                        className='flex items-center justify-center mt-4'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.button 
                            type="submit" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48 px-5 py-2.5 text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </motion.div>
                </motion.form>
            </div>
        </motion.div>
        </div>
    );
};
