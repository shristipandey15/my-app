import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const studentTestimonials = [
  {
    name: 'Pooja Karki',
    degree: 'Bsc CSIT, Batch 2073',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1634896627548.jpg',
    story: 'Nepathya College gave me the foundation and confidence to succeed in the tech industry.',
  },
  {
    name: 'Parkash Tiwari',
    degree: 'BCA, Batch 2075',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1721063125045.png',
    story: 'The learning environment and hands-on projects shaped my career in software development.',
  },
  {
    name: 'Binisha Regmi',
    degree: 'Bsc CSIT, Batch 2079',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1721063517049.png',
    story: 'I got placed in a top IT company right after graduation. Thanks to Nepathya’s guidance!',
  },
  {
    name: 'Anish Giri',
    degree: 'BSc CSIT, Batch 2073',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1634896694768.jpg',
    story: 'From coding basics to real-world applications, Nepathya helped me transform completely.',
  },
   {
    name: 'Ashok Kumar Dhawal',
    degree: 'Bsc CSIT, Batch 2075',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1634896652199.jpg',
    story: 'Nepathya College gave me the foundation and confidence to succeed in the tech industry.',
  },
  {
    name: 'Sujal Pandey',
    degree: 'BCA, Batch 2079',
    image: 'https://api.nepathyacollege.edu.np/assets/uploads/image-1721063334592.png',
    story: 'The learning environment and hands-on projects shaped my career in software development.',
  },
 
];

const Testimonials = () => {
  return (
    <>
      <div className="py-16 px-4 bg-[#F8FAFC]">
        <span className="text-2xl font-bold text-center block text-[#E8B500] mb-2">TESTIMONIALS</span>
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00387A]">
          Student Success Stories
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We take pride in the journeys of our students, who have achieved great milestones in their careers after learning and growing at Nepathya College.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {studentTestimonials.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white h-full rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#00387A] mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-[#00387A]">{student.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{student.degree}</p>
                <p className="text-sm italic text-gray-700">"{student.story}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center my-10 px-4">
        <p className="text-md text-gray-700 max-w-xl mx-auto">
          Want to be part of a thriving academic community?{' '}
          <a href="/admissions" className="text-[#00387A] font-semibold underline">Apply Now</a>
        </p>
      </div>
    </>
  );
};

export default Testimonials;
