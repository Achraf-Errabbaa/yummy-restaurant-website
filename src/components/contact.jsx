import React from 'react';
import { motion } from "framer-motion";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineNumbers } from "react-icons/md";

export const Contact = () => {
    return (
        <div id='contact'>
            <motion.div
                className="location mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-bold text-center mt-10 text-blue-600">Find Us Here</h1>
                <p className="text-center text-gray-500 mt-4">
                    We are located in Adam Street, New York. Come visit us!
                </p>
                <div className='flex items-center justify-center mt-10'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3454.2096777307243!2d-73.99143658813621!3d40.69830713833413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA108%20Adam%20Street%2C%20New%20York%2C%20NY%20535022!5e1!3m2!1sen!2sma!4v1743612424276!5m2!1sen!2sma"
                        width="90%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <p className="text-center text-gray-500 mt-4 font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg lg:text-xl">
                        <span className="flex items-center gap-2">
                            <MdOutlineNumbers className="text-lg sm:text-xl lg:text-2xl" />
                            For reservations, please call us at
                        </span>
                        <span className="text-blue-600">+1 234 567 890</span>
                    </p>
                    
                    <p className="text-center text-gray-500 mt-4 font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg lg:text-xl">
                        <span className="flex items-center gap-2">
                            <TiLocationOutline className="text-lg sm:text-xl lg:text-2xl" />
                            We are located at
                        </span>
                        <span className="text-red-600 text-center sm:text-left">
                            A108 Adam Street, New York, NY 535022
                        </span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
