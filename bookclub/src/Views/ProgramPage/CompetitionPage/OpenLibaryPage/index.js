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
            <div className="hero-content flex-col lg:flex-row" style={{ }}>
              <div className="md:pr-20 animate-fade-left" style={{ flex: 30 }}>
                <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginRight:'-50px'}}>
                  Update
                </h1>
                <img
                src="/../images/update6.1.jpg"
                alt="About GIF"
                style={{ width: '500px', height: 'auto', marginTop: '30px' }}
              />
              </div>
              <div className="md:pr- animate-fade-left" style={{ marginTop: '70px' }}>
              <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '30px', marginRight:'-50px'}}>
                  BOOK REVIEW COMPETITION
                </h1>
              <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
                Halo Teman Serambi!! Bagi Teman Serambi yang memiliki kecintaan terhadap membaca dan menulis, Book Review Competition hadir kembali sebagai media bagi teman 
                Serambi yang ingin terlibat dalam kegiatan literasi yang menyenangkan dan penuh arti. Melalui kompetisi book review, Teman Serambi dapat melatih kemampuan 
                berfikir independent dan mendalam, melatih daya nalar, dan meningkatkan keterampilan analisis kritis tentang subject penting dari isi buku.

              </p>
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
          <div className="md:pr-20 md:pl-20 animate-fade-left" style={{ }}>
          <p className="sm:max-h-sm px-10 text-justify"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
            Kompetisi ini diharapkan dapat melahirkan perspektif yang beragam tentang isi buku, hal ini tentu akan memperkaya pengalaman membaca 
            para peserta dan juga menumbuhkan apresiasi mendalam terhadap isi dan penulis buku.

          </p>
          <p className="sm:max-h-sm px-10 text-justify"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
            Para peserta yang akan mengikuti Book Review Competition dapat memilih judul buku yang diinginkan dari berbagai genre dan tema, 
            dari karya non-fiksi yang memperluas wawasan sampai dengan novel yang mendebarkan. Ulasan terbaik akan membantu pembaca potensial 
            memahami garis besar argumen utama buku, mengapa buku tersebut penting, kelebihan dan kelemahannya.
            </p>
          <p className="sm:max-h-sm px-10 text-justify"style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px'}}>
            Timeline Kegiatan: 

            Pendaftaran dan Submit Dokumen : 22 Januari - 14 Februari 2024

            Penilaian: 15 Februari - 19 Februari 2024

            Pengumuman Pemenang : 20 Februari 2024

            Ketentuan dan Persyaratan: 

            1. Peserta merupakan Civitas Telkom University (Mahasiswa, Dosen, Pegawai)

            2. Pemilihan Buku yang diresensi dapat dilihat pada poster kegiatan atau pada informasi lebih lanjut.

            Link Pendaftaran dan informasi lebih lanjut:
              </p>
              <a
                  href="https://openlibrary.telkomuniversity.ac.id/home/information/id/279.html"
                  button className="btn transition ease-in-out delay-50 bg-[#C8AE7D] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white hover:border-white duration-500 px-8"
                  style={{ color:"#484848", marginLeft: '950px' }}
                  >
                    Join Now!
              </a> 
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
            
            <footer className="footer p-10 bg-[#222831] text-base-content" style= {{marginBottom:'-335px'}}>
                <aside>
                  <img src="/../images/logo1.png" style={{ width: '120px', height: '120px', marginTop:'-30px'}}></img>
                <p>Serambi Buku<br/>Founded since 2015</p>
                </aside> 
                <nav>
                  <h6 className="footer-title">Program</h6> 
                  <a href="/Program/BookTalk" className="link link-hover">BookTalk</a>
                  <a href="/Program/Competition" className="link link-hover">Competition</a>
                  <a href="/Program/Freebies" className="link link-hover">Freebies</a>
                </nav> 
                <nav>
                <h6 className="footer-title">Company</h6> 
                <a href="/About/LifeAtBookClub" className="link link-hover">About us</a>
                <a href="https://wa.me/6281285183841" className="link link-hover">Contact</a>
                <a href="/About/SupportUs" className="link link-hover">Support Us</a>
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
