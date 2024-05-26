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
            <div style={{ 
              width: '1200px', 
              height: '350px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '100px', 
              position: "sticky" }}>  
              </div>
            <div className="mt-40 sm:mt-16" >
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-220px', position: 'sticky', marginRight:'900px'}}>
                Support Us!
              </h1>
              
            </div>
            <p className="py-3 text-center animate-fade-up"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '25px', marginTop: '90px', width:'1000px'}}>
            Reading habits and literacy are not often considered urgent issues. 
            However, we deeply believe that every human’s literacy skill and their 
            ability to gain knowledge and criticize information will bring a long-lasting 
            impact; both for themselves and for the people around them.
            </p>
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
            <div style={{ 
              width: '120px', 
              height: '45px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '-30px',
              marginRight:'675px', 
              position: "sticky"}}>  
              </div>
            <div className="hero-content flex-col lg:flex-row">
            <p className="py-3 text-center animate-fade-up font-bold"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '25px', marginTop: '-70px', marginRight: '50px', width:'500px'}}>
            If you’re interested in our causes, you can support us by doing:
            </p>
            <div className="mt-40 sm:mt-16" >
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '10px', width:'500px'}}>
            <span class="font-bold">1. Follow us on social media</span>, especially Instagram. Interact (Like, Comment, Share)
            with our content and we'll be glad if you tag us on your book review and recommendation,
            or simply put hastag <span class="font-bold">#KubuKita</span>
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '20px', width:'500px'}}>
            <span class="font-bold">2. Join our event and discussion</span>. Give your feedback on the survey because that's how we
            measure our impact
            </p>
            <p className="py-3 text-align-left animate-fade-up"style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '23px', marginTop: '20px', width:'500px'}}>
            <span class="font-bold">3. Spread the words</span>, bring your reading buddies to the community.
            </p>
            </p>
            </div>
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
            
            <footer className="footer p-10 bg-base-200 text-base-content" style= {{marginBottom:'-335px'}}>
                <aside>
                  <img src="/../images/logo1.png" style={{ width: '120px', height: '120px', marginTop:'-30px'}}></img>
                <p>Serambi Buku<br/>Founded since 2015</p>
                </aside> 
                <nav>
                  <h6 className="footer-title">Services</h6> 
                  <a className="link link-hover">Branding</a>
                  <a className="link link-hover">Design</a>
                  <a className="link link-hover">Marketing</a>
                  <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                </nav>
              </footer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;