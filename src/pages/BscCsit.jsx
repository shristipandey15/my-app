import React from 'react';
import CourseStructure from '../Components/CourseStructure';

const BscCsitDetails = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center shadow-md flex items-center justify-center"
        style={{
          backgroundImage: `url('https://achsnepal.edu.np/wp-content/uploads/2019/07/1366x768-px_New-website-ACHS1.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Banner Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">BSc CSIT Program</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
            Learn about the BSc CSIT program, curriculum structure, career opportunities, and more.
          </p>
          <button className="bg-[#9F162E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#7c1124] hover:scale-105 transition-all duration-300 ease-in-out">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
     {/* Navigation Tabs */}
<div className="flex justify-center bg-[#002857] text-white py-4 gap-x-10 text-sm md:text-base font-medium shadow-md">
  <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Introduction</div>
  <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Admission Criteria</div>
  <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Course Structure</div>
  <div className="cursor-pointer hover:text-[#F3BF43] transition-colors duration-200">Evaluation</div>
</div>
<div className="px-8 py-12">
  <span className="text-sm font-semibold text-[#E8B500] uppercase tracking-widest">
    INTRODUCTION
  </span>
  <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#00336F]">
    About BSc. CSIT
  </h1>
  <p className="mt-4 text-gray-700 leading-relaxed text-justify">
    The BSc CSIT program, provided by Tribhuvan University, is a four-year course designed to impart comprehensive knowledge in computer science and information technology. Alongside conventional lectures, the program emphasizes practical
    and project-based learning. Students are equipped with a strong foundation in
    both computer science and IT principles, preparing them to tackle real-world
    challenges in the field. By completing this program, students will develop the
    necessary skills to excel as computer professionals and IT specialists. The
    primary objective of the B.Sc. CSIT program is to equip students for success in
    the dynamic field of information technology. Based on their chosen focus areas
    and elective courses, graduates will be capable of developing real-world e-media
    products or tackling hardware and software challenges by devising technological
    solutions.
  </p>
</div>
<section class="p-6 md:p-10">
  <h2 class="text-2xl md:text-3xl font-bold mb-6 border-b pb-2 border-yellow-400 text-[#00336F]">
    Eligibility and Admission Criteria
  </h2>

  <h3 class="text-xl font-semibold mb-3 text-[#00336F]">Eligibility Criteria:</h3>
  <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
    <li>
      Applicants must complete intermediate level/+2 with a minimum of 
      <span class="font-medium text-gray-800"> C grade</span> for each subject in the Science stream.
    </li>
    <li>
      Applicants must complete A level in Science with a minimum of 
      <span class="font-medium text-gray-800"> D grade</span>.
    </li>
    <li>
      Applicants from <span class="font-medium text-gray-800">CTEVT</span> should have a 
      <span class="font-medium text-gray-800"> 3 years diploma in Engineering</span> with 
      <span class="font-medium text-gray-800"> Math and Physics major</span>.
    </li>
  </ul>

  <h3 class="text-xl font-semibold text-[#00336F] mb-3">Admission Criteria:</h3>
  <ul class="list-disc list-inside text-gray-600 space-y-2">
    <li>Applicants must fulfill the eligibility criteria.</li>
    <li>
      Applicants must complete the 
      <span class="font-medium text-gray-800"> Entrance Application Form</span> provided by any of the affiliated or constituent colleges offering the course.
    </li>
    <li>
      Applicants must pass the 
      <span class="font-medium text-gray-800"> Entrance Examination</span> conducted by the 
      <span class="font-medium text-gray-800"> Institute of Science and Technology (IOST), Tribhuvan University</span>.
    </li>
  </ul>
</section>

 <div className="bg-gray-50 min-h-screen py-10">
      <CourseStructure />
    </div>




    </>
  );
};

export default BscCsitDetails;
