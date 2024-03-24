import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FreebiesPage() {
    return (
        <div className="App" style={{ backgroundColor: '#FFF3C7', overflowX: 'hidden'  }}>
           <div className="App overflow-hidden"></div>
          <div className="navbar flex fixed z-10 rounded-b-lg w-full" style={{ backgroundColor: '#C8AE7D' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 20 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="container flex justify-center"
            >
              <motion.a
               href="/About"
                className="px-2 group hover:text-yellow-950"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                style={{fontFamily: 'kaisei tokumin'}}
              >
                About
                 <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                <div class="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
                    <a href="/About/VisiMisi" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Visi Misi</a>
                    <a href="/About/LifeAtBookClub" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Life At Book Club</a>
                    <a href="/Vision" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Vision</a>
                </div>
                </motion.a>
              <div className="divider divider-horizontal bg-white w-auto"></div>
              <motion.a
                href="/Program"
                className="px-2 group text-yellow-950"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                style={{fontFamily: 'kaisei tokumin'}}
              >
                Program
                <div class="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
                    <a href="/Program/BookTalk" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">BookTalk, Discussion, Bootcamp</a>
                    <a href="/Program/Competition" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Competition</a>
                    <a href="/Program/" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Freebies</a>
                </div>
              </motion.a>
              <div className="divider divider-horizontal bg-white w-auto"></div>
              <motion.a
                href="/Contact Us"
                className="px-2 group hover:text-yellow-950"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                style={{fontFamily: 'kaisei tokumin'}}
              >
                Contact Us
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </motion.a>
              <div className="divider divider-horizontal bg-white w-auto"></div>
              <motion.a
                    href="/"
                    className="px-2 group hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.3 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    style={{fontFamily: 'kaisei tokumin'}}
                >
                   <img 
                    src="images/logo1.2.png" 
                    alt="Home" 
                    style={{width: "75px", height: "40px"}} />
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                </motion.a>
              </motion.div>
          </div>
          </div>
    );
}

export default FreebiesPage;