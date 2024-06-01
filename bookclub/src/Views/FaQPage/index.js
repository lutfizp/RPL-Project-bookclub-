import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const LandingPage = () => {
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
    <div className="AboutPage">
      <div className="navbar flex fixed z-10 rounded-b-lg w-full" style={{ backgroundColor: '#C8AE7D' }}>
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
                <a href="/Vision" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support Us</a>
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
            src="/../images/logo1.2.png" 
            alt="Home" 
            style={{width: "75px", height: "40px"}} />
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
            <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] flex"
          id="section-3"
          ref={ref3}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control3}
          >
            <div style={{ 
              width: '500px', 
              height: '6px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '260px',
              marginLeft:'560px', 
              position: "sticky",
              borderRadius: '20px' }}>  
            </div>
            <div style={{ 
              width: '500px', 
              height: '6px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '-20px',
              marginLeft:'560px', 
              position: "sticky",
              borderRadius: '20px' }}>  
            </div>

            <div className="hero-content flex-col lg:flex-row">
            <p className="py-3 text-center animate-fade-up font-bold"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '25px', marginTop: '60px', marginRight: '50px', width:'500px'}}>
            Frequently Asked Questions:
            </p>
            <div className="mt-40 sm:mt-16" >
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '10px', width:'500px'}}>
            <span class="font-bold">1. Apakah komunitas ini Berbayar?</span> Tidak sama sekali, komunitas ini
            gratis sepenuhnya. Namun teman-teman bisa menyumbangkan finansial untuk mengembangkan komunitas kami.
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '20px', width:'500px'}}>
            <span class="font-bold">2. Benefit apa yang ditawarkan?</span> Bertemu rekan-rekan dengan hobi yang sama
            serta memberikan pengalaman yang lebih produktif.
            </p>
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '20px', width:'500px'}}>
            <span class="font-bold">3. Adakah batasan umur untuk bisa bergabung dengan komunitas ini?</span> Tidak ada.
            </p>
            </p>
            </div>
            </div>
          </motion.div>
        </div>
          </motion.div>
        </div>
        
        

        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] flex"
          id="section-3"
          ref={ref3}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control3}
          >
            <div style={{ 
              width: '6px', 
              height: '400px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '50px',
              marginLeft:'60px', 
              position: "sticky",
              borderRadius: '20px' }}>  
            </div>
            <div style={{ 
              width: '300px', 
              height: '70px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '-110px',
              marginRight:'-570px', 
              position: "sticky"}}>  
            </div>
            <div style={{ 
              width: '300px', 
              height: '70px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '115px',
              marginRight:'-770px', 
              position: "sticky"}}>  
            </div>
        
            <div className="hero-content flex-col lg:flex-row">
            <div className="mt-40 sm:mt-16" >
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '10px', width:'500px', marginLeft: '100px'}}>
            <span class="font-bold">1. We are officially registered as non-profit community</span>, 
            but currently we don't have proper system to accept personal donation. If you are interested
            to become a donor, please let us know through mail <span class="font-bold">KubuKita@gmail.com</span>
            </p>
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '20px', width:'500px', marginLeft: '100px'}}>
            We accept sponsored social media content, event, discussion as long as it alligns with our
            mission and values. Please send us email through <span class="font-bold">KubuPartner@gmail.com</span>
            </p>
            </div>
            <div className="mt-40 sm:mt-16" >
            <p className="py-3 text-center animate-fade-up font-bold"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '70px', marginTop: '-70px', marginLeft: '50px', width:'500px'}}>
            Financial
            </p>
            <p className="py-3 text-center animate-fade-up font-bold"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '70px', marginTop: '-20px', marginLeft: '150px', width:'500px'}}>
            Support
            </p>
            </div>
            
            </div>
          </motion.div>
        </div>
        
        
        <div
          className="carousel-item h-screen w-screen bg-[#FFF3C7] flex"
          id="section-5"
          ref={ref5}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control5}
          >
            <div className="mt-40 sm:mt-16">
              <div style={{ 
                width: '1000px', 
                height: '240px', 
                backgroundColor: '#C8AE7D', 
                marginTop: '-220px', 
                position: "sticky",
                borderRadius: '20px' }}>  
                <a
                  href="/JoinNow"
                  className="btn transition ease-in-out delay-50 bg-[#FFF3C7] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white hover:border-white duration-500 ..."
                  style={{ color:"#484848", marginTop:'150px', marginLeft:'700px' }}
                  >
                    Subscribe to Our Channel
                  </a>
              </div>
              
            </div>
            <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '40px', marginTop: '-300px', position: 'sticky', marginRight: '450px'}}>
                Subscribe To Our Update!
            </pre>
            <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '17px', marginTop: '-200px', position: 'sticky', marginRight: '550px'}}>
                Get new content delivered directly to your inbox.
            </pre>
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
};

export default LandingPage;