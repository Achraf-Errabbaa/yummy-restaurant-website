import React from 'react';
import {images} from '../constant/images';
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
export const Home = () => {
    return (
        <div div id='hero'>
        <div className='flex items-center justify-center gap-24 p-10 h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] '>
            <div class=" text-white p-32 ">
            <h1 className=' font-[Satisfy] text-4xl'>Enjoy Your Healthy Delicious Food</h1>
            <p className='font-bold text-lg'>We are team of talented designers making websites with Bootstrap</p>
            <div className='flex gap-6 mt-10'>
            <motion.button  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} className='bg-red-500 rounded-3xl w-36 h-14'>Book a Table</motion.button>
      
<button
  type="submit"
  class="flex justify-center gap-2 items-center  shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
<a
    href="#video"
    className="flex items-center text-black "
    >
      Watch Video 
    </a>
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
</div>
</div>

    <motion.div animate={{y: [0,-20,0]}} transition={{duration: 2, repeat:Infinity, repeatType:"reverse",ease:'easeInOut'}} className=''>
            <img src={images.hero} alt="" />
        </motion.div>
        </div>
        </div>
    );
};
