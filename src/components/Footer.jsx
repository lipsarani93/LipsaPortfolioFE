import axios from 'axios';
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa'

const Footer = () => {

    const [email, setEmail] = useState('');
    
    const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendURL}/api/subscribe`, { email });
      alert(res.data.msg);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert(err.response.data.msg || 'Error subscribing');
      setEmail("");
    }
  };
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Lipsarani Moharana</h3>
                <p className='text-gray-400'>Full-Stack Developer based in India, specializing in web and software development.</p>
            </div>
            <div className='flex-1 w-full'>
            <form className='flex items-center justify-center' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='Enter Your Email'
          className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>
          Subscribe
        </button>
      </form>
            </div>
        </div>


        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400'>
                &copy;{new Date().getFullYear()} Lipsarani Moharana. All Rights Reserved.
            </p>
            <div className='flex space-x-4 my-4 md:my-0'>
                
                <a href="#" className='text-gray-400 hover:text-white'>
                    <FaLinkedin/>
                </a>
                
                
                <a href="#" className='text-gray-400 hover:text-white'>
                    <FaGithub/>
                </a>
            </div>
            <div className='flex space-x-4'>
                <a href="#" className='text-gray-400 hover:text-white'>
                    Privacy
                </a>
                <a href="#" className='text-gray-400 hover:text-white'>
                    Terms of Services
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
