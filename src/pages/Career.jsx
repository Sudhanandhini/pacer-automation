import { motion } from 'framer-motion';

const Career = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Build your career with a leading System Integrator. We're always looking for talented individuals to join our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Why Join Pacer Automation?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We offer exciting opportunities to work with cutting-edge technologies and challenging projects. Join a team that values innovation, collaboration, and professional growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Current Openings
              </h3>
              <p className="text-gray-600 mb-6">
                We're currently reviewing applications for various positions. Please send your resume to:
              </p>
              <a 
                href="mailto:careers@pacerautomation.com" 
                className="text-primary text-lg font-semibold hover:underline"
              >
                careers@pacerautomation.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
