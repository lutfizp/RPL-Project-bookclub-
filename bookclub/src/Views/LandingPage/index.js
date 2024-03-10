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
    <div className="HomePage">
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
            href="/JoinNow"
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
            <div className="hero-content flex-col lg:flex-row" style={{ marginTop: '-100px' }}>
              <div className="md:pr-20 animate-fade-left" style={{ flex: 30 }}>
                <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px'}}>
                  Life at Serambi Buku
                </h1>
                <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
                  Menjadi member di sebuah komunitas produktif salah satunya adalah member 
                  di klub buku merupakan pilihan terbaik bagi anda untuk menemukan 
                  jalan perubahan di masa yang akan mendatang. Mengapa?
                </p>
                <a
                  href="/About/LifeAtBookClub"
                  className="btn transition ease-in-out delay-50 bg-[#C8AE7D] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white hover:border-white duration-500 ..."
                  style={{ marginRight: '190px', color:"#484848" }}
                >
                  See More
                </a>
                <a
                  href="/JoinNow"
                  className="btn transition ease-in-out delay-50 bg-[#C8AE7D] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white hover:border-white duration-500 ..."
                  style={{ color:"#484848" }}
                > 
                  Join Now!
                </a>
              </div>
              <img
                src="images/life_at_SerambiBuku.png"
                //className="max-w-full sm:max-w-sm sm:max-h-sm rounded-lg"
                alt="About GIF"
                style={{ width: '500px', height: '270px' }}
              />
            </div>
            <div style={{ 
              width: '840px', 
              height: '150px', 
              backgroundColor: '#C8AE7D', 
              marginTop: '380px', 
              position: "sticky",
              borderRadius: '20px' }}>  
            </div>
            <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '340px', position: 'relative'}}>
                  What They Say About us?
            </h1>
            <p style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '22px', marginTop: '440px', position: 'relative'}}
            > Scroll down below
            </p>
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

            <div className="hero-content flex-col lg:flex-row" style={{ marginTop: '50px' }}>
              <div className="mt-40 sm:mt-16"> 
                <div style={{ 
                  width: '400px', 
                  height: '140px', 
                  backgroundColor: '#C8AE7D', 
                  marginTop: '-60px', 
                  position: "sticky",
                  borderRadius: '20px' }}> 
                </div>

                <div style={{ 
                  width: '400px', 
                  height: '140px', 
                  backgroundColor: '#C8AE7D', 
                  marginTop: '10px', 
                  position: "sticky",
                  borderRadius: '20px' }}> 
                </div>

                <div style={{ 
                  width: '400px', 
                  height: '140px', 
                  backgroundColor: '#C8AE7D', 
                  marginTop: '10px', 
                  position: "sticky",
                  borderRadius: '20px' }}> 
                </div>
              </div>
              <img
                src="images/landingpage2.jpg"
                className="rounded-lg"
                alt="About GIF"
                style={{ width: '420px', height: '440px', marginLeft: '20px' }}
              />
            </div>
            <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '-340px', position: 'sticky', marginRight: '450px'}}>
                  Arell Saverro
            </h1>
            <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '18px', marginTop: '-220px', position: 'sticky', marginRight: '450px'}}>
            “Saya adalah ayah dari 3 anak. Saya mengalami 
            perubahan yang drastis tentang kehidupan setelah 
            menjadi member.”
            </p>
            <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '-30px', position: 'sticky', marginRight: '450px'}}>
                  Fauzan Dwi
            </h1>
            <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '18px', marginTop: '80px', position: 'sticky', marginRight: '450px'}}>
            “Saya mendapatkan banyak informasi mengenai 
            lomba-lomba yang saya minati, dan saya 
            menjadi produktif sekali!”
            </p>
            <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '20px', marginTop: '270px', position: 'sticky', marginRight: '450px'}}>
                  Mahar Ben
            </h1>
            <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '18px', marginTop: '380px', position: 'sticky', marginRight: '450px'}}>
            “Sejak dahulu tahun 80an, saya suka sekali 
            membaca buku sejarah. Dan disinilah tempat 
            saya menemukan jati diri.”
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
            
            <div className="mt-40 sm:mt-16">
              <div style={{ 
                width: '1000px', 
                height: '250px', 
                backgroundColor: '#C8AE7D', 
                marginTop: '10px', 
                position: "sticky",
                borderRadius: '20px' }}>  
              </div>
              <h1 className="text-4xl font-bold animate-fade-up text-center" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '10px', position: 'sticky'}}>
                  Our Media Partner
              </h1>
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="images/cnbc.png"
                  className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                  alt="Stamp GIF"
                  style={{ width: '240px', height: '120px', marginLeft: '-90px' }}
                />
                <img
                  src="images/gramedia.png"
                  className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                  alt="Stamp GIF"
                  style={{ width: '130px', height: '120px', marginRight: '10px' }}
                />
                <img
                  src="images/mandiri.png"
                  className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                  alt="Stamp GIF"
                  style={{ width: '160px', height: '120px', marginRIght: '20px' }}
                />
                <img
                  src="images/tokopedia.png"
                  className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                  alt="Stamp GIF"
                  style={{ width: '140px', height: '120px', marginRight: '20px' }}
                />
                <img
                  src="images/unnes.png"
                  className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                  alt="Stamp GIF"
                  style={{ width: '100px', height: '120px', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div className="hero-content flex-col lg:flex-row">
              <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-300px', position: 'sticky', marginRight: '200px'}}>
                By The
                Number
              </pre>
              <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-300px', position: 'sticky', marginRight: '200px'}}>
                5.900+
              </pre>
              <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-200px', position: 'sticky', marginRight: '150px'}}>
                1.000+
              </pre>
            </div>
            <div className="hero-content flex-col lg:flex-row">
              <pre className="text-4xl animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '-230px', position: 'sticky', marginRight: '130px'}}>
                Founded in 2015,
              </pre>
              <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '-250px', position: 'sticky', marginRight: '-90px'}}>
                Active Members listed in our 
                community until now.
              </pre>
              <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '-150px', position: 'sticky', marginLeft: '30px'}}>
              Partners collaborating to create 
              activities, events, and contents.
              </pre>
            </div>
            <div className="hero-content flex-col lg:flex-row">
              <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-90px', position: 'sticky', marginLeft: '250px'}}>
                93.000+
              </pre>
              <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginTop: '-10px', position: 'sticky', marginLeft: '220px'}}>
                52+
              </pre>
            </div>
            <div className="hero-content flex-col lg:flex-row">
              <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '-40px', position: 'sticky', marginLeft: '300px'}}>
                Audience in our social media.
              </pre>
              <pre className="sm:max-w-sm sm:max-h-sm py-6 text-justify" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '15px', marginTop: '40px', position: 'sticky', marginLeft: '70px'}}>
                Active Volunteers running our community.
              </pre>
            </div>
            
              
            
            
          </motion.div>
        </div>
        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] flex"
          id="section-4"
          ref={ref4}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control4}
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="images/stampfix.gif"
                className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                alt="Stamp GIF"
              />
              <div className="md:pl-12 animate-fade-right">
                <h1 className="sm:max-w-sm sm:max-h-sm text-5xl font-bold">
                  Bulk Stamp Feature!
                </h1>
                <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify">
                  Selain itu, kami memberikan kemampuan untuk melakukan stempel
                  e-materai, baik untuk satu dokumen atau dalam jumlah besar
                  (bulk document). Ini memungkinkan pengguna untuk memberikan
                  cap digital e-materai pada dokumen secara mudah dan efisien,
                  memberikan fleksibilitas dalam penanganan proses stempel pada
                  satu dokumen atau sekaligus pada sejumlah besar dokumen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div
          className="carousel-item h-screen w-screen bg-[#B9DEAA] flex"
          id="section-5"
          ref={ref5}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control5}
          >
            <div className="hero-content flex-col lg:flex-row">
              <div className="md:pr-12 animate-fade-left">
                <h1 className="sm:max-w-sm sm:max-h-sm text-5xl sm:pt-16 font-bold animate-fade-up">
                  Digital Sign Feature!
                </h1>
                <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify whitespace-pre-line">
                  Kami juga menawarkan fitur tandatangan digital untuk dokumen,
                  baik dalam skala satu dokumen atau secara masif (bulk).
                  Fasilitas ini memungkinkan pengguna untuk dengan mudah
                  menerapkan tanda tangan digital pada dokumen mereka,
                  memberikan kemudahan dan efisiensi, terutama saat menangani
                  tandatangan pada satu dokumen atau sejumlah besar dokumen
                  secara bersamaan.
                </p>
                <a
                  href="/paneladminpage"
                  className="btn transition ease-in-out delay-50 bg-[#FF6633] shadow-xl text-black border-black hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white hover:border-white duration-500 ..."
                >
                  Coba Demo
                </a>
              </div>
              <img
                src="images/sign.gif"
                className="max-w-full sm:max-w-sm sm:max-h-sm rounded-lg bg-cover"
                alt="Sign GIF"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
