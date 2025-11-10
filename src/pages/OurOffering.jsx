import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiServer, FiCloud, FiShield, FiDatabase, FiMonitor, FiSettings, FiLayers } from 'react-icons/fi';

const OurOffering = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const offerings = [
    {
      icon: <FiServer className="text-5xl" />,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure management services to optimize your technology investments and ensure business continuity."
    },
    {
      icon: <FiDatabase className="text-5xl" />,
      title: "DataCenter Solutions",
      description: "Enterprise-grade data center solutions designed for scalability, reliability, and optimal performance."
    },
    {
      icon: <FiCloud className="text-5xl" />,
      title: "Cloud Solutions",
      description: "Transform your business with flexible, scalable cloud infrastructure and migration services."
    },
    {
      icon: <FiShield className="text-5xl" />,
      title: "Network & Security",
      description: "Robust network infrastructure and advanced security solutions to protect your critical assets."
    },
    {
      icon: <FiMonitor className="text-5xl" />,
      title: "User Computing",
      description: "Modern workplace solutions that empower your workforce with secure, reliable computing environments."
    },
    {
      icon: <FiLayers className="text-5xl" />,
      title: "Migration Services",
      description: "Seamless implementation and migration services to ensure smooth transitions and minimal disruption."
    },
    {
      icon: <FiSettings className="text-5xl" />,
      title: "Consulting Services",
      description: "Expert IT consulting to help you make informed decisions and achieve your technology goals."
    }
  ];

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= offerings.length - slidesToShow + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? offerings.length - slidesToShow : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Offerings</h2>
          <p className="section-subtitle">
            Comprehensive IT infrastructure solutions tailored to drive your business success
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / slidesToShow)}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full group hover:-translate-y-2">
                    {/* Icon */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#00BFA5', color: 'white' }}
                    >
                      {offering.icon}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: '#1E3A8A' }}
                    >
                      {offering.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10"
            style={{ color: '#00BFA5' }}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10"
            style={{ color: '#00BFA5' }}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: offerings.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={index === currentIndex ? { backgroundColor: '#00BFA5' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffering;