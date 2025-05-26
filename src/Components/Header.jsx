import React from 'react';

import college from '../assets/nepathta.png';

import profileImg from '../assets/about6.png';
import Message from '../Components/Message.jsx'; 

const Header = () => {
  return (
    <>
      {/* Welcome Section */}
 <div
  className="relative min-h-screen flex flex-wrap items-center px-8 py-16 font-sans bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://media.istockphoto.com/id/1193288605/photo/computer-and-bookshelves-in-modern-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=PJVRr6Y6EAoymzI_7lb7Mky5RwQ9L7u5NMrxFTt70Hs=')" }} // replace with your image path
>
  {/* Overlay (optional for readability) */}
 <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent z-1"></div>


  {/* Content */}
  <div className="relative z-10 w-full md:w-1/2 pr-6 mb-8 md:mb-0 text-white">
    <p className="text-medium text-[#E8B500] font-bold mb-4 px-12 transition-all duration-300 ease-in-out">
      WELCOME TO NEPATHYA
    </p>
  <h1 className="mb-8 px-12">
  <span className="block text-7xl font-bold opacity-0 animate-fade-in-down [animation-delay:.3s]">
    Leaders Are
  </span>
  <span className="block text-7xl font-bold text-[#00387A] opacity-0 animate-fade-in-down [animation-delay:.9s]">
    Made Not Born
  </span>
</h1>

    <p className="mb-5 font-small text-gray-200 px-12 leading-relaxed">
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
</div>



{/* Message from principal */}
 <Message/>

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
