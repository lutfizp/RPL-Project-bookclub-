import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function UpdatePage() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="App h-full" style={{ backgroundColor: '#FFF3C7', overflowX: 'hidden' }}>
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
            style={{ fontFamily: 'kaisei tokumin' }}
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
              <a href="/About/VisiMisi" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Visi Misi</a>
              <a href="/About/LifeAtBookClub" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Life At Book Club</a>
              <a href="/Vision" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Vision</a>
            </div>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="/Program"
            className="px-2 group text-yellow-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{ fontFamily: 'kaisei tokumin' }}
          >
            Program
            <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
              <a href="/Program/BookTalk" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">BookTalk, Discussion, Bootcamp</a>
              <a href="/Program/Competition" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Competition</a>
              <a href="/Program/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Freebies</a>
            </div>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="/Contact Us"
            className="px-2 group hover:text-yellow-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{ fontFamily: 'kaisei tokumin' }}
          >
            Contact Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="/"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{ fontFamily: 'kaisei tokumin' }}
          >
            <img
              src="images/logo1.2.png"
              alt="Home"
              style={{ width: "75px", height: "40px" }}
            />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
        </motion.div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] py-20">
        <div className="container">
          <div className="w-[70%] flex mx-auto mt-12 flex-wrap">
            <div className="w-[70%] sm:w-[50%]">
              <h1 className="mb-5 mr-80 m:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '30px', marginLeft: '-35px' }}>
                Update
              </h1>
              <div className="w-[30%] sm:w-[50%] ml-5 mt-7">
                <div className="flex mt-7 w-full justify-between">
                  <div className="w-[30%] sm:w-[30%] mr-80">
                    <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D] shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-25px' }}>
                      <figure className="px-4 pt-5">
                        <img src="/images/update1.jpg"
                          alt="Shoes"
                          style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                        />
                      </figure>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                      <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginLeft: '15px', marginTop: '-30px' }}>
                        Event
                      </p>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color: "#484848", fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                        Memori dan Metafora di Flores Writers Festival 3
                      </h1>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '5px', marginLeft: '-16px' }}>
                          Read On
                        </p>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '14px', marginTop: '37px', position: 'absolute', marginTop: '34px', transform: 'translateY(-50%)', marginLeft: '-16px' }}>
                          February 3, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] sm:w-[30%] ml-75 mr-80">
                    <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D] shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-50px' }}>
                      <figure className="px-4 pt-5">
                        <img src="/images/update2.jpg"
                          alt="Shoes"
                          style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                        />
                      </figure>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                      <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginLeft: '15px', marginTop: '-30px' }}>
                        Event
                      </p>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color: "#484848', fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                        Flores Writers Festival 2022 di Ende
                      </h1>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '5px', marginLeft: '-16px' }}>
                          Read On
                        </p>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '14px', marginTop: '37px', position: 'absolute', marginTop: '34px', transform: 'translateY(-50%)', marginLeft: '-16px' }}>
                          February 3, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] sm:w-[30%] mr-80">
                    <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D] shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-80px' }}>
                      <figure className="px-4 pt-5">
                        <img src="/images/update3.jpg"
                          alt="Shoes"
                          style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                        />
                      </figure>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginLeft: '-15px', marginTop: '3px' }}>
                          Competition
                        </p>
                        <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color: "#484848", fontSize: '16px', marginTop: '-20px', wordSpacing: '1px', marginLeft: '-15px' }}>
                          Lomba Resensi Buku & Speech Contest
                        </h1>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '5px', marginLeft: '-15px' }}>
                          Read On
                        </p>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '14px', marginTop: '-50px', marginTop: '-11px', marginLeft: '-15px' }}>
                          February 3, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] sm:w-[30%] mr-80 float-left bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7]" style={{ backgroundColor: '#FFF3C7' }}>
                    <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D] shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-750px', backgroundColor: '#8B785E', marginTop: '52px' }}>
                      <figure className="px-4 pt-5">
                        <img src="/images/update4.jpg"
                          alt="Shoes"
                          style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                        />
                      </figure>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative', textAlign: 'left' }}> </div>
                      <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginLeft: '15px', marginTop: '-30px' }}>
                        Freebies
                      </p>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color: "#484848', fontSize: '16px', marginTop: '-3px', wordSpacing: '1px', marginLeft: '1px', wordSpacing: '8px', padding: '0 15px', textAlign: 'left' }}>
                        2024 Freebies: Printable & Phone Wallpapers
                      </h1>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '5px', marginLeft: '-16px' }}>
                          Read On
                        </p>
                        <p style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '14px', marginTop: '37px', position: 'absolute', marginTop: '34px', transform: 'translateY(-50%)', marginLeft: '-16px' }}>
                          February 3, 2024
                        </p>
                      </div>
                    </div>
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