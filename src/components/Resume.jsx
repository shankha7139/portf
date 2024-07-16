import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-8">Resume</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Shankharishi Khan</h3>
        <p className="mb-4">Software Developer</p>
        <h4 className="text-xl font-bold mb-2">Education</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            Birla Institute of Technology - B.Tech in Computer Science (GPA:
            8.7)
          </li>
          <li>Ramakrishna Mission Vidyapith Deoghar - CBSE Class 12 (94.8%)</li>
          <li>St. Paul's Academy - ICSE Class 10 (91%)</li>
        </ul>
        <h4 className="text-xl font-bold mb-2">Skills</h4>
        <ul className="list-disc list-inside mb-4">
          <li>JavaScript, React, Node.js, MongoDB</li>
          <li>Python, Machine Learning</li>
          <li>Full Stack Web Development</li>
        </ul>
        <h4 className="text-xl font-bold mb-2">Projects</h4>
        <ul className="list-disc list-inside mb-4">
          <li>MERN Chat App</li>
          <li>MERN Food App</li>
          <li>MERN Matrimony App</li>
          <li>ML Movie Predictor</li>
        </ul>
      </div>
      <motion.a
        href="/path-to-your-resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </motion.a>
    </motion.div>
  );
};

export default Resume;
