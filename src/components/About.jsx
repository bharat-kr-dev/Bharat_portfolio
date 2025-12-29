import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Users } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const aboutCards = [
    {
      icon: <Code className="text-indigo-600" size={24} />,
      title: "Development",
      description: "Experienced in full-stack development using MERN stack (MongoDB, Express, React, Node.js). I build responsive, user-friendly web applications with modern technologies."
    },
    {
      icon: <BookOpen className="text-indigo-600" size={24} />,
      title: "Education",
      description: "Currently pursuing a Bachelor of Technology in Computer Science at Institute of Technology, Guru Ghasidas University with a GPA of 7.58."
    },
    {
      icon: <Award className="text-indigo-600" size={24} />,
      title: "Achievements",
      description: "Winner of Smart India Hackathon 2025. Finalist (5th Position) at Code of Phoenix Hackathon, IIIT Naya Raipur. Finalist (8th Position) at Level SuperMind Hackathon. Selected as a Contributor for GirlScript Summer of Code (GSSoC)."
    },
    {
      icon: <Users className="text-indigo-600" size={24} />,
      title: "Leadership",
      description: "Web Development Co-Lead at Google Developers Group, GGV. Graphic Designer at Placement Cell Soset, GGV. Experienced in event management and public speaking."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg text-gray-600 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate Full Stack Developer and Computer Science student with a focus on building
            modern web applications. I enjoy solving complex problems and creating user-friendly experiences.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover="hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-indigo-100 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;