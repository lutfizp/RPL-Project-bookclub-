import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function VisiMisiPage() {

  return (
    <div className="App">
      <div className="navbar flex bg-rose-500 fixed z-25 rounded-b-lg w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="container flex justify-center"
        >
          <motion.a
           href="/About"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="Program"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            Program
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="/Update"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            Update
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="JoinNow"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            Join Now
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
                href="/"
                className="px-2 group hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
            >
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </motion.a>
        </motion.div>
      </div>
      <div className="hero-content flex-col lg:flex-col">
        <img
          src="images/upload.gif"
          className="max-w-lg sm:max-w-sm sm:max-h-sm sm:mt-8 rounded-lg"
          alt="Upload GIF"
        />
        <div className="mt-40 sm:mt-16">
          <h1 className="sm:max-w-sm sm:max-h-sm text-5xl font-bold">
            About
          </h1>
          <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify">
            ini about
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisiPage;
