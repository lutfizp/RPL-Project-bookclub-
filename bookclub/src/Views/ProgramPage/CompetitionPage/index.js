import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CompetitionPage() {
    const { ref, inView } = useInView();

    return (
        <div>
            <div className="App" style={{ backgroundColor: '#FFF3C7', overflowX: 'hidden' }}>
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
                        <img 
                            src="images/logo1.2.png" 
                            alt="Home" 
                            style={{width: "75px", height: "40px"}} />
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                        </motion.a>
                        </motion.div>
                        </div>
                        </div>
            <div className="w-full bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] py-20">
                <div className="container">
                    <div className="w-[70%] flex mx-auto mt-12 flex-wrap">
                        <div className="w-[70%] sm:w-[50%]">
                            <h1 className="mb-5 mr-80 m:max-w-sm sm:max-h-sm text-4xl font-bold animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color: "#484848", fontSize: '30px', marginLeft: '-35px' }}>
                                Competition
                            </h1>
                            <div className="w-[30%] sm:w-[50%] ml-5 mt-7">
                                <div className="flex mt-7 w-full justify-between">
                                <div className="w-[30%] sm:w-[30%] mr-80">
                                <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-25px' }}>
                                    <figure className="px-4 pt-5">
                                    <img src="/images/update3.jpg"
                                    alt="Shoes" 
                                    style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                                    />
                                    </figure>
                                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                                    <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-30px', wordSpacing: '1px', marginLeft: '15px' }}>
                                        Lomba Resensi Buku & Speech Contest
                                    </h1>
                                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                                    <p style={{ fontFamily: 'kaisei tokumin', color:"#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '25px', marginLeft: '-16px'}}>
                                    February 3, 2024
                                    </p>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="w-[30%] sm:w-[30%] ml-75 mr-80">
                                    <div className="card677777 bg-gradient-to-b from-[#C8AE7D] from-95% to-[#C8AE7D]  shadow-xl animate-fade-up" style={{ width: '245px', height: '355px', borderRadius: '29px', marginLeft: '-50px' }}>
                                    <figure className="px-4 pt-5">
                                    <img src="/images/update6.jpg" 
                                    alt="Shoes" 
                                    style={{ width: '245px', height: '194px', borderRadius: '24px' }}
                                    />
                                    </figure>
                                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}> </div>
                                    <h1 className="card-title pt-2" style={{ fontFamily: 'Tinos', color:"#484848", fontSize: '16px', marginTop: '-30px', wordSpacing: '1px', marginLeft: '15px' }}>
                                        Open Library Book Review Competition 2024
                                    </h1>
                                    <div className="card-body text-justify" style={{ marginTop: '-26px', position: 'relative' }}>
                                    <p style={{ fontFamily: 'kaisei tokumin', color:"#F8F0E5", textAlign: 'justify', fontSize: '14px', marginTop: '25px', marginLeft: '-16px'}}>
                                        February 3, 2024
                                    </p>
                                    <div className="mt-40 sm:mt-16">
                                        <div style={{ 
                                        width: '1000px', 
                                        height: '240px', 
                                        backgroundColor: '#C8AE7D', 
                                        marginTop: '100px',
                                        marginLeft: '-430px',
                                        
                                        borderRadius: '25px',
                                        display: 'flex'
                                        }}>  
                                        <a
                                            href="/JoinNow"
                                            className="btn transition ease-in-out delay-50 bg-[#FFF3C7] shadow-xl text-black border-none hover:-translate-y-1 hover:scale-110 hover:bg-[#63CFF9] hover:text-white duration-500 ..."
                                            style={{ backgroundColor:"#F8F0E5", marginTop:'165px', marginLeft:'720px', fontFamily: 'Kaisei Tokumin', borderRadius: '50px', color:"#484848", fontSize: '15px'}}
                                        >
                                            Subscribe For Website Update
                                        </a>
                                        </div>
                                        <pre className="text-4xl font-bold animate-fade-up" style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '40px', marginTop: '-220px', marginLeft: '-400px'}}>
                                            Subscribe To Our Update!
                                        </pre>
                                        <pre className="text-4xl animate-fade-up" style={{ fontFamily: 'Kaisei Tokumin', color:"#484848", fontSize: '20px', marginTop: '10px', marginLeft: '-400px'}}>
                                            Get new content delivered directly to your inbox.
                                        </pre>
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
        </div>
    );
}

export default CompetitionPage;
