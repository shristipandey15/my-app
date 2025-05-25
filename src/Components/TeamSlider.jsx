import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const teamMembers = [
  {
    name: 'Suraj Upreti',
    title: 'Chairman',
    degree: 'B.E. / M.B.A, (Tribhuvan University, Nepal)',
    image: '/images/image-1634888618158.jpg',
  },
  {
    name: 'Sanjeeve Bhandari',
    title: 'Principal',
    degree: 'B.E.(Computer)(Pokhara University Nepal) / M.B.A/M.I.S (Lincoln University,U.S.A)',
    image: '/images/image-1719641092317.jpg',
  },
  {
    name: 'Shiva Bhattrai',
    title: 'Vice Principal',
    degree: 'Msc.IT , Software Engineering,(Tampere University, Finland)',
    experience: '10+ years of industry experience',
    image: '/images/shiva.jpg',
  },
  {
    name: 'Pooja Sharma',
    title: 'Lecturer',
    degree: 'Msc.CSIT (Tribhuvan University, Nepal )',
    experience: '10+ years of academic experience',
    image: '/images/image-1721660360911.jpg',
  },
  {
    name: 'Aananta Pandey',
    title: 'Lecturer',
    degree: 'M.E (Computer) (Ajou University, S.Korea)',
    image: '/images/image-1719407162331.jpg',
  },
  {
    name: 'Sameer Gautam',
    title: 'Lecturer',
    degree: 'BSc. CSIT, MBA (Pokhara University, Nepal)',
    image: '/images/image-1719855964097.jpg',
  },
  {
    name: 'Jagrit Gaire',
    title: 'Lecturer',
    degree: 'Bsc.CSIT (Tribhuvan University, Nepal )',
    experience: '10+ years of academic experience',
    image: '/images/image-1721661795280.jpg',
  },
  {
    name:'Niraj Bhattrai',
    title: 'Lecturer',
    degree: 'M.Tech (Computer) (Kurukshetra University,India)',
    image: '/images/image-1719641997638.jpg',
  },
  {
    name: 'Narayan Tiwari',
    title: 'Lecturer',
    degree: 'M.E.(Computer) (Trivuwan University, Nepal)',
    image: '/images/image-1721661209225.jpg',
  },
];

const TeamSlider = () => {
  return (
    <>
    <div className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00387A]">
        Meet Our Team
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="h-80 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 mb-4"
              />
              <h3 className="text-base font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-[#9F162E] font-medium">{member.title}</p>
              <p className="text-xs text-gray-600 mt-1">{member.degree}</p>
              {member.experience && (
                <p className="text-xs text-gray-500 italic mt-1">{member.experience}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

   <div className="text-center my-12 px-4">
  <p className="text-m  text-gray-700 max-w-xl mx-auto">
    Want to be part of a dynamic team that pushes the boundaries of innovation? <a href='#' className="text-indigo-600 font-semibold">Join our Team</a>
  </p>
</div>


</>
  );
};

export default TeamSlider;
