// src/components/Contact.jsx
import React, { useState } from 'react';
import axios from '../api/axios'; // Import the configured axios instance
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post('/contact', formData);
      console.log('Response:', response.data); // Log response
      alert('Message sent successfully!');
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message.');
      setError('Failed to send message. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='bg-black text-white py-10' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Connect</h3>
            <p className='mt-4'>I welcome the opportunity to discuss web development projects that can elevate your business. Together, we can create a website that brings your vision to life and helps grow your business through the digital world.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:lipsaranimoharana93@gmail.com" className='hover:underline'>lipsaranimoharana93@gmail.com</a>
            </div>
            <div className='mb-4'>
              <a href="#contact">
              <FaPhone className='inline-block text-green-400 mr-2' />
              </a>
              <span>Send a message to connect</span>
            </div>
            
          </div>

          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  onChange={handleChange} 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Enter Your Name' 
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'> Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Enter Your Email' 
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Drop Your Message Here</label>
                <textarea 
                  name="message"
                  value={formData.message} 
                  onChange={handleChange} 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5" 
                  placeholder='Enter Your Message' 
                />
              </div>
              <button 
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
              {error && <p className='text-red-500'>{error}</p>} {/* Display error message */}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
