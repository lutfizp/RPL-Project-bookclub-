import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";




function UpdatePage() {
  
  return (
    <div className="App" style={{ backgroundColor: '#8B785E' }}>
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
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </motion.a>
          </motion.div>
      </div>
      <div class="w-full bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] py-20">
  <div class="container">
    <div class="w-[70%] flex mx-auto mt-12">
      <div className="w-[70%] sm:w-[90%]">
        <h1 className="mb-5 sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{fontFamily: 'kaisei tokumin', color:"#484848", fontSize: '30px'}}>
          Update
        </h1>
        <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl" style={{ width: '215px', height: '315px', borderRadius: '30px' }}>
  <figure className="px-4 pt-4">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" 
    alt="Shoes" 
    style={{ width: '182px', height: '168px', borderRadius: '30px' }}
    />
  </figure>
  <div className="card-body text-justify"style={{ marginTop: '-30px' }}>
    <h1 className="card-title" style={{ fontFamily: 'kaisei tokumin', color:"#F8F0E5", textAlign: 'justify', fontSize: '13px'}}>Freebies</h1>
    <h2 className="card-title" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '-12px', wordSpacing: '1px' }}>Memori dan Metafora di Flores Writers Festival 3</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      {/* Jika Anda ingin menambahkan tombol atau tindakan lainnya, letakkan di sini */}
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
        </div>
        </div>
       
      );
    }
export default UpdatePage;
