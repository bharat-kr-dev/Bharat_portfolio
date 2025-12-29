import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import naturalMilkImg from '../assets/image.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Social Media Analysis & AI Content Generator",
      description: "Developed a full-stack AI-powered platform for analyzing social media trends and generating SEO-optimized content. Implemented AI-driven sentiment analysis, achieving 94% accuracy in detecting engagement patterns. Built a chatbot that generates SEO-optimized video titles, tags, thumbnails, and scripts for trending topics.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["MERN Stack", "NLP", "AI", "Web Crawlers", "MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Selenium", "TensorFlow", "Firebase"],
      liveLink: "https://iiit-nr.vercel.app/",
      githubLink: "https://github.com/bharat711kushwaha/Bharat_portfolio",
      category: "ai"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "Developed a real-time messaging platform with end-to-end encrypted chat, group messaging, and online status indicators. Implemented WebSockets & Socket.io, reducing message latency by 40% for seamless communication. Integrated JWT authentication & bcrypt encryption, improving security by 60%.",
      image: "https://appinventiv.com/wp-content/uploads/2021/08/firebase-chat-app.png",
      technologies: ["MERN Stack", "WebSockets", "Authentication", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io", "Tailwind CSS"],
      liveLink: "https://chit-chat-r5e3.onrender.com",
      githubLink: "https://github.com/bharat711kushwaha/Bharat_portfolio",
      category: "web"
    },
    {
      id: 3,
      title: "Natural Milk Product",
      description: "A comprehensive e-commerce platform dedicated to natural milk products. Features a user-friendly interface for browsing and purchasing fresh dairy items. Includes secure payment integration and order tracking.",
      image: naturalMilkImg,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Authentication"],
      liveLink: "https://nmw-two.vercel.app/",
      githubLink: "https://github.com/bharat711kushwaha/Bharat_portfolio",
      category: "web"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  const buttonVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1.05,
      backgroundColor: "#4F46E5",
      color: "#FFFFFF",
      transition: { type: 'spring', stiffness: 300 }
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>

          {/* Project Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'web', 'ai'].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-colors ${activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                variants={buttonVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100"
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  y: -15,
                  rotateX: 2,
                  rotateY: 2,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-64 overflow-hidden relative group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="View Code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full uppercase font-semibold ${project.category === 'ai' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-200">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
