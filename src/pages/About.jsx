import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const About = () => {
  const stats = [
    { year: '1989', label: 'Year we were founded' },
    { number: '5M', label: 'Happy users' },
    { number: '100+', label: 'Enterprise clients served' },
    { number: '67', label: 'Countries use our products' }
  ];

  const values = [
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: 'Authenticity',
      description: 'We are real, human and honest. Our words and actions are totally clear, a commited to others.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Togetherness',
      description: 'We believe that we are most powerful together. We work towards one goal and one strategy.'
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: 'Gratitude',
      description: 'We know that we are fortunate to work for an industry who believe in their promise.'
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: 'Transparency',
      description: 'We are open and clear. Share all pros and cons. We want positive and negative opinions.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: 'Innovation',
      description: 'We continuously embrace new ideas and insights. These serve to what we need now.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Service',
      description: 'We embrace passion and care. What matters. What do customers love and hate. Understand insights.'
    }
  ];

  const leadership = [
    {
      name: 'Sheryl Graham',
      role: 'Chief Executive Officer',
      description: 'We are passionate about the field of Business consultancy. And that business is all about people and relationships. Understanding businesses and their people.',
      image: '/api/placeholder/300/300',
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Chris Anderson',
      role: 'Chief Product Officer',
      description: "I'm a team project manager in charge of technology. I am an enthusiast and a generalist. I'm a person who enjoys new technology; someone who likes to be on the bleeding edge.",
      image: '/api/placeholder/300/300',
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Susan Cox',
      role: 'Chief Marketing Officer',
      description: "Susan is VP of Global, at one point she was known for changing client satisfaction rates rapidly. She's definitely confident they will get on top of helping.",
      image: '/api/placeholder/300/300',
      social: { twitter: '#', linkedin: '#' }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                About Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building the modern enterprise IT infrastructure solutions that empower businesses to succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="About Us" 
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">
                We're building the modern infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have perfected the art of providing IT infrastructure solutions that incorporate the most suitable IT Solutions with best practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pacer Automation Private Limited established in 1989 with a vision to provide professional IT infrastructure solutions & services to different verticals. Over the years, we have perfected the art of providing IT infrastructure solutions that incorporate the most suitable IT Solutions with best practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Backed by strong technical expertise, and seasoned practical experience, we deliver optimal performance, reliability, security, and access to IT infrastructure that delivers business value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="About Icon" 
                  className="w-24 h-24"
                />
                <h3 className="text-2xl font-bold text-secondary">ABOUT US</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collaborate directly, administrate and empower local teams. We help evolving channels, and new capital markets on the big data. We deliver transformative service and tool presentations to deliver outstanding ROI.
              </p>
              <h4 className="font-semibold text-secondary mb-2">Our approach</h4>
              <p className="text-gray-600 leading-relaxed">
                We understand the complexity and challenges of deploying and scaling the ever-changing IT landscape. We help our customers starting from planning to execution to the realization of ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.year || stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Oriented Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">OUR APPROACH</span>
              <h3 className="text-3xl font-bold text-secondary mt-2 mb-4">Results oriented</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Let's cut to the core of optimized IT solutions. Think of it simply in action rather than as an entity. No power users to wait. We want speed.
              </p>
              <button className="btn-primary">
                READ MORE MORE
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Results" 
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Great People Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Team" 
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:order-1"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">OUR BIGGEST ASSET</span>
              <h3 className="text-3xl font-bold text-secondary mt-2 mb-4">What's our secret? Great people.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our work is driven and built through shared beliefs of hard work, and dedication. And that starts right at team level. We work as a team. We grow together.
              </p>
              <button className="btn-primary">
                MEET THE TEAM
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-secondary">TRUSTED BY</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center"
              >
                <span className="text-gray-400 text-4xl">⊕</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Leadership</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-1">{leader.name}</h3>
                  <p className="text-primary text-sm mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {leader.description}
                  </p>
                  <div className="flex gap-3">
                    <a href={leader.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                    </a>
                    <a href={leader.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to take your startup to the next level?
            </h2>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-md transition-all">
              CONTACT US
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
