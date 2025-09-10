import React, { useState } from 'react';
import Map from '../Components/Map';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact message sent:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-lg font-bold text-[#8A2BE2] mb-2">Contact Us</h1>
          <span className="text-5xl text-[#00387A] font-medium mb-6 block">
            We would love to hear from you!
          </span>
          <p className="text-base md:text-lg text-gray-600">
            Our events provide a platform for intellectual exchange, artistic expression, and personal growth that
            provides opportunity for students to showcase their skills, build leadership abilities, and create lasting
            memories.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 text-center mb-6 font-medium">
            Thank you for reaching out! We'll get back to you shortly.
          </p>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-xl rounded-2xl border border-gray-200 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
            >
              <option value="">Select your course</option>
              <option value="BSc CSIT">BSc CSIT</option>
                  <option value="BCA">BCA</option>
           
          
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#9F162E] text-white font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    <div>
      <Map/>
    </div>
    </>
 
  );
};

export default ContactPage;
