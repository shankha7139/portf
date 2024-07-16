import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 60 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 60 },
  { name: "MongoDB", level: 70 },
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 40 },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
            <motion.div
              className="bg-gray-700 rounded-full h-2.5"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="bg-blue-600 h-2.5 rounded-full"></div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
