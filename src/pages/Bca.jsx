import React from 'react';
import CourseStructure from '../Components/CourseStructure';

const Bca = () => {
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">BCA Program</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
            Learn about the BCA program, curriculum, admission, and career opportunities in the IT industry.
          </p>
          <button className="bg-[#9F162E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#7c1124] hover:scale-105 transition-all duration-300 ease-in-out">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center bg-[#002857] text-white py-4 gap-x-10 text-sm md:text-base font-medium shadow-md">
        <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Introduction</div>
        <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Admission Criteria</div>
        <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Course Structure</div>
        <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Evaluation</div>
      </div>

      {/* Introduction */}
      <div className="px-8 py-12">
        <span className="text-sm font-semibold text-[#E8B500] uppercase tracking-widest">Introduction</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#00336F]">About BCA</h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          BCA is a four-year undergraduate degree program in the field of computer applications and computer science. It provides students with the opportunity to study computer languages and gain skills in software development. BCA prepares students for a career in the IT industry, focusing on computer applications and software development. It is a popular choice for those interested in Information Technology and serves as a strong academic foundation for advanced careers in the field. The curriculum typically covers topics like database management systems, operating systems, software engineering, computer architecture, web technology, and programming languages such as C, C++, Java, Python, etc. Overall, BCA is an excellent option for students looking to enter the world of computer applications and build a successful career in IT. After completing BCA, students can pursue further studies such as MCA (Master in Computer Applications).
        </p>

        {/* Program Info */}
        <div className="mt-10 space-y-4 text-gray-700">
          <p><strong>01. Affiliation:</strong> Program offered by T.U.</p>
          <p><strong>02. Duration:</strong> 4 years program (8 semesters)</p>
          <p><strong>03. Total Credit:</strong> Minimum of 126 credit hours</p>
        </div>
      </div>

      {/* Admission Criteria */}
      <section className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2 border-yellow-400 text-[#00336F]">
          Eligibility and Admission Criteria
        </h2>

        <h3 className="text-xl font-semibold mb-3 text-[#00336F]">Eligibility Criteria:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Students from all faculties are eligible to get admission for the TU Bachelor of Computer Application program.</li>
          <li>Applicants must complete PCL or +2 or equivalent examination with at least 45% marks or 2 CGPA (with minimum D+ in each subject).</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#00336F] mb-3">Admission Criteria:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Applicants must fulfill eligibility criteria.</li>
          <li>Applicants must complete the Entrance Application Form provided by any of the Affiliated or Constituent Colleges offering the course.</li>
          <li>Applicants must pass the Entrance Examination conducted by T.U.</li>
        </ul>
      </section>

      {/* Course Structure */}
      <div className="bg-gray-50 min-h-screen py-10">
        <CourseStructure />
      </div>

      {/* Evaluation */}
      <section className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2 border-yellow-400 text-[#00336F]">
          Examination and Evaluation
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mid-term examination takes place after the completion of 6 weeks of regular classes, while the sent-up examination is conducted after 12 weeks of regular classes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          To be eligible for the board examinations, students must pass the internal examinations. Failing to meet this requirement will result in disqualification from appearing in the board examinations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The internal evaluation conducted by the college holds a weightage of 40%, which includes lab exams (if applicable).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Internal evaluation of the student is based on a weighted average of:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
          <li>Internal Examination</li>
          <li>Class Performance</li>
          <li>Attendance</li>
          <li>Lab Performance</li>
          <li>Lab Exam</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Board Exam conducted by Tribhuvan University carries 60% of total weightage.
        </p>
      </section>
    </>
  );
};

export default Bca;
