import React from 'react';
import principal from '../assets/sanjeev.png';

const Home = () => {
  return (
    <div className="flex flex-wrap px-8 py-12 font-sans">
      {/* Text Section */}
      <div className="w-full md:w-1/2 pr-6 mb-8 md:mb-0">
        <h1 className="text-medium font-bold text-purple-800 mb-4">WELCOME TO NEPATHYA</h1>
        <h2 className="text-3xl font-semibold text-[#00387A] mb-4">Message from the Principal</h2>
        <p className="text-gray-700 mb-4">
          Nepathya College has always been committed to providing quality education and fostering an environment
          that nurtures intellectual growth, personal development, and a spirit of innovation. Our aim is to empower
          our students with knowledge, skills, and values that will enable them to become responsible global citizens
          and make a positive impact on society.
        </p>
        <p className="text-gray-700">
          As the Principal of Nepathya College, I am honored to lead this vibrant and dynamic academic community.
          I encourage all students to make the most of their time at Nepathya College, embrace opportunities for personal
          growth, and actively contribute to the community. Remember, your education is not just a means to an end
          but a transformative journey that will shape your future.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={principal}
          alt="Principal"
          className="w-4/5 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
