// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Instagram,
//   Linkedin,
//   Dribbble,
//   Figma,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import Navbar from "../../components/Navbar";
// import Background from "../../components/Background";
// import me from "../../assets/me.png";
// import me2 from "../../assets/me2.png";
// import blog from "../../assets/blog.jpg";
// import ecomm from "../../assets/ecomm.png";
// import dating from "../../assets/dating.png";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

// {/* Array of project details: images, titles, descriptions */}
// const projects = [
//   {
//     image: blog,  // Replace with actual image URLs
//     title: 'Bloging Website',
//     description: 'Reality is build with react js, node js and mongodb technologies with Admin, editor, writers and users dashboards, .',
//     link: '/projects/1',
//   },

//   {
//     image: 'project2.jpg',
//     title: 'Project 2',
//     description: 'This is a brief description of project 2 and the technologies used.',
//     link: '/projects/2',
//   },

//   {
//     image: 'project3.jpg',
//     title: 'Project 3',
//     description: 'This is a brief description of project 3 and the technologies used.',
//     link: '/projects/3',
//   },

// ];
// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white-100 dark:bg-black-900 text-black-800 dark:text-white-200">
//       {/* Hero Section */}
//       <Navbar />
//       <section
//         className="py-20 lg:py-32 flex flex-col justify-center min-h-screen bg-white dark:bg-black"
//         style={{
//           backgroundColor: "black",
//         }}
//       >
//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="lg:flex lg:items-center lg:justify-between">
//             <motion.div
//               variants={itemVariants}
//               className="space-y-8 lg:space-y-10"
//             >
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl gothic-font"
//               >
//                 <span
//                   className="block"
//                   style={{
//                     color: "grey",
//                   }}
//                 >
//                   Hi, I am
//                 </span>
//                 <span className="block text-blue-700 dark:text-blue-400">
//                   Champion Aden
//                 </span>
//               </motion.h1>
//               <motion.p
//                 variants={itemVariants}
//                 className="text-xl text-gray-700 dark:text-gray-300 gothic-font max-w-3xl"
//                 style={{
//                   color: "white",
//                 }}
//               >
//                 Web and Mobile App Developer crafting innovative digital
//                 experiences with cutting edge technologies.
//               </motion.p>
//               <motion.div variants={itemVariants} className="flex space-x-6">
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                 >
//                   <span className="sr-only">Instagram</span>
//                   <Instagram className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                 >
//                   <span className="sr-only">LinkedIn</span>
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                 >
//                   <span className="sr-only">Dribbble</span>
//                   <Dribbble className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                 >
//                   <span className="sr-only">Figma</span>
//                   <Figma className="h-6 w-6" />
//                 </a>
//               </motion.div>
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
//               >
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 md:text-lg gothic-font"
//                 >
//                   Hire Me
//                 </a>
//                 <a
//                   href="/cv"
//                   className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg gothic-font"
//                 >
//                   Download CV
//                 </a>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               variants={itemVariants}
//               className="mt-10 lg:mt-0 lg:ml-10"
//             >
//               <img
//                 src={me}
//                 alt="Champion Aden"
//                 className="w-64 h-64 rounded-full shadow-lg object-cover"
//                 style={{
//                   backgroundColor: "darkblue",
//                 }}
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//         <Background />
//       </section>

//       {/* About Me Section */}
//       <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
//           >
//             About Me
//           </motion.h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div variants={itemVariants}>
//               <img
//                 src={me2}
//                 alt="About Champion Aden"
//                 className="w-full h-auto rounded-lg shadow-lg object-cover"
//               />
//             </motion.div>
//             <motion.div variants={itemVariants} className="space-y-6">
//               <p className="text-lg text-gray-700 dark:text-gray-300 gothic-font">
//                 With over 5 years of experience in web and mobile app
//                 development, I specialize in creating intuitive and efficient
//                 digital solutions. My passion lies in leveraging cutting-edge
//                 technologies to solve complex problems and deliver exceptional
//                 user experiences.
//               </p>
//               <p className="text-lg text-gray-700 dark:text-gray-300 gothic-font">
//                 I'm proficient in a wide range of technologies including React,
//                 Next.js, Node.js, and various mobile development frameworks. My
//                 approach combines technical expertise with creative
//                 problem-solving to build scalable and innovative applications.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
//                   React
//                 </span>
//                 <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
//                   Next.js
//                 </span>
//                 <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
//                   Node.js
//                 </span>
//                 <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
//                   Mobile Development
//                 </span>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//      {/* Projects Section */}
// <section id="projects" className="py-20 bg-white dark:bg-black"
//   style={{
//     backgroundColor: 'black'
//   }}
// >
//   <motion.div
//     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//     variants={containerVariants}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//   >
//     <motion.h2
//       variants={itemVariants}
//       className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
//       style={{
//         color: 'green'
//       }}
//     >
//       Featured Projects
//     </motion.h2>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project, index) => (
//         <motion.div
//           key={index}
//           variants={itemVariants}
//           className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//         >
//           <img
//             src={project.image}  // Use the unique image for each project
//             alt={project.title}
//             className="w-full h-48 object-cover"
//           />
//           {/* Project description block */}
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white gothic-font mb-2">
//               {project.title}
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300 gothic-font mb-4">
//               {project.description}
//             </p>
//             <a
//               href={project.link}
//               className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium gothic-font"
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>

