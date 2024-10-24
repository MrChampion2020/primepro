import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import bgs from "../../assets/bgmid.png";
import me from "../../assets/me.png";


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

const stats = [
  { icon: <Users size={24} />, title: "Clients Served", value: "30+" },
  { icon: <Target size={24} />, title: "Projects Completed", value: "50+" },
  { icon: <Award size={24} />, title: "Years of Experience", value: "5+" },
  { icon: <TrendingUp size={24} />, title: "Annual Growth", value: "25%" },
];

export default function About() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20"
    style={{
      position: "relative",
          backgroundImage: `url(${bgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
    }}>
      <Navbar />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          backgroundColor: 'black',
          width: '100vw',
          marginTop: 50
        }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12"
        style={{
          fontSize: '20px',
          color: 'grey'
        }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{
          backgroundImage: `url(${bgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <motion.div variants={itemVariants}
          style={{
            borderRadius: '10%',
            backgroundColor: 'darkblue'
          }}
          >
            <img
              src={me}
              alt="About Your Name"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300"
            style={{
              color: 'grey'
            }}>
              With over 5 years of experience in web and mobile app development,
              I specialize in creating intuitive and efficient digital
              solutions. My passion lies in leveraging cutting-edge technologies
              to solve complex problems and deliver exceptional user
              experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300"
            style={{
              color: 'grey'
            }}>
              I'm proficient in a wide range of technologies including React,
              Next.js, Node.js, and various mobile development frameworks. My
              approach combines technical expertise with creative
              problem-solving to build scalable and innovative applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                React
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Next.js
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Node.js
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Mobile Development
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
          style={{
            color: 'grey'
          }}>
            My Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  {stat.icon}
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white"
                style={{
                  color: 'grey'
                }}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
