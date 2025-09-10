import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#00336F] mb-4">Event Details - ID: {id}</h1>
      {/* You can fetch and display more details here based on the ID */}
    </div>
  );
};

export default EventDetail;