//       {/* CV Section */}
//       <section id="cv" className="py-20 bg-white dark:bg-black">
//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
//           >
//             Curriculum Vitae
//           </motion.h2>
//           <motion.div
//             variants={itemVariants}
//             className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white gothic-font mb-4">
//                   Education
//                 </h3>
//                 <ul className="space-y-4">
//                   <li>
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
//                       Bachelor of Science in Computer Science
//                     </h4>
//                     <p className="text-gray-700 dark:text-gray-300 gothic-font">
//                       University Name, 2015-2019
//                     </p>
//                   </li>
//                   <li>
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
//                       Master of Science in Software Engineering
//                     </h4>
//                     <p className="text-gray-700 dark:text-gray-300 gothic-font">
//                       University Name, 2019-2021
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white gothic-font mb-4">
//                   Experience
//                 </h3>
//                 <ul className="space-y-4">
//                   <li>
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
//                       Senior Web Developer
//                     </h4>
//                     <p className="text-gray-700 dark:text-gray-300 gothic-font">
//                       Tech Solutions Inc., 2021-Present
//                     </p>
//                     <p className="text-gray-600 dark:text-gray-400 gothic-font">
//                       Led development of enterprise-level web applications using
//                       React and Node.js.
//                     </p>
//                   </li>
//                   <li>
//                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
//                       Mobile App Developer
//                     </h4>
//                     <p className="text-gray-700 dark:text-gray-300 gothic-font">
//                       Mobile Innovations Co., 2019-2021
//                     </p>
//                     <p className="text-gray-600 dark:text-gray-400 gothic-font">
//                       Developed cross-platform mobile applications using React
//                       Native.
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-8 text-center">
//               <a
//                 href="/cv"
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 gothic-font"
//               >
//                 Download Full CV
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
//           >
//             Get in Touch
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div variants={itemVariants}>
//               <form className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 gothic-font"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 gothic-font bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 gothic-font"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 gothic-font bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 gothic-font"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 gothic-font bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                   ></textarea>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 gothic-font"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//             <motion.div variants={itemVariants} className="space-y-6">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white gothic-font">
//                 Contact Information
//               </h3>
//               <div className="flex items-center space-x-4">
//                 <Mail className="h-6 w-6 text-blue-700 dark:text-blue-400" />
//                 <span className="text-gray-700 dark:text-gray-300 gothic-font">
//                   champion.aden@example.com
//                 </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="h-6 w-6 text-blue-700 dark:text-blue-400" />
//                 <span className="text-gray-700 dark:text-gray-300 gothic-font">
//                   +1 (123) 456-7890
//                 </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="h-6 w-6 text-blue-700 dark:text-blue-400" />
//                 <span className="text-gray-700 dark:text-gray-300 gothic-font">
//                   New York, NY, USA
//                 </span>
//               </div>
//               <div className="mt-8">
//                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white gothic-font mb-4">
//                   Follow Me
//                 </h4>
//                 <div className="flex space-x-4">
//                   <a
//                     href="#"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                   >
//                     <Instagram className="h-6 w-6" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                   >
//                     <Linkedin className="h-6 w-6" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                   >
//                     <Dribbble className="h-6 w-6" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
//                   >
//                     <Figma className="h-6 w-6" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Dribbble,
  Figma,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";
import me from "../../assets/me.png";
import me2 from "../../assets/me2.png";
import blog from "../../assets/blog.jpg";
import ecomm from "../../assets/ecomm.png";
import dating from "../../assets/dating.png";
import bg from "../../assets/bgdark.png";
import bgs from "../../assets/bgmid.png";
import { useMediaQuery } from "react-responsive";

// Animation Variants
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

