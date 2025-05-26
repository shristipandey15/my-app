import React from 'react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Tech Workshop 2025',
    date: '2025-06-15',
    time: '10:00 AM - 1:00 PM',
    location: 'Nepathya College, Hall A',
    description: 'Hands-on workshop focusing on React, Node.js, and deployment strategies.',
  },
  {
    id: 2,
    title: 'Career Guidance Seminar',
    date: '2025-07-01',
    time: '12:00 PM - 2:00 PM',
    location: 'Auditorium',
    description: 'Industry experts guide students on IT career paths and interview preparation.',
  },
  {
    id: 3,
    title: 'Hackathon: CodeFest',
    date: '2025-08-05',
    time: '9:00 AM - 6:00 PM',
    location: 'Lab 2 & 3',
    description: 'A full-day hackathon to solve real-world problems in teams.',
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
};

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-lg font-bold text-[#E8B500] text-center mb-2 uppercase tracking-wider">
        Upcoming Events
      </h2>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#00336F] text-center mb-10">
        Don’t Miss Our Latest Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
{events.map((event, index) => (
  <div
    key={event.id}
    className={`border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300 ${
      index === 1 ? 'bg-[#00336F] text-white' : 'bg-white text-black'
    }`}
  >
    <div className="flex items-center mb-4">
      <div className="bg-[#00387A] text-white text-center rounded-lg px-3 py-2 mr-4">
        <div className="text-xl font-bold">{formatDate(event.date).split(' ')[0]}</div>
        <div className="text-sm uppercase">{formatDate(event.date).split(' ')[1]}</div>
      </div>
      <div>
        <h3 className={`text-xl font-semibold ${index === 1 ? 'text-white' : 'text-[#00387A]'}`}>
          {event.title}
        </h3>
        <p className={`text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
          {event.time}
        </p>
      </div>
    </div>
    <p className={`mb-4 ${index === 1 ? 'text-white' : 'text-gray-700'}`}>{event.description}</p>
    <p className={`text-sm mb-3 ${index === 1 ? 'text-white/80' : 'text-gray-500'}`}>
      📍 {event.location}
    </p>
    <button
      onClick={() => navigate(`/events/${event.id}`)}
      className={`border px-4 py-2 rounded-full transition ${
        index === 1
          ? 'border-white text-white hover:bg-white hover:text-[#00336F]'
          : 'text-[#00336F] border-[#00336F] hover:bg-[#00336F] hover:text-white'
      }`}
    >
      View Details
    </button>
  </div>
))}


      </div>
    </div>
  );
};

export default Events;
