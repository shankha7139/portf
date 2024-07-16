import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-bold mb-6 text-center"
      >
        Shankharishi Khan
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-3xl mb-8 text-center text-blue-400"
      >
        Aspiring Software Developer
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mb-12"
      >
        <p className="text-xl mb-6 leading-relaxed">
          Passionate and innovative software developer with a strong foundation
          in full-stack web development and machine learning. Currently pursuing
          a degree in Computer Science at Birla Institute of Technology with an
          impressive 8.7 GPA, consistently demonstrating academic excellence
          throughout my educational journey.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
          My project portfolio showcases a diverse range of skills, from
          building complex MERN stack applications to implementing machine
          learning algorithms. With a keen eye for user experience and a drive
          for creating efficient, scalable solutions, I am poised to make
          significant contributions to the world of software development.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-blue-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Key Skills</h3>
          <ul className="list-disc list-inside">
            <li>Full-stack Web Development (MERN)</li>
            <li>Machine Learning and Data Analysis</li>
            <li>Problem Solving and Algorithm Design</li>
            <li>Agile Methodologies</li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-blue-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Interests</h3>
          <ul className="list-disc list-inside">
            <li>Artificial Intelligence</li>
            <li>Cloud Computing</li>
            <li>Mobile App Development</li>
            <li>Open Source Contributions</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 text-center">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
