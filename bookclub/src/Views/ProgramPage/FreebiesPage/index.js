import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const FreebiesPage = () => {
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
            <div className="hero-content flex-col lg:flex-row" style={{ marginTop: '-80px' }}>
              <div className="md:pr-20 animate-fade-left" style={{ flex: 30 }}>
                <h1 className="mb-5 mr-80 m:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '30px', marginLeft: '-35px', position: 'relative', top: '-100px' }}>
                  Freebies
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
    
    <div className="mt-20 sm:mt-16">
      <div style={{ 
        width: '1000px', 
        height: '240px', 
        backgroundColor: '#C8AE7D', 
        marginTop: '-220px',  
        marginLeft: '-40px',
        borderRadius: '25px',
        display: 'flex'
      }}>
        <a
          href="/JoinNow"
          className="btn transition ease-in-out delay-50 bg-[#FFF3C7] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white duration-500 ..."
          style={{ 
            backgroundColor:"#F8F0E5", 
            marginTop:'165px', 
            marginLeft:'720px', 
            fontFamily: 'Kaisei Tokumin', 
            borderRadius: '50px', 
            color:"#484848", 
            fontSize: '15px',
          }}
        >
          Subscribe For Website Update
        </a>
      </div>
      <pre className="text-4xl font-bold animate-fade-up" style={{ 
        fontFamily: 'Kaisei Tokumin', 
        color:"#484848", 
        fontSize: '40px', 
        marginTop: '-220px', 
        marginLeft: '-20px'
      }}>
        Subscribe To Our Update!
      </pre>
      <pre className="text-4xl animate-fade-up" style={{ 
        fontFamily: 'Kaisei Tokumin', 
        color:"#484848", 
        fontSize: '20px', 
        marginTop: '10px', 
        marginLeft: '-20px'
      }}>
        Get new content delivered directly to your inbox.
      </pre>
    </div>

    
    <div className="mt-80 sm:mt-16" style={{ marginTop: '100px' }}>  
      <div style={{ 
        width: '1400px',  // Sesuaikan ukuran width
        height: '220px', 
        backgroundColor: '#484848', 
        marginTop: '300px',  // Sesuaikan marginTop
        marginLeft: '-20px',  // Sesuaikan marginLeft
        borderRadius: '25px',
        display: 'flex',
      }}>
        <aside style={{ marginLeft: '120px', marginTop: '40px' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p style={{ marginTop: '20px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
            Serambi Buku<br/>Founded since 2015
          </p>
        </aside>
        <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
          <h6 className="card-title">About</h6>
          <a className="link link-hover">Life at BookClub</a><br />
          <a className="link link-hover">Visi Misi</a><br />
          <a className="link link-hover">Support us</a><br />
        </nav>
        <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
          <h6 className="card-title">Programs</h6>
          <a className="link link-hover">BookTalk</a><br />
          <a className="link link-hover">Discussion</a><br />
          <a className="link link-hover">Webinar</a><br />
          <a className="link link-hover">Competition</a><br />
          <a className="link link-hover">Freebies</a><br />
        </nav>
        <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
          <h6 className="card-title">Company</h6>
          <a className="link link-hover">About us</a><br />
          <a className="link link-hover">Career</a><br />
          <a className="link link-hover">Privacy Police</a><br />
        </nav>
        <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
          <h6 className="card-title">Collaboration</h6>
          <a className="link link-hover">Contact us</a><br />
        </nav>
      </div>
    </div>
  </motion.div>
</div>
</div>
</div>

  );
}


export default FreebiesPage;
