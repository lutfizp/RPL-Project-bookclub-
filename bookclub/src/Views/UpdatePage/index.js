import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const UpdatePage = () => {
  const control1 = useAnimation();
  const [ref1, inView1] = useInView();

  const control2 = useAnimation();
  const [ref2, inView2] = useInView();

  const control3 = useAnimation();
  const [ref3, inView3] = useInView();

  const control4 = useAnimation();
  const [ref4, inView4] = useInView();

  const control5 = useAnimation();
  const [ref5, inView5] = useInView();

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    }
  }, [control1, inView1]);
  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  }, [control2, inView2]);
  useEffect(() => {
    if (inView3) {
      control3.start("visible");
    }
  }, [control3, inView3]);
  useEffect(() => {
    if (inView4) {
      control4.start("visible");
    }
  }, [control4, inView4]);
  useEffect(() => {
    if (inView5) {
      control5.start("visible");
    }
  }, [control5, inView5]);

  
  return (
    
    <div className="FreebiesPage" style={{ overflowX: 'hidden' }}>
      <div className="navbar flex fixed z-10 rounded-b-lg w-full" style={{ backgroundColor: '#C8AE7D', overflowX: 'hidden'}}>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 20 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="container flex justify-center"
        >
            <motion.a
            href="/About"
            className="relative px-2 group hover:text-white"
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
            className="px-2 group hover:text-white"
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
            href="/Update"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{fontFamily: 'kaisei tokumin'}}
          >
            Update
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="/JoinNow"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{fontFamily: 'kaisei tokumin'}}
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
            style={{fontFamily: 'kaisei tokumin'}}
          >
            <img 
            src="images/logo1.2.png" 
            alt="Home" 
            style={{width: "80px", height: "auto"}} />
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
        </motion.div>
      </div>
      <div className="max-h-screen carousel carousel-vertical max-w-screen flex flex-col pt-16">
        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-80% to-[#FFF3C7] flex"
          id="section-1"
          ref={ref1}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control1}
          >
            <div className="hero-content flex-col lg:flex-row" style={{ marginTop: '-50px' }}>
              <div className="md:pr-20 animate-fade-left" style={{ flex: 30 }}>
                <h1 className="mb-5 mr-80 m:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '30px', marginLeft: '-35px', marginTop: '90px' }}>
                  Update
                </h1>
                <div className="w-[30%] sm:w-[50%] ml-5 mt-2" style={{ marginTop: '-70px' }}> 
                  <div className="flex mt-7 w-full justify-between">
                    <div className="w-[30%] sm:w-[30%] mr-80">
                      <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-25px', marginTop: '72px' }}>
                      <figure className="px-4 pt-5">
                      <img src="/images/update1.jpg" 
                      alt="Shoes" 
                      style={{ width: '245px', height: '230px', borderRadius: '24px'}}
                      />
                      </figure>
                      <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                        <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-20px', wordSpacing: '1px', marginLeft: '15px' }}>
                          2024 Freebies: Printables & Phone Wallpapers
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="w-[30%] sm:w-[30%] ml-75 mr-100">
                  <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-338px', marginTop: '165px'}}>
                    <figure className="px-4 pt-5">
                      <img src="/images/update2.jpg" 
                      alt="Shoes" 
                      style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                      />
                    </figure>
                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                        2023 Freebies: Printables & Phone Wallpapers
                      </h1>
                  </div>
                </div>
                <div className="w-[30%] sm:w-[30%] ml-75 mr-100">
                  <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-30px', marginTop: '165px'}}>
                    <figure className="px-4 pt-5">
                      <img src="/images/update2.jpg" 
                      alt="Shoes" 
                      style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                      />
                    </figure>
                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                        2022 Freebies: Printables & Phone Wallpapers
                      </h1>
                  </div>
                </div>
            </div>
               
          </motion.div>
        </div>

        <div
      className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] flex"
      id="section-2"
      ref={ref2}
    >
      <motion.div
        className="hero min-h-screen"
        variants={boxVariant}
        initial="hidden"
        animate={control2}
      >
        
        <div className="hero-content flex-col lg:flex-row" style={{ marginTop: '-50px' }}>
          <div className="md:pr-20 animate-fade-left" style={{ flex: 30 }}>
            <div className="w-[30%] sm:w-[50%] ml-5 mt-2" style={{ marginTop: '-70px' }}> 
              <div className="flex mt-7 w-full justify-between">
                <div className="w-[30%] sm:w-[30%] mr-80">
                  <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-15px', marginTop: '110px' }}>
                    <figure className="px-4 pt-5">
                      <img src="/images/update1.jpg" 
                        alt="Shoes" 
                        style={{ width: '245px', height: '230px', borderRadius: '24px'}}
                        />
                    </figure>
                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                      <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-50px', wordSpacing: '1px', marginLeft: '15px' }}>
                        Update4
                      </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="w-[30%] sm:w-[30%] ml-75 mr-100">
              <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '10px', marginTop: '60px'}}>
                <figure className="px-4 pt-5">
                  <img src="/images/update2.jpg" 
                    alt="Shoes" 
                    style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                    />
                </figure>
                <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                  <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                    Update5
                  </h1>
              </div>
            </div>
          </div>
        <div className="w-[30%] sm:w-[30%] ml-75 mr-100">
          <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '80px', marginTop: '20px'}}>
            <figure className="px-4 pt-5">
              <img src="/images/update2.jpg" 
              alt="Shoes" 
              style={{ width: '245px', height: '194px', borderRadius: '24px' }}
              />
            </figure>
            <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
              <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-12px', wordSpacing: '1px', marginLeft: '15px' }}>
                Update6
              </h1>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
      
  </div>







  );
}


export default UpdatePage;
