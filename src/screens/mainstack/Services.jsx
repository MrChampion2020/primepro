
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Server, BookOpen } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const services = [
  { icon: <Code size={40} />, title: 'Web Development', description:  'Creating responsive and dynamic web applications using modern frameworks and technologies.' },
  { icon: <Smartphone size={40} />, title: 'Mobile App Development', description: 'Building native and cross-platform mobile applications for iOS and Android.' },
  { icon: <Palette size={40} />, title: 'UI/UX Design', description: 'Designing intuitive and visually appealing user interfaces for web and mobile applications.' },
  { icon: <Server size={40} />, title: 'Backend Development', description: 'Developing robust and scalable server-side applications and APIs.' },
  { icon: <BookOpen size={40} />, title: 'Technical Consulting', description: 'Providing expert advice on technology stack selection and architecture design.' },
]

export default function Services() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20"
    style={{
      marginTop: 20
    }}>
       <Navbar />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          padding: 20
        }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

     
   
   
