import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, PenTool as Tool, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-indigo-600" size={24} />,
      skills: ["JAVA (DSA)", "Python", "C++", "JavaScript", "C"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="text-indigo-600" size={24} />,
      skills: ["ReactJS", "Vite", "Express", "NodeJS", "React-Native", "Expo"]
    },
    {
      title: "Databases",
      icon: <Database className="text-indigo-600" size={24} />,
      skills: ["MongoDB", "Firebase"]
    },
    {
      title: "Backend",
      icon: <Server className="text-indigo-600" size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="text-indigo-600" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"]
    },
    {
      title: "Soft Skills",
      icon: <Globe className="text-indigo-600" size={24} />,
      skills: ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/50 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Proficiency</h3>

          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: "90%" },
              { name: "Backend Development", level: "85%" },
              { name: "Data Structures & Algorithms", level: "80%" },
              { name: "Database Management", level: "75%" },
              { name: "Mobile App Development", level: "70%" }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-indigo-600 font-medium">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;