// Array of project details: images, titles, descriptions
const projects = [
  {
    image: blog,
    title: "Blogging Website",
    description:
      "A full-stack blogging platform built with React, Node.js, and MongoDB. Includes admin, editor, writer, and user dashboards.",
    link: "/projects/1",
  },
  {
    image: ecomm,
    title: "E-commerce Platform",
    description:
      "An e-commerce application featuring product listings, payment integration, and user authentication. Built with Next.js and Stripe.",
    link: "/projects/2",
  },
  {
    image: dating,
    title: "Dating App",
    description:
      "A mobile-first dating app with real-time chat and location-based search, built with React Native and Firebase.",
    link: "/projects/3",
  },
];

// Array of portfolio items with images and descriptions
const portfolioItems = [
  {
    image: ecomm,
    title: "E-commerce Platform",
    description:
      "An interactive e-commerce platform with secure payment options, user accounts, and product listings.",
    link: "/portfolio/1",
  },
  {
    image: dating,
    title: "Etok",
    description:
      "A sleek and modern dating app with a real-time chat feature and location and interest-based matches.",
    link: "https://www.etok.us",
  },
  {
    image: blog,
    title: "Blogging Website",
    description:
      "A feature-rich blogging site with roles like admin, editor, and writer, along with user management.",
    link: "/portfolio/3",
  },
];

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="min-h-screen bg-white-100 dark:bg-black-900 text-black-800 dark:text-white-200"
    >
      {/* Hero Section */}
      <Navbar />
      <section
        className="py-20 lg:py-32 flex flex-col justify-center min-h-screen bg-white dark:bg-black"
        style={{
          position: "relative",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div
              variants={itemVariants}
              className="space-y-8 lg:space-y-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl gothic-font"
              >
                <span
                  className="block"
                  style={{ color: "grey", margin: "16px auto" }}
                >
                  Hi, I am
                </span>
                <span className="block text-blue-700 dark:text-blue-400">
                  Champion Aden
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-700 dark:text-gray-300 gothic-font max-w-3xl"
                style={{ color: "white" }}
              >
                Web and Mobile App Developer crafting innovative digital
                experiences with cutting-edge technologies.
              </motion.p>
              <motion.div variants={itemVariants} className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <Dribbble className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <Figma className="h-6 w-6" />
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 md:text-lg gothic-font"
                  style={{
                    width: isMobile ? "40%" : "auto",
                  }}
                >
                  Hire Me
                </a>
                <a
                  href="/cv"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg gothic-font"
                  style={{
                    width: isMobile ? "40%" : "auto",
                  }}
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-10 lg:mt-0 lg:ml-10"
            >
              <img
                src={me}
                alt="Champion Aden"
                className="w-64 h-64 rounded-full shadow-lg object-cover"
                style={{
                  backgroundColor: "darkblue",
                  // position: "relative",
                  // backgroundImage: `url(${bg})`,
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
        <Background />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                src={me2}
                alt="About Champion Aden"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 gothic-font">
                With over 5 years of experience in web and mobile app
                development, I specialize in creating intuitive and efficient
                digital solutions. My passion lies in leveraging cutting-edge
                technologies to solve complex problems and deliver exceptional
                user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 gothic-font">
                I'm proficient in a wide range of technologies including React,
                Next.js, Node.js, and various mobile development frameworks. My
                approach combines technical expertise with creative
                problem-solving to build scalable and innovative applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  React
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Mobile Development
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-black"
        style={{
          position: "relative",
          backgroundImage: `url(${bgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          color: "white" 
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
            style={{ color: "darkblue" }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white gothic-font mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 gothic-font mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium gothic-font"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-gray-100 dark:bg-gray-900"
        // style={{ backgroundColor: "black", color: "white" }}
        style={{
          position: "relative",
          backgroundImage: `url(${bgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          color: "white" 
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
            style={{ color: "grey" }}
          >
            Portfolio
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white gothic-font mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 gothic-font mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium gothic-font"
                  >
                    View Live Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-white dark:bg-black">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl gothic-font text-center mb-12"
          >
            Curriculum Vitae
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white gothic-font mb-4">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 gothic-font">
                      University Name, 2015-2019
                    </p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
                      Master of Science in Software Engineering
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 gothic-font">
                      University Name, 2019-2021
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white gothic-font mb-4">
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
                      Senior Web Developer
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 gothic-font">
                      Tech Solutions Inc., 2021-Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 gothic-font">
                      Led development of enterprise-level web applications using
                      React and Node.js.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white gothic-font">
                      Mobile App Developer
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 gothic-font">
                      Mobile Innovations Co., 2019-2021
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 gothic-font">
                      Developed cross-platform mobile applications using React
                      Native.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/cv"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 gothic-font"
              >
                Download Full CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
