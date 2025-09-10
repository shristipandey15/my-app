import React from 'react'

const Admission = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1713229182244-d617b76349d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
      }}
    >
      <div className="w-full mx-auto px-6 py-16 text-center bg-white bg-opacity-65 rounded-lg shadow-md">
        <h1 className="text-lg md:text-3xl font-bold text-[#00336F] mb-6 leading-snug">
          Unlock Your Potential, Illuminate Your Path at Nepathya
        </h1>
        <p className="text-m text-gray-700 mb-4">
          At Nepathya, we understand that education is not just about academics, but about holistic development.
          We are committed to providing an engaging, modern, and interactive learning experience.
          We promote research and innovation, encouraging students to engage in cutting-edge projects that address real-world problems.
        </p>
        <button className="bg-[#9F162E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#7c1124] transition duration-300">
          Get Admission
        </button>
      </div>
    </div>
  )
}

export default Admission
