import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { images } from "../constant/images";
import { FaCheckCircle, FaClipboardCheck, FaGem, FaHdd } from "react-icons/fa";


export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false,  margin: "-15% 0px -15% 0px" });

  return (
    <>
      <div className="bg-white overflow-hidden" id="about">
        {/* About Us Section */}
        <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <motion.p 
          className="text-gray-400 text-lg font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.p>
        <motion.h2 
          className="text-3xl font-bold font-[Satisfy]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Learn More <span className="text-red-500">About Us</span>
        </motion.h2>
      </div>

      <div className="about-content flex flex-col md:flex-row mt-10 gap-10">
        {/* Left Side - Image & Booking */}
        <motion.div 
          className="max-w-[700px] h-[660px] flex flex-col gap-4 px-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            className="w-[700px] h-[660px] object-cover rounded-lg" 
            src={images.about} 
            alt="Restaurant" 
          />
          <motion.div 
            className="text-center w-[660px] flex flex-col gap-4 shadow-2xl bg-gray-700 p-4 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-black text-2xl font-bold">Book a Table</h3>
            <h2 className="text-red-500 font-extrabold text-2xl">+1 5589 55488 55</h2>
          </motion.div>
        </motion.div>

        {/* Right Side - Restaurant Info */}
        <motion.div 
          className="right-about flex flex-col gap-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.p 
            className="text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to <span className="font-bold text-red-500">Yummy</span>, where passion meets flavor.
            We serve dishes made from <strong>fresh, locally sourced ingredients</strong>, ensuring every bite is a burst of authenticity.
            Whether you're here for a casual meal or a fine dining experience, <strong>our chefs craft every dish with love</strong>.
          </motion.p>

          <motion.ul 
            className="flex flex-col gap-4 text-gray-500 font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Farm-to-table freshness in every dish.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>A warm and cozy ambiance perfect for any occasion.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Authentic recipes infused with modern creativity.</span>
            </li>
          </motion.ul>

          <motion.p 
            className="text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join us for an unforgettable dining experience. Our flavors tell a <strong>story of tradition and innovation</strong>—
            a culinary journey that <strong>satisfies the soul</strong>. 🍽️✨
          </motion.p>

          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img 
              className="w-[740px] h-[600px] object-cover rounded-lg" 
              src={images.about2} 
              alt="Delicious Food" 
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>

        {/* Why Choose Us Section */}
        <div className="why-section mt-10 flex flex-row gap-4 pb-6 justify-center items-center">
          <div className="container px-12 flex flex-row gap-4 justify-start items-start">
            {/* Left Side - Main Reason */}
            <motion.div whileHover={{ rotate: [0, 3, -3, 0] }} animate={{ rotate: 0 }} className="bg-[#e74c3c] max-w-[360px] h-[630px] gap-4 flex flex-col p-8 rounded-xl text-white">
              <h3 className="text-4xl text-amber-400 font-bold font-mono">Why Choose Yummy?</h3>
              <p className="text-2xl p-3">
                At **Yummy**, we believe food should be more than just a meal—it should be an **experience**.
                Our commitment to **quality, innovation, and customer satisfaction** sets us apart.
              </p>
              <button className="rounded-3xl mx-20 p-3 text-red-500 font-bold bg-gray-300 hover:bg-gray-400 transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Right Side - Key Features */}
            <div className="infos flex flex-row gap-4 justify-center items-center">
              {/* Feature 1 */}
              <motion.div whileHover={{ rotate: [0, 3, -3, 0] }} animate={{ rotate: 0 }} className="bg-[#2874a6] gap-4 max-w-[360px] h-[630px] flex flex-col p-8 rounded-xl text-white text-center">
                <i className="text-8xl p-9 flex items-center justify-center"><FaClipboardCheck /></i>
                <h4 className="text-3xl font-bold">Certified Excellence</h4>
                <p className="text-xl">
                  We maintain **high culinary standards** and a **certified kitchen**,
                  ensuring every dish meets premium quality.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div whileHover={{ rotate: [0, 3, -3, 0] }} animate={{ rotate: 0 }} className="bg-[#6c3483] gap-4 max-w-[360px] h-[630px] flex flex-col p-8 rounded-xl text-white text-center">
                <i className="text-8xl p-9 flex items-center justify-center"><FaGem /></i>
                <h4 className="text-3xl font-bold">Premium Ingredients</h4>
                <p className="text-xl">
                  From **organic vegetables** to **hand-selected meats**,
                  we use only the **finest ingredients** for an unforgettable flavor.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div whileHover={{ rotate: [0, 3, -3, 0] }} animate={{ rotate: 0 }} className="bg-[#117a65] gap-4 max-w-[360px] h-[630px] flex flex-col p-8 rounded-xl text-white text-center">
                <i className="text-8xl p-9 flex items-center justify-center"><FaHdd /></i>
                <h4 className="text-3xl font-bold">Advanced Culinary Tech</h4>
                <p className="text-xl">
                  We blend **traditional cooking** with **modern technology**,
                  ensuring efficiency without compromising quality.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
  ref={ref}
  initial={{ opacity: 0, y: 100, rotate: -1, scale: 0.95 }}
  animate={isInView ? { 
    opacity: 1, 
    y: 0, 
    rotate: 0, 
    scale: 1 
  } : {}}
  transition={{ 
    type: "spring", 
    stiffness: 100,
    damping: 20,
    delay: 0.2
  }}
  className="relative bg-cover bg-center h-[400px] font-extrabold flex items-center justify-around text-3xl text-white"
  style={{ backgroundImage: `url(${images.stats})` }}
>
  <motion.div 
    className="absolute inset-0 bg-black bg-opacity-60"
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 0.4 : 0 }}
    transition={{ duration: 0.8 }}
  />
  
  <motion.div 
    className="relative z-10 flex gap-60"
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.4
        }
      },
      hidden: {}
    }}
  >
    {[
      { value: 232, label: "Clients", color: "text-yellow-400" },
      { value: 521, label: "Projects", color: "text-blue-400" },
      { value: 1453, label: "Hours Of Support", color: "text-green-400" },
      { value: 32, label: "Workers", color: "text-red-400" }
    ].map((stat, index) => (
      <motion.div
        key={stat.label}
        className="flex flex-col items-center"
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.8 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 12
            }
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h1 
          className={stat.color}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {stat.value}
        </motion.h1>
        <motion.p
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {stat.label}
        </motion.p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
      </div>
    </>
  );
};
