import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiZap, FiShield, FiHeadphones } from 'react-icons/fi';
import { MdDevices } from 'react-icons/md';
import home1 from "../assets/home.png"
import home2 from "../assets/SaaS-2.png"  
import home3 from "../assets/SaaS-3.png"
import home4 from "../assets/SaaS-4.png"
import home5 from "../assets/SaaS-5.png"
import circle1 from "../assets/circle1.png"

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonials = [
    {
      text: "They are a lot of platforms out there - and I can't even begin to think of some of them, but what I like most about Pacer is it's ease of use.",
      name: "Tom Jones",
      role: "Marketing Director",
      image: "/api/placeholder/60/60"
    },
    {
      text: "We now take requests the old fashioned way and do work. Interesting, no such luck with Pacer. They do an amazing job!",
      name: "Jane Harrison",
      role: "Product Manager",
      image: "/api/placeholder/60/60"
    },
    {
      text: "Whoever was the tool that did the planning at home, for me this was my new go to place. It's easy, quick and the tech is very quick.",
      name: "Rick Adair",
      role: "CEO",
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: '#1E3A8A' }}
              >
                IT Infrastructure Solutions Reimagined
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                We provide all the best features you can use focusing on your IT infrastructure management and get back to your life's work.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  GET STARTED
                </Link>
                <Link to="/about" className="btn-secondary">
                  LEARN MORE
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src={home1} 
                  alt="Team Collaboration" 
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powerful Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Powerful, yet simple</h2>
            <p className="section-subtitle">
              Everything we build is intentionally designed to include the features you need, right where you need them - without being overly complicated.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Feature 1 - Quick Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Right Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
               style={{ right: "-24%", transform: "rotate(270deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <img 
                  src={home2}
                  alt="Quick Setup" 
                  className="w-full"
                />
              </div>
              <div className="relative z-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                  READY TO USE
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Get setup quickly
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our streamlined process will have you up and running in hours - not weeks. We handle the complexity so you can focus on your business.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Left Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
               style={{ left: "-23%", transform: "rotate(90deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="md:order-2 relative z-10">
                <img 
                  src={home5}
                  alt="Collaboration" 
                  className="w-full"
                />
              </div>
              <div className="md:order-1 relative z-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                  WORK TOGETHER
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Built for collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A platform that your team will love. Fast, cloud-native platforms consolidate with your team. Seamlessly collaborate.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 - All Devices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Right Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ right: "-24%", transform: "rotate(270deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <img 
                  src={home3} 
                  alt="All Devices" 
                  className="w-full"
                />
              </div>
              <div className="relative z-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                  USE ANYWHERE
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Accessible on all your devices
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work on your desktop, tablets, phones, we sync and share on all of them. Anywhere, anytime on all platforms.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 - Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Left Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
              style={{ left: "-23%", transform: "rotate(90deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="md:order-2 relative z-10">
                <img 
                  src={home4} 
                  alt="Support" 
                  className="w-full"
                />
              </div>
              <div className="md:order-1 relative z-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                  PREMIUM SUPPORT
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Backed by an amazing support team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have a question or an issue, we're here every step of the way when you need us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What customers are saying</h2>
            <p className="section-subtitle">
              We've had the opportunity to work with some great customers over the years, so why don't you take it from them, and hear their delight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold" style={{ color: '#1E3A8A' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16" style={{ backgroundColor: '#00BFA5' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Level up your productivity
              </h2>
              <p className="text-lg opacity-90">
                Get started using our best features.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="font-semibold py-3 px-8 rounded-md transition-all text-white" style={{ backgroundColor: '#1E3A8A' }}>
                GET STARTED
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white font-semibold py-3 px-8 rounded-md transition-all" style={{ '--hover-color': '#00BFA5' }}>
                REQUEST DEMO
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;