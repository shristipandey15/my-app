import React from 'react';
import principal from '../assets/sanjeev.png';
import college from '../assets/nepathta.png';
import sign from '../assets/sign.png';
import profileImg from '../assets/about6.png'; 

const Header = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="relative x-10 flex flex-wrap px-8 py-12 font-sans bg-[#E6EBF2]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 pr-6 mb-8 md:mb-0">
          <p className="text-medium font-bold text-purple-800 mb-4 px-12 transition-all duration-300 ease-in-out">
            WELCOME TO NEPATHYA
          </p>
          <h1 className="mb-8 px-12 transition-all duration-300 ease-in-out">
            <span className="text-5xl block">Leaders Are</span>
            <span className="text-5xl text-[#00387A] block">Made Not Born</span>
          </h1>
          <p className="text-[#00387A] mb-5 font-small px-12 leading-relaxed">
            Nepathya College believes that people can become leaders through the process of teaching, learning, and observation.
            Leadership is learned by training, perception, practice, and experience over time. Leadership learning is a lifetime activity.
          </p>

          <div className="px-12">
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-[#9F162E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#7c1124] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={college}
            alt="College image"
            className="w-4/5 rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Principal Message Section */}
      <div className="flex flex-wrap px-8 py-12 font-sans bg-white">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-8 md:mb-0">
          <h1 className="text-medium font-bold text-purple-800 mb-4 transition-all duration-300 ease-in-out">
            WELCOME TO NEPATHYA
          </h1>
          <h2 className="text-3xl font-semibold text-[#00387A] mb-2 transition-all duration-300 ease-in-out">
            Message from the Principal
          </h2>

          <p className="text-[#00387A] mb-4 transition-all duration-300 ease-in-out">
            Nepathya College has always been committed to providing quality education and fostering an environment that nurtures intellectual growth, personal development, and a spirit of innovation. Our aim is to empower our students with knowledge, skills, and values that will enable them to become responsible global citizens and make a positive impact on society.
          </p>
          <p className="text-[#00387A] transition-all duration-300 ease-in-out">
            As the Principal of Nepathya College, I am honored to lead this vibrant and dynamic academic community. I encourage all students to make the most of their time at Nepathya College, embrace opportunities for personal growth, and actively contribute to the community. Remember, your education is not just a means to an end but a transformative journey that will shape your future.
          </p>

          <div className="flex flex-col items-center mt-6">
            <img src={sign} alt="Signature" className="w-40 h-auto px-10 mb-2" />
            <span className="text-lg font-semibold text-[#00387A]">Sanjeev Bhandari</span>
            <span className="text-sm text-gray-600">Principal</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={principal}
            alt="Principal"
            className="w-4/5 rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <div>
        {/* About us */}
           <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-50 rounded-lg w-full">
                {/* Image Section */}
                <div className="relative w-80 h-80 mb-8 md:mb-0 md:mr-12">
                  {/* Bigger Blue Circle */}
                  <div className="absolute top-10 left-10 w-72 h-72 bg-[#00387A] rounded-full z-0"></div>
        
                  {/* Profile Image */}
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="absolute top-0 left-0 w-72 h-72 rounded-full object-cover z-10 border-4 border-white shadow-xl"
                  />
                </div>
        
                {/* Text Section */}
                <div className="text-center md:text-left max-w-xl">
                  <h2 className="text-lg text-[#E8B500] font-bold mb-4">About Us</h2>
        
                  <span className="block text-2xl md:text-3xl font-semibold text-[#00387A] mb-4 text-center md:text-left">
                    Why Students Choose Us for Gaining Their Education And Knowledge!
                  </span>
        
                  <p className="text-gray-700 mb-4">
                    Students choose our college for the comprehensive education, supportive environment, and abundant opportunities we provide. We are dedicated to helping each student achieve their academic goals and prepare for a successful and fulfilling career.
                  </p>
        
                </div>
              </div>
      </div>
    </>
  );
};

export default Header;
