import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white px-4 md:px-6 lg:px-12 z-50">
      <div className="container mx-auto py-2 flex items-center">
        {/* Logo on the left */}
        <div className="logo flex-shrink-0">
          <img className="w-16 md:w-24 lg:w-32" src={logo} alt="Logo" />
        </div>

        {/* Menu items (hidden on small screens, visible on medium and up) */}
        <div className="flex-grow hidden md:flex justify-center space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Connect Me button (hidden on small screens, visible on medium and up) */}
        <button className="hidden md:inline bg-gradient-to-r from-yellow-400 to-black-500 text-white px-3 py-1 rounded-full hover:scale-105 transform transition-transform duration-300">
          <a href="#contact">Connect With Me</a>
        </button>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu (dropdown) */}
        {isMenuOpen && isMobile && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-4 p-6 overflow-y-auto">
            <a href="#home" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>About Me</a>
            <a href="#service" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>Services</a>
            <a href="#project" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>Contact</a>
            <a href="#contact">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full" onClick={toggleMenu}>
              Connect Me
            </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
