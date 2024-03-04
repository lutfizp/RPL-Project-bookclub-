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
            >
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            <div class="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <a href="/About/VisiMisi" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Visi Misi</a>
                <a href="/About/LifeAtBookClub" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Life At Book Club</a>
                <a href="/About/SupportUs" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support us!</a>
            </div>
            </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="Program"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            Program
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
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
          >
            Update
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="JoinNow"
            className="px-2 group hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
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
          >
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
          </motion.a>
        </motion.div>
      </div>
      <div className="max-h-screen carousel carousel-vertical max-w-screen flex flex-col pt-16">
        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#F8EFE8] from-80% to-[#F8F0E5] flex"
          id="section-1"
          ref={ref1}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control1}
          >
            <div className="hero-content flex-col lg:flex-col">
              <div>
                <h1 className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Tinos', color:"#484848"}}>
                  Life At Serambi Buku
                </h1>
              </div>
              <img
                src="images/life_at_SerambiBuku.png"
                className="max-w-md sm:max-w-sm sm:max-h-sm rounded-lg"
                alt="About GIF"
              />
              <p className="sm:max-w-sm sm:max-h-sm py-2 text-justify animate-fade-up"
              style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic'}}>
              Menjadi member di sebuah komunitas produktif merupakan 
              pilihan yang terbaik bagi anda untuk menemukan jalan 
              perubahan di masa yang akan mendatang. Mengapa?
              </p>
            </div>
          </motion.div>
        </div>
        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFFFFF] from-95% to-[#E3C4CC] flex"
          id="section-2"
          ref={ref2}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control2}
          >
            <div className="hero-content flex-col lg:flex-col">
              <img
                src="images/upload.gif"
                className="max-w-lg sm:max-w-sm sm:max-h-sm sm:mt-8 rounded-lg"
                alt="Upload GIF"
              />
              <div className="mt-40 sm:mt-16">
                <h1 className="sm:max-w-sm sm:max-h-sm text-5xl font-bold">
                  Upload Dokumen!
                </h1>
                <p className="sm:max-w-sm sm:max-h-sm py-6 text-justify">
                  Kami menyediakan fasilitas untuk mengunggah dokumen, yang
                  nantinya akan disimpan secara aman di dalam basis data kami.
                  Dengan dukungan keamanan yang solid, dokumen yang diunggah
                  dapat dipertahankan integritas dan kerahasiaannya di dalam
                  sistem kami.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#E3C4CC] from-95% to-[#B39373] flex"
          id="section-3"
          ref={ref3}
        >
          <motion.div
            className="hero min-h-screen"
            variants={boxVariant}
            initial="hidden"
            animate={control3}
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="images/stamp.gif"
                className="max-w-lg sm:max-w-sm sm:max-h-sm rounded-lg"
                alt="Stamp GIF"
              />
              <div className="md:pl-12 animate-fade-right">
                <h1 className="sm:max-w-sm sm:max-h-sm text-5xl font-bold">
                  Single Stamp Feature!
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
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#B39373] from-95% to-[#B9DEAA] flex"
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
