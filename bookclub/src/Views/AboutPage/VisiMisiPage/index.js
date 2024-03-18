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
      <div className="navbar flex bg-rose-500 fixed z-25 rounded-b-lg w-full" style={{ backgroundColor: '#C8AE7D' }}>
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
            <div class="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <a href="/About/VisiMisi" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Visi Misi</a>
                <a href="/About/LifeAtBookClub" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Life At Book Club</a>
                <a href="/Vision" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support Us</a>
            </div>
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
            <div class="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <a href="/Program/BookTalk" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">BookTalk, Discussion, Bootcamp</a>
                <a href="/Program/Competition" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Competition</a>
                <a href="/Program/" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Freebies</a>
            </div>
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
                <img 
                  src="images/logo1.2.png" 
                  alt="Home" 
                  style={{width: "75px", height: "40px"}} 
                />
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
