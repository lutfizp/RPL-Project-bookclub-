import React, { useState, useEffect } from "react"; // Perbaikan di sini, hilangkan impor React yang terpisah
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function JoinNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nomor_hp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/getUser", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#8B785E' }}>
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
            
          </motion.a>
          <div className="divider divider-horizontal bg-white w-auto"></div>
          <motion.a
            href="FAQ"
            className="px-2 group text-yellow-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{fontFamily: 'kaisei tokumin'}}
          >
            FAQ
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
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
      <div
          className="carousel-item h-screen w-screen bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] flex"   
      >
      <div class="w-full bg-gradient-to-b from-[#FFF3C7] from-95% to-[#FFF3C7] py-20">
  <div class="container">
    <div class="w-[70%] flex mx-auto mt-12">
      <div className="w-[70%] sm:w-[90%]">
        <h1 className="sm:max-w-sm sm:max-h-sm text-4xl font-bold text-center animate-fade-up" style={{fontFamily: 'kaisei tokumin', color:"#484848", fontSize: '30px'}}>
          Being a BookClub member
        </h1>
        <div className="w-[70%] mb-4" style={{ textAlign: 'right' }}>
          <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up" style={{ fontFamily: 'Rosarivo', color:"#484848", fontStyle: 'italic', fontSize: '20px', marginRight: '50px' }}>
            is a good decision for your productive life, with anything we provide such as:
          </p>
        </div>
        <div className="container mx-auto">
          <div className="w-[70%]">
          <div className="flex items-center mb-3">

    <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color:"#484848", fontSize: '16px'}}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/piala.png" alt="Event Information" className="w-8 h-8 mr-2" />
            Competition, webinar, and book talk Event Information
        </span>
    </p>
</div>
          </div>
          <div className="container mx-auto">
            <div className="w-[70%]">
            <div className="flex items-center mb-3">
              <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color:"#484848", fontSize: '16px'}}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/images/speaker.png" alt="Event Information" className="w-8 h-8 mr-2" />
                  Newsletter update every week 
                </span>
              </p>
            </div>
          </div>
          </div>
          <div className="container mx-auto">
            <div className="w-[70%] mb-10">
            <div className="flex items-center mb-3">
            <p className="sm:max-w-sm sm:max-h-sm py-3 text-justify animate-fade-up" style={{ fontFamily: 'kaisei tokumin', color:"#484848", fontSize: '16px'}}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/images/people.png" alt="Event Information" className="w-8 h-8 mr-2" />
                  Networking with book lovers around the country
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="w-[50%] sm:w-[40%] text-right pr-10">
  <div className="card shrink-0 w-96 h-auto max-w-md shadow-2x flex flex-col animate-fade-up" style={{ backgroundColor: '#C8AE7D', textAlign: 'justify', padding: '20px', borderRadius: '35px'}}>
    <p className="text-md font-bold mb-3 mt-3 justify" style={{ fontFamily: 'kaisei tokumin', color:"#484848", textAlign: 'justify', fontSize: '20px' }}>Connect with us through this way</p> 
    <p className="text-sm text-justify mb-1" style={{ fontFamily: 'kaisei tokumin', color:"#484848", textAlign: 'justify', fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>Please fill out the form below to start being a BookClub member.</p>
    <form className="card-body ">
      <div className="form-control">
        <input type="text" placeholder="Full Name" className="input input-bordered" required style={{ backgroundColor: '#F8F0E5',fontFamily: 'kaisei tokumin', color:"#C8AE7D", textAlign: 'justify', fontSize: '15px',  borderRadius: '35px'}} />
      </div>
      <div className="form-control w-full" style={{ backgroundColor: '#C8AE7D' }}>
        <input type="email" placeholder="Email" className="input input-bordered" required style={{ backgroundColor: '#F8F0E5',fontFamily: 'kaisei tokumin', color:"#C8AE7D", textAlign: 'justify', fontSize: '15px',  borderRadius: '35px'}}/>
      </div>
      <div className="form-control">
        <input type="telepon" placeholder="WhatsApp Number" className="input input-bordered" required style={{ backgroundColor: '#F8F0E5', fontFamily: 'kaisei tokumin', color:"#C8AE7D", textAlign: 'justify', fontSize: '15px', borderRadius: '35px'}}/>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" style={{  fontFamily: 'kaisei tokumin', backgroundColor: '#8B785E', border: 'none', borderRadius: '35px', color:"#F8F0E5"}}>SUBMIT</button>
      </div>
    </form>
  </div>
</div>
</div>
  </div>
  </div>
  </div>
    </div>
 


);

}

export default JoinNowPage