import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      description: "Over 1 year of experience in developing custom web solutions for diverse clients. Delivered high-quality, responsive websites and applications.",
      type: "Freelance",
      location: "Remote"
    },
    {
      title: "Student Developer",
      company: "GirlScript Summer of Code",
      period: "May 2024 - Sep 2024",
      description: "Contributed to multiple open-source projects focusing on web development and backend improvements.",
      type: "Full-time",
      location: "Remote"
    },
    {
      title: "Graphic Designer",
      company: "Placement Cell Soset, GGV",
      period: "Jan 2025 - Feb 2025",
      description: "Designed promotional materials and graphics for placement activities and events.",
      type: "",
      location: "Bilaspur, India"
    },
    {
      title: "Web Development Co-Lead",
      company: "Google Developers Group, GGV",
      period: "Nov 2024",
      description: "Designed and developed websites, impacting over 500 students. Led web development initiatives and workshops.",
      type: "",
      location: "Bilaspur, India"
    },
    {
      title: "Full stack Developer",
      company: "Shanti Anand Wellness Pvt Ltd",
      period: "Nov 2024",
      description: "Designed and developed websites & soft-skills training.",
      type: "",
      location: "Bilaspur, India"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Timeline line */}
            <motion.div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            ></motion.div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`mb-12 md:mb-0 relative ${index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto' : 'md:pl-10 md:text-left md:mr-auto'} md:w-1/2`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`hidden md:block absolute top-5 w-4 h-4 rounded-full bg-indigo-600 shadow-md z-10 ${index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.3 + (index * 0.1) }}
                ></motion.div>

                <motion.div
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-600 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'}`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-indigo-600 mb-2">{exp.company}</h4>

                  <div className={`flex items-center text-gray-500 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                    {exp.type && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{exp.type}</span>
                      </>
                    )}
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;