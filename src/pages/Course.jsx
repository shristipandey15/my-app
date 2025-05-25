import React from 'react';

const Course = () => {
  const courses = [
    {
      id: '01',
      title: 'BSc. CSIT',
      description:
        'This course offers students a prestigious and industry-recognized qualification that helps students for successful careers in the field of computer science and information technology.',
    },
    {
      id: '02',
      title: 'BCA',
      description:
        'This course offers students a pathway to gain comprehensive knowledge and skills in the field of computer applications that prepares students for a successful career in the IT sector.',
    },
    {
      id: '03',
      title: 'BIT (Proposed)',
      description:
        'This course offers students a pathway to acquire in-depth knowledge and skills in the field of information technology for a successful career in the IT industry.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-lg font-bold text-[#9F162E] text-center mb-2 uppercase tracking-wider">
        Our Courses
      </h2>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#00336F] text-center mb-6">
        What We Bring To You
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        We offer a comprehensive range of courses related to computer science and information technology, designed to equip students with the knowledge and skills necessary to thrive in the digital age.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg transition duration-300"
          >
            <div className="text-[#00387A] text-4xl font-extrabold mb-2">{course.id}.</div>
            <h3 className="text-2xl font-semibold text-[#00387A] mb-3">{course.title}</h3>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <button className="bg-[#9F162E] text-white px-6 py-2 rounded-full hover:bg-[#7c1124] transition duration-300">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
