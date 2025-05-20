import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Collegelogo from '../assets/Collegelogo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-8 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        
        {/* Nepathya College Info */}
        <div>
          <div className="flex items-center mb-6">
            <img src={Collegelogo} alt="Nepathya College Logo" className="w-14 h-14 mr-5" />
            <h2 className="text-3xl font-bold">Nepathya College</h2>
          </div>
          <p className="text-base leading-relaxed mb-8">
            Nepathya College is the only one College dedicated for IT education in the region
            managed by IT experts and Professionals.
          </p>
          <div className="flex space-x-6 text-2xl">
            <FaFacebookF className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Courses</h3>
          <hr className='mb-8 border-gray-600'/>
          <ul className="text-base space-y-3">
            <li>B.Sc. CSIT</li>
            <li>BCA</li>
            <li>BIT (Proposed)</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
          <hr className='mb-8 border-gray-600'/>
          <ul className="text-base space-y-3">
            <li>Tribhuvan University</li>
            <li>Faculty of Humanities & Social Science</li>
            <li>Student Portal of BCA</li>
            <li>Institute of Science and Technology</li>
            <li>Central Department of CSIT TU</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <hr className='mb-8 border-gray-600'/>
          <p className="text-base mb-4">
            Don’t hesitate to contact and feel free to reach us!
          </p>
          <p className="text-base mb-2">📍 Manigram, Tilottama-5, Rupandehi, Nepal</p>
          <p className="text-base mb-2">📞 071562537, 9857034838, 9857034364, 9846970252</p>
          <p className="text-base mb-2">✉️ info@nepathyacollege.edu.np</p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
        &copy; 2024 Nepathya College, All Rights Reserved. Designed and Developed by 
        <span className="text-blue-300 font-medium ml-1 hover:underline cursor-pointer">Nepathians</span>
      </div>
    </footer>
  );
};

export default Footer;
