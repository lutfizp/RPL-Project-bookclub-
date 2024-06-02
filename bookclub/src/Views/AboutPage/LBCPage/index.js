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
                <a href="/About/SupportUs" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support Us</a>
            </div>
            </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
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
                <a href="/Program/Freebies" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Freebies</a>
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
            <div className="mt-40 sm:mt-16" >
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-30px', position: 'sticky'}}>
                Life at Serambi Buku
              </h1>
              <p className="py-3 text-center animate-fade-up"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
                Mari kita lihat alasan mengapa kita perlu bergabung ke dalam klub baca buku.
              </p>
              <video width='520px' height='720px' controls autoPlay style={{marginLeft:'50px', marginTop:'10px'}}>
                <source src="/../images/video2.mp4" type="video/mp4"></source>
              </video>
      
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
            
            <div className="mt-40 sm:mt-16">
              
              <div style={{ 
                width: '1200px', 
                height: '170px', 
                backgroundColor: '#C8AE7D', 
                marginTop: '-40px', 
                position: "sticky",
                }}>  
              </div>

              <div style={{ 
                width: '1200px', 
                height: '120px', 
                backgroundColor: '#C8AE7D', 
                marginTop: '40px', 
                position: "sticky",
                }}>  
              </div>
              
              
            </div>
            
            
            <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-370px', position: 'sticky', marginRight: '1000px'}}>
                Our Team
            </pre>
            
            
            <div className="hero-content flex-col lg:flex-row">
              <img
              src="/../images/lutpi.jpg"
              className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
              alt="Stamp GIF"
              style={{ width: '150px', height: '150px', marginLeft: '-5px', marginTop: '-230px' }}
              />
            </div>
            <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '25px', marginTop: '-50px', position: 'sticky'}}>
              Lutfi Zaki Prabaswara
            </h1>
            <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '0px', position: 'sticky', marginLeft: '0px'}}>
              Founder, Executive Director
            </pre>
            <div className="hero-content flex-col lg:flex-row">
              <img
              src="/../images/alfiah.jpg"
              className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
              alt="Stamp GIF"
              style={{ width: '150px', height: '150px', marginLeft: '0px', marginTop: '230px' }}
              />
              <img
              src="/../images/hamzah.jpg"
              className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
              alt="Stamp GIF"
              style={{ width: '150px', height: '150px', marginLeft: '100px', marginTop: '230px' }}
              />
              <img
              src="/../images/fadhel1.jpeg"
              className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
              alt="Stamp GIF"
              style={{ width: '150px', height: '150px', marginLeft: '100px', marginTop: '230px' }}
              />
              <img
              src="/../images/fanina.jpg"
              className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
              alt="Stamp GIF"
              style={{ width: '150px', height: '150px', marginLeft: '100px', marginTop: '230px' }}
              />
            </div>
            <div className="hero-content flex-col lg:flex-row">
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '410px', position: 'sticky', marginLeft: '0px'}}>
                Alfiah
              </h1>
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '410px', position: 'sticky', marginLeft: '190px'}}>
                Hamzah
              </h1>
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '410px', position: 'sticky', marginLeft: '190px'}}>
                Fadhel
              </h1>
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '410px', position: 'sticky', marginLeft: '190px'}}>
                Fanina
              </h1>
            </div>
            
            <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '460px', position: 'sticky', marginLeft: '-800px'}}>
              Business Development
            </pre>
            <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '460px', position: 'sticky', marginLeft: '-270px'}}>
              Creative & Design
            </pre>
            <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '460px', position: 'sticky', marginLeft: '270px'}}>
              Content & Media
            </pre>
            <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '460px', position: 'sticky', marginLeft: '800px'}}>
              Program Director
            </pre>
            
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
                marginTop: '-300px', 
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
            <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '40px', marginTop: '-400px', position: 'sticky', marginRight: '450px'}}>
                Subscribe To Our Update!
            </pre>
            <pre className="text-4xl font-bold animate-fade-up " style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '17px', marginTop: '-300px', position: 'sticky', marginRight: '550px'}}>
                Get new content delivered directly to your inbox.
            </pre>
            <div className="mt-80 sm:mt-16" style={{ marginTop: '100px' }}>
                <div style={{ 
                    width: '1380px',  // Sesuaikan ukuran width
                    height: '300px', 
                    backgroundColor: '#484848', 
                    marginTop: '300px',  // Sesuaikan marginTop
                    marginLeft: '-10px',  // Sesuaikan marginLeft
                    borderRadius: '0px',
                    display: 'flex',
                    }}>
                    <aside style={{ marginLeft: '120px', marginTop: '40px' }}>
                    <img 
                        src="/../images/logo1.2.png" 
                        alt="Home"
                        style={{width: "100px", height: "auto"}} >
                      </img>
                      <p style={{ marginTop: '20px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
                        Serambi Buku<br/>Founded since 2015
                      </p>
                    </aside>
                    <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
                      <h6 className="card-title">About</h6>
                        <a href="/About/LifeAtBookClub" className="link link-hover">Life at BookClub</a><br />
                        <a href="/About/VisiMisi" className="link link-hover">Visi Misi</a><br />
                        <a href="/About/SupportUs" className="link link-hover">Support us</a><br />
                    </nav>
                    <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
                        <h6 className="card-title">Programs</h6>
                          <a href="/Program/BookTalk" className="link link-hover">BookTalk</a><br />
                          <a href="/Program/BookTalk" className="link link-hover">Discussion</a><br />
                          <a href="/Program/BookTalk" className="link link-hover">Webinar</a><br />
                          <a href="/Program/Competition" className="link link-hover">Competition</a><br />
                          <a href="/Program/Freebies" className="link link-hover">Freebies</a><br />
                    </nav>
                    <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
                          <h6 className="card-title">Company</h6>
                          <a href="/About/LifeAtBookClub" className="link link-hover">About us</a><br />
                          <a className="link link-hover">Career</a><br />
                          <a className="link link-hover">Privacy Police</a><br />
                    </nav>
                    <nav style={{ marginLeft: '150px', marginTop: '40px', color: '#F8F0E5', fontFamily: 'kaisei tokumin' }}>
                    <h6 className="card-title">Collaboration</h6>
                    <a href="https://wa.me/6281285183841" className="link link-hover">Contact us</a><br />
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