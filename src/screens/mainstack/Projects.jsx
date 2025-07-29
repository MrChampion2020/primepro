import React, { useState } from 'react';
<<<<<<< HEAD
import Navbar, { NAVBAR_HEIGHT } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import chevron from '../../assets/chevron.png';
=======
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpeg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpeg';
import service5 from '../../assets/service5.jpeg';
import service6 from '../../assets/service6.jpeg';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { useNavigate, useParams } from "react-router-dom";
>>>>>>> b353fb77c3405f824c6cff804155131a51508516

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: 'Oil & Gas Supply Chain Optimization',
      client: 'Nigerian National Petroleum Corporation',
      description: 'Implemented a comprehensive supply chain optimization solution for NNPC, resulting in a 20% reduction in procurement costs and improved operational efficiency.',
<<<<<<< HEAD
      image: service1,
=======
      image: service1,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
    { 
      title: 'Manufacturing Equipment Procurement',
      client: 'Dangote Group',
      description: 'Managed the procurement of state-of-the-art manufacturing equipment for Dangote Group\'s new production facility, ensuring timely delivery and cost-effectiveness.',
<<<<<<< HEAD
      image: service2,
=======
      image: service2,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
    { 
      title: 'Healthcare Supplies Management',
      client: 'Lagos State Ministry of Health',
      description: 'Developed and implemented an efficient healthcare supplies management system for Lagos State, improving inventory accuracy and reducing stockouts by 40%.',
<<<<<<< HEAD
      image: service3,
=======
      image: service3,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
    { 
      title: 'Telecom Infrastructure Procurement',
      client: 'MTN Nigeria',
      description: 'Coordinated the procurement of telecom infrastructure for MTN Nigeria\'s network expansion project, resulting in faster deployment and cost savings.',
<<<<<<< HEAD
      image: service4,
=======
      image: service4,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
    { 
      title: 'Sustainable Agriculture Supply Chain',
      client: 'Nigerian Agricultural Cooperative',
      description: 'Designed and implemented a sustainable supply chain solution for a large agricultural cooperative, improving farmer incomes and reducing food waste.',
<<<<<<< HEAD
      image: service5,
=======
      image: service5,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
    { 
      title: 'E-commerce Fulfillment Center Setup',
      client: 'Jumia',
      description: 'Managed the procurement and setup of equipment and systems for Jumia\'s new fulfillment center, optimizing order processing and delivery times.',
<<<<<<< HEAD
      image: service6,
=======
      image: service6,  // Replaced with imported image
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
<<<<<<< HEAD
      {/* Hero Section - 80vh, consistent with new design */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: 0,
          paddingTop: 0,
          borderRadius: '0 0 40px 40px',
          marginBottom: 10,
          textAlign: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.2
            }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              marginBottom: '40px',
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            Showcasing our successful projects and achievements.
          </motion.p>
        </div>
        {/* In the hero section, move the Contact button to the bottom, below all content, centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', zIndex: 2, marginTop: 32 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08, backgroundColor: '#FFA500', color: '#fff' }}
              whileTap={{ scale: 0.96, rotate: 2 }}
              style={{
                background: 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)',
                color: 'white',
                fontWeight: 'bold',
                padding: '15px 30px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 165, 0, 0.3)',
                transition: 'background 0.3s',
              }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
      <main style={{ flexGrow: 1, marginTop: 10, position: 'relative', zIndex: 2 }}>
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '60px 5%', background: '#fff', borderRadius: 20, margin: '20px auto', maxWidth: 1200 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#4B0082' }}>Project Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #667eea22' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#f8f9fa',
                  borderRadius: 16,
                  boxShadow: '0 2px 8px #0001',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative',
                  minHeight: 420
                }}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#4B0082', marginBottom: 10 }}>{project.title}</h3>
                  <p style={{ color: '#667eea', fontWeight: 500, fontSize: 16, marginBottom: 8 }}>{project.client}</p>
                  <p style={{ color: '#333', fontSize: 16 }}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
=======
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#4B0082' }}>Our Projects</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }} onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#4B0082' }}>{project.title}</h3>
                <p style={{ fontSize: '16px', color: '#666' }}>{project.client}</p>
              </div>
            </div>
          ))}
        </div>

>>>>>>> b353fb77c3405f824c6cff804155131a51508516
        {selectedProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90%',
              overflow: 'auto',
<<<<<<< HEAD
              position: 'relative'
=======
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
            }}>
              <button onClick={() => setSelectedProject(null)} style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}>&times;</button>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>{selectedProject.title}</h2>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Client: {selectedProject.client}</p>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }} />
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{selectedProject.description}</p>
            </div>
          </div>
        )}
<<<<<<< HEAD
      </main>
=======

        <section style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>Let's discuss how we can help optimize your procurement and supply chain processes.</p>
          <a href="/contact" style={{ 
            display: 'inline-block',
            backgroundColor: '#4B0082', 
            color: 'white', 
            padding: '15px 30px', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}>Contact Us</a>
        </section>
      </div>
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
      <Footer />
    </div>
  );
}
