import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import bgimage from '../assets/circles-overlay-3.png';
import contact from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      website: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative   overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#F4F4F4',
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get in touch with us for any inquiries about our IT infrastructure solutions and services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={contact}
                alt="Contact Us" 
                className="w-full rounded-lg "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-primary text-xl text-teal-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-lg mb-1">Phone</h3>
                  <p className="text-gray-600 hover:text-teal-500 transition-colors">+91 80 4282 3000</p>
                  {/* <p className="text-gray-600 text-sm hover:text-teal-500 transition-colors">Monday - Friday, 9:00 AM to 6:00 PM IST</p> */}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-primary text-xl text-teal-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-lg mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:solutions@pacerautomation.com" className="hover:text-primary transition-colors hover:text-teal-500 transition-colors">
                      solutions@pacerautomation.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:supportcenter@pacerautomation.com" className="hover:text-primary transition-colors hover:text-teal-500 transition-colors">
                      supportcenter@pacerautomation.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-primary text-xl text-teal-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-lg mb-1">Head office</h3>
                  <p className="text-gray-600 leading-relaxed hover:text-teal-500 transition-colors">
                    Pacer Automation Pvt. Ltd.<br />
                    No. 33/5, First Floor, Mount Kailash Building,<br />
                    Meanee Avenue Road (Above HDFC Bank)<br />
                    Ulsoor, Bangalore-560 042, INDIA
                  </p>
                  <p className="text-gray-600 mt-2 hover:text-teal-500 transition-colors">
                    Board Line: +91 80 4282 3000<br />
                    Fax: +91 80 4282 3003
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary text-lg mb-2">Working Hours:</h3>
                <p className="text-gray-600 hover:text-teal-500 transition-colors">
                  09:00 AM to 06:00 PM IST (Monday – Friday)
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-md transition-all"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7726544789843!2d77.62063931482211!3d12.978426990854746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168e8b6c69b1%3A0x7b0c3c0d7c8c0d7c!2sUlsoor%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe> */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4677.444757588997!2d77.61498537582995!3d12.988065087328858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168d47faec19%3A0x3e934c4594e3779b!2sPacer%20Automation%20Private%20Limited!5e1!3m2!1sen!2sin!4v1762760691994!5m2!1sen!2sin" 
         width="100%" height="100%" style={{ border: 0 }} loading="lazy" ></iframe>
        </div>
      </section>

      {/* Help Center CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Looking for support? Visit our help center.
            </h2>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full transition-all flex items-center gap-2">
              HELP CENTER
              <span className="text-xl">⊕</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;