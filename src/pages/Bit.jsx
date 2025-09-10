import React from 'react';

const Bit = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center shadow-md flex items-center justify-center"
        style={{
          backgroundImage: `url('https://achsnepal.edu.np/wp-content/uploads/2019/07/1366x768-px_New-website-ACHS1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">BIT Program (Proposed)</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
            Learn about the BIT program, curriculum, admission, and career opportunities in the IT industry.
          </p>
          <button className="bg-[#9F162E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#7c1124] hover:scale-105 transition-all duration-300 ease-in-out">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <span className="text-sm font-semibold text-[#E8B500] uppercase tracking-widest">Introduction</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#00336F]">About BIT</h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          The Bachelors in Information Technology (BIT) program offered by Tribhuvan University is designed based on the
          curriculum practiced in accredited international universities. The program is open to students who have completed
          twelve years of schooling in any stream or its equivalent from a recognized board. In addition to the fundamental
          and core Information Technology courses, the BIT program provides various elective courses to fulfill the
          undergraduate academic requirements and cater to the demand for new technology development and implementation.
          During the four-year BIT program, students are required to take courses in Information Technology foundations and
          core subjects, as well as subjects in mathematics, statistics, management, economics, sociology, psychology,
          research methodology, technical writing, and elective courses. This comprehensive curriculum aims to prepare
          students for a successful career in the field of Information Technology.
        </p>
      </div>
    </>
  );
};

export default Bit;
