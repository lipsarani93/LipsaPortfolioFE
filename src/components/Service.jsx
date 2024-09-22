// src/components/Service.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axios'; // Import the configured axios instance

const Service = () => {
  const [services, setServices] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/services`);
        setServices(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className='bg-black text-white py-10' id='service'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {services.map(service => (
            <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg cursor-pointer hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                {service.id}
              </div>
              <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-300'>
                {service.description}
              </p>
              <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
