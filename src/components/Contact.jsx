import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    focus: {
      scale: 1.01,
      borderColor: "#4F46E5",
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              data-aos="fade-right"
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    icon: <Mail className="text-indigo-600" size={20} />,
                    title: "Email",
                    content: "bharatkumar160418gmail.com",
                    link: "mailto:bharatkumar160418gmail.com"
                  },
                  {
                    icon: <Phone className="text-indigo-600" size={20} />,
                    title: "Phone",
                    content: "+91 8986098572",
                    link: "tel:+918986098572"
                  },
                  {
                    icon: <MapPin className="text-indigo-600" size={20} />,
                    title: "Location",
                    content: "Bilaspur, Chhattisgarh, India",
                    link: null
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <motion.div
                      className="bg-indigo-100 p-3 rounded-full mr-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.link ? (
                        <motion.a
                          href={item.link}
                          className="text-gray-600 hover:text-indigo-600 transition-colors"
                          whileHover={{ color: "#4F46E5" }}
                        >
                          {item.content}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mb-6"
                  variants={itemVariants}
                >
                  Connect With Me
                </motion.h3>

                <div className="flex space-x-4">
                  {[
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>,
                      url: "https://github.com/bharat711kushwaha",
                      bgColor: "bg-gray-800",
                      hoverColor: "hover:bg-gray-900",
                      custom: 0
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .41.26l2.47 7.6h8.6l2.47-7.6A.43.43 0 0 1 19.18 2a.42.42 0 0 1 .11.16l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94zM5.48 4L3.2 11l9.8 7.1L5.48 4zm13.04 0L11 18.1 20.8 11l-2.28-7z" />
                      </svg>,
                      url: "https://gitlab.com/bharatkr.dev",
                      bgColor: "bg-orange-600",
                      hoverColor: "hover:bg-orange-700",
                      custom: 1
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>,
                      url: "https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281/",
                      bgColor: "bg-blue-600",
                      hoverColor: "hover:bg-blue-700",
                      custom: 2
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                      </svg>,
                      url: "mailto:bharatkumar160418gmail.com",
                      bgColor: "bg-red-600",
                      hoverColor: "hover:bg-red-700",
                      custom: 3
                    }
                  ].map((item) => (
                    <motion.a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.bgColor} text-white p-3 rounded-full ${item.hoverColor} transition-colors`}
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
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              data-aos="fade-left"
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                Send Me a Message
              </motion.h3>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    label: "Your Name",
                    id: "name",
                    type: "text",
                    placeholder: "Bharat",
                    required: true
                  },
                  {
                    label: "Your Email",
                    id: "email",
                    type: "email",
                    placeholder: "bharat@example.com",
                    required: true
                  },
                  {
                    label: "Subject",
                    id: "subject",
                    type: "text",
                    placeholder: "Job Opportunity",
                    required: true
                  }
                ].map((field, index) => (
                  <motion.div key={field.id} variants={itemVariants}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={field.placeholder}
                      variants={inputVariants}
                      whileFocus="focus"
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message here..."
                    variants={inputVariants}
                    whileFocus="focus"
                    data-aos="fade-left"
                    data-aos-delay={300}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;