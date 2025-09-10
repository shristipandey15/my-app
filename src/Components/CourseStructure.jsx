import React, { useState } from "react";

const semesters = [
  {
    name: "First Semester",
    courses: [
      "CSC 114 Introduction to Information Technology",
      "CSC 115 C Programming",
      "CSC 116 Digital Logic",
      "MTH 117 Mathematics I (Calculus)",
      "PHY 118 Physics",
      "Old Syllabus 2071",
      "Old Syllabus 2074",
    ],
  },
  {
    name: "Second Semester",
    courses: [
      "MTH 120 Mathematics II",
      "STA 121 Statistics I",
      "CSC 122 Discrete Structure",
      "CSC 123 Object-Oriented Programming",
      "CSC 124 Microprocessor",
    ],
  },
   {
    name: "Third Semester",
    courses: [
      "CSC 211 Data Structure And Algorithm",
      "CSC 212 Numerical Method",
      "CSC 213 Computer Architecture",
      "CSC 214 Computer Graphics",
      "STA 215 Statistics-II",
      "Old Syllabus 2071",
"Old Syllabus 2074",
    ],

  





  },
  {
    name: "Fourth Semester",
    courses: [
      "CSC 262 Theory of Computation",
"CSC 263 Computer Networks",
"CSC 264 Operating Systems",
"CSC 265 Database Management System",
"CSC 266 Artificial Intelligence",
"Old Syllabus 2071",
"Old Syllabus 2074",
    ],
  },
    {
    name: "Fifth Semester",
    courses: [
      "CSC 325 Design and Analysis of Algorithms",
"CSC 326 System Analysis and Design",
"CSC 327 Cryptography",
"CSC 328 Simulation and Modelling",
"CSC 329 Web Technology",
"Old Syllabus 2071",
"Old Syllabus 2074",],
  },
  {
    name: "Sixth Semester",
    courses: [
      "CSC 375 Software Engineering",
"CSC 376 Compiler Design and Construction",
"CSC 377 E-Governance",
"CSC 378 NET Centric Computing",
"CSC 379 Technical Writing",
"Old Syllabus 2071",
"Old Syllabus 2074",
    ],
  },
   {
    name: "Seventh Semester",
    courses: [
      "CSC 419 Advanced Java Programming",
"CSC 420 Data Warehousing and Data Mining",
"CSC 422 Project Work",
"MGT 421 Principles of Management",
"Elective Subject",
 
    ],
  },
  {
    name: "Eighth Semester",
    courses: ["Final Project", "Elective"],
  },
];

const CourseStructure = () => {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (index) => {
    setOpenSemester(openSemester === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 border-yellow-400">
        Course Structure
      </h2>

      {semesters.map((semester, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleSemester(index)}
            className={`w-full text-left flex justify-between items-center px-5 py-3 rounded-md text-lg font-medium transition ${
              openSemester === index
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
          >
            {semester.name}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                openSemester === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openSemester === index && (
            <ul className="mt-3 space-y-2 px-5 text-gray-700">
              {semester.courses.map((course, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b pb-2"
                >
                  {course}
                  <a href="#" className="text-blue-500 hover:underline">
                    📄
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseStructure;
