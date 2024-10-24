import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import blog from "../../assets/blog.jpg";
import ecomm from "../../assets/ecomm.png";
import dating from "../../assets/dating.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.",
    image: ecomm,
  },
  {
    title: "Mobile Fitness App",
    description:
      "Created a cross-platform fitness tracking app using React Native and Firebase.",
    image: dating,
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using Next.js and Tailwind CSS.",
    image: blog,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className="bg-white dark:bg-black py-20"
      style={{
        marginTop: 20,
      }}
    >
      <Navbar />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12"
        style={{
          fontSize: '20px',
          color: 'black'
        }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {selectedProject.description}
            </p>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
