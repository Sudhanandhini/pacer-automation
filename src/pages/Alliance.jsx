import { motion } from 'framer-motion';

const Alliance = () => {
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
              Our Alliance Partners
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with leading technology companies to deliver best-in-class solutions to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg mb-8">
              Content coming soon. We are partnered with industry-leading technology providers to bring you the best solutions.
            </p>
            <button className="btn-primary">
              Contact Us to Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alliance;
