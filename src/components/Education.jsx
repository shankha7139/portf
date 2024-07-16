import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Birla Institute of Technology",
    degree: "B.Tech in Computer Science",
    year: "2020 - 2024",
    grade: "GPA: 8.7 (after 8 semesters)",
    description:
      "Focused on advanced computer science concepts, software engineering, and machine learning. Participated in various hackathons and coding competitions.",
    achievements: [
      "Dean's List for Academic Excellence (2021, 2022, 2023)",
      "Winner of BIT Coding Championship 2022",
      "Published research paper on 'Efficient Algorithms for Big Data Processing'",
    ],
  },
  {
    institution: "Ramakrishna Mission Vidyapith Deoghar",
    degree: "CBSE Class 12",
    year: "2020",
    grade: "94.8%",
    description:
      "Specialized in Physics, Chemistry, and Mathematics. Actively participated in science fairs and mathematics olympiads.",
    achievements: [
      "School topper in Mathematics and Computer Science",
      "National level participant in Science Olympiad",
      "Best project award in school science exhibition",
    ],
  },
  {
    institution: "St. Paul's Academy",
    degree: "ICSE Class 10",
    year: "2018",
    grade: "91%",
    description:
      "Developed a strong foundation in sciences and mathematics. Engaged in various extracurricular activities including debates and quiz competitions.",
    achievements: [
      "Among top 5% in the ICSE board examinations",
      "Captain of the school quiz team",
      "Received 'Best All-Rounder' award",
    ],
  },
];

const EducationItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-bold text-blue-400">{item.institution}</h3>
    <p className="text-xl mt-2">{item.degree}</p>
    <div className="flex justify-between items-center mt-2">
      <p className="text-gray-400">{item.year}</p>
      <p className="text-green-400 font-semibold">{item.grade}</p>
    </div>
    <p className="mt-4">{item.description}</p>
    <h4 className="text-lg font-semibold mt-4 mb-2 text-blue-300">
      Key Achievements:
    </h4>
    <ul className="list-disc list-inside pl-4">
      {item.achievements.map((achievement, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + (i + 1) * 0.1 }}
          className="mb-1"
        >
          {achievement}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Educational Journey
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-xl mb-4">
          Continuous learning is my passion. Always exploring new technologies
          and expanding my skill set.
        </p>
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore My Skills
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Education;
