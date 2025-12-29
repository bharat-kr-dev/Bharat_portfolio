import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Gitlab } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: item => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.2 + (item * 0.1)
      }
    }),
    hover: {
      scale: 1.2,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <motion.h2
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bharat Kumar
            </motion.h2>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack Developer & Computer Science Student
            </motion.p>
          </motion.div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: <Github size={24} />, url: "https://github.com/bharat711kushwaha", custom: 0 },
              { icon: <Gitlab size={24} />, url: "https://gitlab.com/bharatkr.dev", custom: 1 },
              { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281/", custom: 2 },
              { icon: <Mail size={24} />, url: "mailto:bharatkumar160418gmail.com", custom: 3 }
            ].map((item) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialVariants}
                custom={item.custom}
                whileHover="hover"
                data-aos="zoom-in"
                data-aos-delay={item.custom * 100}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.p
            className="text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {currentYear} Bharat Kumar. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.p className="text-gray-400 flex items-center">
              Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f87171', '#ef4444']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart size={16} className="text-red-500 mx-1" />
              </motion.span>
              in React
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;