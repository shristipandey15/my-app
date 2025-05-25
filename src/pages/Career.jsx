import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    experience: '2+ years',
    description: 'Build amazing user interfaces with React.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'Butwal,manigram',
    experience: '3+ years',
    description: 'Design scalable APIs and databases.',
  },
];

const CareerPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: 'auto',
        padding: 30,
        fontFamily: 'Segoe UI, sans-serif',
        lineHeight: 1.6,
        color: '#333',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Intro */}
      <section style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, marginBottom: 10 }}>Join Our Team</h1>
        <p style={{ fontSize: 18 }}>
          At <strong>BOOTWAL R&D </strong>, we’re passionate about innovation, collaboration, and growth. We’re
          looking for talented people to help us shape the future.
        </p>
      </section>

      {/* Job Openings */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, marginBottom: 20 }}>Current Openings</h2>
        {jobs.map(job => (
          <div
            key={job.id}
            style={{
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{job.title}</h3>
            <p style={{ margin: '5px 0' }}>
              <strong>Location:</strong> {job.location}
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>Experience:</strong> {job.experience}
            </p>
            <p style={{ marginTop: 10 }}>{job.description}</p>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, marginBottom: 15 }}>Why Work With Us?</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>Flexible working hours</li>
          <li style={{ marginBottom: 8 }}>Health insurance</li>
          <li style={{ marginBottom: 8 }}>Learning & development budget</li>
          <li style={{ marginBottom: 8 }}>Inclusive and supportive culture</li>
        </ul>
      </section>

      {/* Application Form */}
      <section>
        <h2 style={{ fontSize: 26, marginBottom: 15 }}>Apply Now</h2>
        {submitted && (
          <p style={{ color: 'green', marginBottom: 20 }}>
            Thank you for applying! We will get back to you soon.
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
          <label style={{ marginBottom: 15 }}>
            <span style={{ display: 'block', marginBottom: 5 }}>Full Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                borderRadius: 5,
                border: '1px solid #ccc',
              }}
            />
          </label>

          <label style={{ marginBottom: 15 }}>
            <span style={{ display: 'block', marginBottom: 5 }}>Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                borderRadius: 5,
                border: '1px solid #ccc',
              }}
            />
          </label>

          <label style={{ marginBottom: 20 }}>
            <span style={{ display: 'block', marginBottom: 5 }}>Why are you interested in this job?</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us a bit about yourself"
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                borderRadius: 5,
                border: '1px solid #ccc',
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: 12,
              backgroundColor: '#9F162E',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              cursor: 'pointer',
              borderRadius: 5,
              transition: 'background-color 0.3s',
            }}
            onMouseOver={e => (e.target.style.backgroundColor = '#9F162E')}
            onMouseOut={e => (e.target.style.backgroundColor = '##9F162E')}
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default CareerPage;
