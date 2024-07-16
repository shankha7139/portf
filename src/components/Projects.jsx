import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

const projects = [
  {
    title: "MERN Chat App",
    description:
      "A real-time chat application built with the MERN stack. Features include user authentication, private messaging, group chats, and message encryption.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "JWT",
    ],
    link: "https://github.com/yourusername/mern-chat-app",
  },
  {
    title: "MERN Food App",
    description:
      "A comprehensive food ordering platform with features like restaurant listings, menu management, order tracking, and user reviews. Includes both customer and restaurant owner interfaces.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Stripe API",
    ],
    link: "https://github.com/yourusername/mern-food-app",
  },
  {
    title: "MERN Matrimony App",
    description:
      "A fully functional matrimony application with advanced matchmaking algorithms, user profiles, chat functionality, and a robust admin panel for site management and user moderation.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "AWS S3",
    ],
    link: "https://github.com/yourusername/mern-matrimony-app",
  },
  {
    title: "ML Movie Predictor",
    description:
      "A machine learning model that predicts movie success based on various factors such as cast, budget, genre, and release date. Utilizes data from IMDb and applies advanced ML algorithms for accurate predictions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/yourusername/ml-movie-predictor",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech) => (
        <span key={tech} className="bg-blue-600 px-2 py-1 rounded text-sm">
          {tech}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300"
    >
      View Project
    </a>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Skills />
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
