import React from 'react';
import profileImg from '../assets/about6.png'; 
import graduation from '../assets/graduation.png';
import TeamSlider from './TeamSlider';
import CertificationSection from './CertificationSection';


const About = () => {
  return (
    <>
      {/* About Us Section */}
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
          <h2 className="text-4xl text-[#E8B500] font-bold mb-4">About Us</h2>

          <span className="block text-2xl md:text-3xl font-semibold text-[#00387A] mb-4 text-center md:text-left">
            Why Students Choose Us for Gaining Their Education And Knowledge!
          </span>

          <p className="text-gray-700 mb-4">
            Students choose our college for the comprehensive education, supportive environment, and abundant opportunities we provide. We are dedicated to helping each student achieve their academic goals and prepare for a successful and fulfilling career.
          </p>

        </div>
      </div>

      {/* What We Do Section */}
      <div className="flex flex-col md:flex-row rounded-lg  bg-[#00387A] px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
        {/* Left Text */}
        <div className="flex-1 py-10 md:py-16 lg:py-24 lg:pl-5 text-white">
          <p className="text-[#E8B500] text-sm uppercase tracking-widest mb-2">WHAT WE DO</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Mission, Value & Motto</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            We want to convey a message to the student that Rupandehi is in no any sense less than Capital or Abroad for Education, and we can build this place even better and independent to any other city within and outside country for Academic Purpose. So we welcome you to join Nepathya College for the most attractive program on earth that is Information Technology and enrich your career. We here at Nepathya are so very empathetic to students that we are always concerned about what students need to know after being graduated so that their skills can be sellable in Market with high value, or make them successful entrepreneurs and scholars.
          </p>

          <button className="bg-[#E8B500] text-[#00387A] text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
            Join Us
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
          <img
            className="w-full absolute bottom-0 right-0 max-w-md"
            src={graduation}
            alt="Mission Illustration"
          />
        </div>
      </div>


{/* Affiliation Section */}
<div className="bg-white px-6 sm:px-10 md:px-14 lg:px-12 my-10 md:mx-10">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#E8B500] text-sm uppercase tracking-widest mb-2">AFFILIATION</p>
    <h2 className="text-2xl sm:text-3xl font-bold text-[#E8B500] mb-4">Affiliated to Tribhuvan University</h2>
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      We offer our students programs that are affiliated with Tribhuvan University, which is widely recognized as a trustworthy institution. Established in 1959, Tribhuvan University holds the distinction of being Nepal's oldest university and the country's first national higher education institution. With 39 central departments and four research centers, the university provides a diverse academic environment. In terms of enrollment, Tribhuvan University ranks as the 11th largest university globally. Tribhuvan University holds a prominent position in Nepal's education system and has played a vital role in shaping the country's intellectual landscape. It is recognized as a prestigious institution and is highly regarded for its academic standards and contributions to research and scholarship.
    </p>
  </div>
</div>

{/*CertificationSection*/}
<CertificationSection/>

{/* Team */}
<TeamSlider/>



    </>
  );
};

export default About;
