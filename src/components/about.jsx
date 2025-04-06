import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
import { images } from "../constant/images";
import { FaCheckCircle, FaClipboardCheck, FaGem, FaHdd } from "react-icons/fa";

const DesktopAnimation = ({ children, animation }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView && window.innerWidth >= 1024) {
      controls.start(animation);
    }
  }, [controls, inView, animation]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });

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
  <div className="flex justify-center items-center flex-col gap-4 px-4">
    <motion.p
      className="text-gray-400 text-lg font-bold text-center md:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      About Us
    </motion.p>
    <motion.h2
      className="text-3xl font-bold font-[Satisfy] text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Learn More <span className="text-red-500">About Us</span>
    </motion.h2>
  </div>

  <div className="about-content flex flex-col md:flex-row mt-10 gap-4 md:gap-10 px-4 md:px-0">
    {/* Left Side - Image & Booking */}
    <motion.div
      className="w-full md:max-w-[700px] h-auto md:h-[660px] flex flex-col gap-4"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        className="w-full md:w-[700px] h-[300px] md:h-[660px] object-cover rounded-lg"
        src={images.about}
        alt="Restaurant"
      />
      <motion.div
        className="w-full md:w-[660px] flex flex-col gap-4 shadow-2xl bg-gray-700 p-4 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-white text-xl md:text-2xl font-bold text-center">Book a Table</h3>
        <h2 className="text-red-500 font-extrabold text-xl md:text-2xl text-center">
          +1 5589 55488 55
        </h2>
      </motion.div>
    </motion.div>

    {/* Right Side - Restaurant Info */}
    <motion.div
      className="right-about flex flex-col gap-4 w-full md:w-auto"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <motion.p
        className="text-gray-500 text-base md:text-lg px-2 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Welcome to <span className="font-bold text-red-500">Yummy</span>, where passion meets flavor.
        We serve dishes made from <strong>fresh, locally sourced ingredients</strong>, ensuring every bite is a burst of authenticity.
        Whether you're here for a casual meal or a fine dining experience, <strong>our chefs craft every dish with love</strong>.
      </motion.p>

      <motion.ul
        className="flex flex-col gap-4 text-gray-500 font-bold mb-4 px-2 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <li key={i} className="flex items-center gap-2 text-sm md:text-base">
            <FaCheckCircle className="text-green-500 min-w-[20px]" />
            <span>
              {[
                "Farm-to-table freshness in every dish.",
                "A warm and cozy ambiance perfect for any occasion.",
                "Authentic recipes infused with modern creativity."
              ][i]}
            </span>
          </li>
        ))}
      </motion.ul>

      <motion.p
        className="text-gray-500 text-base md:text-lg px-2 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Join us for an unforgettable dining experience. Our flavors tell a <strong>story of tradition and innovation</strong>—
        a culinary journey that <strong>satisfies the soul</strong>. 🍽️✨
      </motion.p>

      <motion.a
        href="#"
        className="w-full px-2 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <img
          className="w-full h-[300px] md:h-[600px] object-cover rounded-lg"
          src={images.about2}
          alt="Delicious Food"
        />
      </motion.a>
    </motion.div>
  </div>
</motion.div>

        {/* Why Choose Us Section */}
        
<div className="why-section mt-10 flex flex-col md:flex-row gap-4 pb-6 justify-center items-center">
  <div className="container px-4 md:px-12 flex flex-col md:flex-row gap-4 justify-start items-start">
    
    {/* Left Side - Main Reason */}
    <div className="bg-red-600 w-full md:max-w-[360px] h-auto md:h-[630px] flex flex-col p-6 md:p-8 rounded-xl text-white shadow-lg">
      <h3 className="text-3xl md:text-4xl text-amber-300 font-bold font-mono mb-4">
        Why Choose Yummy?
      </h3>
      <p className="text-lg md:text-2xl mb-6">
        At Yummy, we believe food should be more than just a meal—it should be an experience.
        Our commitment to quality, innovation, and customer satisfaction sets us apart.
      </p>
      <button className="rounded-3xl mx-auto md:mx-20 p-3 text-red-600 font-bold bg-gray-100 hover:bg-gray-200 transition-all">
        Learn More
      </button>
    </div>

    {/* Right Side - Key Features */}
    <div className="infos grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Card 1 */}
      <div className="bg-blue-700 h-auto md:h-[630px] flex flex-col p-6 md:p-8 rounded-xl text-white text-center shadow-lg">
        <div className="text-6xl md:text-8xl p-4 md:p-9 flex items-center justify-center">
          <FaClipboardCheck />
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-4">
          Certified Excellence
        </h4>
        <p className="text-base md:text-xl">
          We maintain high culinary standards and a certified kitchen, ensuring every dish meets premium quality.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-purple-700 h-auto md:h-[630px] flex flex-col p-6 md:p-8 rounded-xl text-white text-center shadow-lg">
        <div className="text-6xl md:text-8xl p-4 md:p-9 flex items-center justify-center">
          <FaGem />
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-4">
          Premium Ingredients
        </h4>
        <p className="text-base md:text-xl">
          From organic vegetables to hand-selected meats, we use only the finest ingredients for an unforgettable flavor.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-emerald-700 h-auto md:h-[630px] flex flex-col p-6 md:p-8 rounded-xl text-white text-center shadow-lg">
        <div className="text-6xl md:text-8xl p-4 md:p-9 flex items-center justify-center">
          <FaHdd />
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-4">
          Advanced Culinary Tech
        </h4>
        <p className="text-base md:text-xl">
          We blend traditional cooking with modern technology, ensuring efficiency without compromising quality.
        </p>
      </div>
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
  className="relative bg-cover bg-center h-auto md:h-[400px] font-extrabold flex items-center justify-center py-12 md:py-0 text-white"
  style={{ backgroundImage: `url(${images.stats})` }}
>
  <motion.div
    className="absolute inset-0 bg-black bg-opacity-60"
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 0.4 : 0 }}
    transition={{ duration: 0.8 }}
  />

  <motion.div
    className="relative z-10 w-full px-4"
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
    <div className="grid grid-cols-2 md:flex gap-8 md:gap-60 justify-center">
      {[
        { value: 232, label: "Clients", color: "text-yellow-400" },
        { value: 521, label: "Projects", color: "text-blue-400" },
        { value: 1453, label: "Hours Of Support", color: "text-green-400" },
        { value: 32, label: "Workers", color: "text-red-400" }
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center p-4"
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
            className={`${stat.color} text-2xl md:text-3xl`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {stat.value}
          </motion.h1>
          <motion.p
            className="mt-2 text-sm md:text-base text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.div>
      </div>
    </>
  );
};
