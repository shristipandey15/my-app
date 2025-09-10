import React from 'react';
import { useParams } from 'react-router-dom';
import BscCsit from './BscCsit';
import Bca from './Bca';
import Bit from './Bit';

const CourseDetails = () => {
  const { id } = useParams();

  switch (id) {
    case 'bsc-csit':
      return <BscCsit />;
    case 'bca':
      return <Bca />;
    case 'bit':
      return <Bit />;
    default:
      return (
        <div className="p-10 text-center text-red-600 text-lg font-semibold">
          Course not found. Please check the URL or go back to the courses page.
        </div>
      );
  }
};

export default CourseDetails;
