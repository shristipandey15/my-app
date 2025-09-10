import React from 'react'
import principal from '../assets/sanjeev.png';
import sign from '../assets/sign.png';

const Message = () => {
  return (
<>
            {/* Principal Message Section */}
            <div className="flex flex-wrap px-8 py-12 font-sans bg-white">
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-8 md:mb-0">
                <h1 className="text-medium font-bold text-[#E8B500] mb-4 transition-all duration-300 ease-in-out">
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
   </>
  )
}

export default Message
