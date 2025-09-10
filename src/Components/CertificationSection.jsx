import isoLogo from '../assets/isoLogo-ed4a0dd1.jpg'; 

const CertificationSection = () => {
  return (
    <section className="bg-[#00387A] text-white rounded-[0_250px_0_250px] p-8 md:p-12 max-w-6xl w-full mx-auto mt-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={isoLogo}
          alt="ISO Certification"
          className="w-24 md:w-32 h-auto"
        />
        <div className="text-center md:text-left max-w-3xl">
          <h3 className="text-[#F3BF43] font-bold text-lg uppercase mb-2">
            Certification
          </h3>
          <h4 className="text-xl font-semibold mb-3">
            ISO 9001:2015 Certified Institution
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            Nepathya College is proud to be ISO certified, ensuring that we maintain the highest standards of quality in our educational services. ISO certification, specifically ISO 9001, is a globally recognized quality management system that sets criteria for organizations to demonstrate their commitment to delivering consistent, reliable, and excellent services. By recognizing its ISO certification, Nepathya College has undergone a rigorous evaluation process that assesses various aspects of our operations, including curriculum development, teaching methodologies, student support services, infrastructure, and administrative processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
