import React from 'react';
import img from '../assets/aboutme1.avif';

const About = () => {
  return (
    <div className='bg-black text-white py-10' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={img} alt="About Me" className='w-72 h-80 rounded object-cover mb-8 md:mb-0 md:-mt-20 lg:w-80 lg:h-96' />
          <div className='flex-1'>
            <p className='text-lg mb-8 text-justify'>
              As a Full-Stack Developer, I am dedicated to crafting innovative, modern, and responsive web applications that align with your unique business goals. I have a passion for transforming ideas into seamless digital experiences, ensuring that each project I undertake not only meets functional requirements but also captivates users.
              <br /><br />
              With expertise in both front-end and back-end development, I create tailored solutions that enhance user engagement and drive business growth. My commitment to quality, attention to detail, and continuous learning enable me to stay ahead in the ever-evolving tech landscape. Let's work together to bring your vision to life and achieve success in the digital world.
            </p>
            <div className='space-y-4'>
              {[
                { label: 'HTML & CSS', width: '11/12' },
                { label: 'React JS', width: '11/12' },
                { label: 'Node JS', width: '7/12' },
                { label: 'SQL', width: '10/12' },
              ].map(skill => (
                <div className='flex items-center' key={skill.label}>
                  <label className='w-2/12'>{skill.label}</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-${skill.width}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-12 flex flex-col md:flex-row justify-between text-center'>
              {[
                { number: '3+', text: 'Years Experience' },
                { number: '50+', text: 'Projects Completed' },
                { number: '10+', text: 'Happy Clients' },
              ].map(stat => (
                <div key={stat.text} className='mb-4 md:mb-0'>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{stat.number}</h3>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
