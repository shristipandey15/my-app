import React from 'react';

const brandLogos = [
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1660894374989.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1635165924336.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1635167110739.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1718704421399.svg',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1718796295586.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1721729678531.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1725014325113.jpeg',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1718797756119.svg',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1635167030343.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1718800785749.png',
  'https://api.nepathyacollege.edu.np/assets/uploads/image-1719546689996.jpg',
  '',
];

const Brands = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-[#E8B500] text-sm font-bold uppercase tracking-widest mb-2">
        Trusted Brands
      </h2>
      <h1 className="text-3xl md:text-4xl font-semibold text-[#00336F] mb-10">
        Our Co-Operative Partners
      </h1>
      <div className="overflow-hidden relative">
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {/* First set of logos */}
          {brandLogos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-16 w-auto inline-block transition duration-300"
            />
          ))}
          {/* Duplicate set for seamless scroll */}
          {brandLogos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo}
              alt={`Brand duplicate ${index + 1}`}
              className="h-16 w-auto inline-block transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
