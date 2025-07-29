import React from 'react'
import Navbar, { NAVBAR_HEIGHT } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import chevron from '../../assets/chevron.png';
import procurement from '../../assets/procure.png';
import engineering from '../../assets/service2.jpeg';
import quality from '../../assets/service3.jpg';
import logistics from '../../assets/service4.jpeg';
import consulting from '../../assets/service5.jpeg';
import automation from '../../assets/service6.jpeg';
import oil from '../../assets/oil.jpeg';
import gas from '../../assets/gas.jpg';
import gasket from '../../assets/gasket.jpg';
import stainless from '../../assets/stainless.jpg';
import valve from '../../assets/valve.jpg';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { image: procurement, title: 'Procurement Management', description: 'Streamline your purchasing processes and reduce costs with our comprehensive procurement management solutions.' },
    { image: engineering, title: 'Engineering Services', description: 'Expert engineering and technical solutions for complex industrial projects.' },
    { image: quality, title: 'Quality Assurance', description: 'Comprehensive quality control ensuring the highest standards for all products and services.' },
    { image: logistics, title: 'Logistics Support', description: 'Seamless logistics management for timely and efficient deliveries.' },
    { image: consulting, title: 'Consulting & Advisory', description: 'Get expert advice and tailored strategies to improve your procurement and supply chain operations.' },
    { image: automation, title: 'Automation & Integration', description: 'Embrace the future of efficiency with AI and business automation integrations.' },
    { image: oil, title: 'Oil & Gas Solutions', description: 'Specialized procurement and engineering for the oil & gas sector.' },
    { image: gas, title: 'Gas Distribution', description: 'Safe and reliable gas distribution and management services.' },
    { image: gasket, title: 'Gasket & Sealing', description: 'Premium gasket and sealing solutions for leak prevention.' },
    { image: stainless, title: 'Stainless Fabrication', description: 'Custom stainless steel fabrication for industrial needs.' },
    { image: valve, title: 'Valve Solutions', description: 'Reliable valve solutions for flow control and safety.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f8f9fa' }}>
      <Navbar />
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
          marginBottom: 2,
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
            Our Services
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
            Explore our world-class procurement and engineering services.
          </motion.p>
        </div>
        {/* Remove scroll indicator here */}
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
      <main style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 40px 20px', position: 'relative', zIndex: 2, marginTop: 10 }}>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', marginTop: 15 }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 10px 30px #FFA50033' }}
                style={{
                  background: 'white',
                  borderRadius: '18px',
                  boxShadow: '0 4px 16px #0001',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
                  style={{ width: '100%', height: '160px', objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
                />
                <div style={{ padding: '24px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#4B0082' }}>{service.title}</h2>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '10px' }}>{service.description}</p>
          </div>
              </motion.div>
        ))}
      </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '80px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#FFA500' }}>Why Choose Our Services?</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <motion.li whileHover={{ scale: 1.05, background: '#FFA500', color: '#fff' }} style={{ flex: '1 1 200px', maxWidth: '300px', background: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px', fontWeight: 600, fontSize: 16, transition: 'all 0.3s' }}>Expertise in Global Markets</motion.li>
            <motion.li whileHover={{ scale: 1.05, background: '#FFA500', color: '#fff' }} style={{ flex: '1 1 200px', maxWidth: '300px', background: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px', fontWeight: 600, fontSize: 16, transition: 'all 0.3s' }}>Customized Solutions</motion.li>
            <motion.li whileHover={{ scale: 1.05, background: '#FFA500', color: '#fff' }} style={{ flex: '1 1 200px', maxWidth: '300px', background: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px', fontWeight: 600, fontSize: 16, transition: 'all 0.3s' }}>Cutting-edge Technology</motion.li>
            <motion.li whileHover={{ scale: 1.05, background: '#FFA500', color: '#fff' }} style={{ flex: '1 1 200px', maxWidth: '300px', background: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px', fontWeight: 600, fontSize: 16, transition: 'all 0.3s' }}>Proven Track Record</motion.li>
            <motion.li whileHover={{ scale: 1.05, background: '#FFA500', color: '#fff' }} style={{ flex: '1 1 200px', maxWidth: '300px', background: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px', fontWeight: 600, fontSize: 16, transition: 'all 0.3s' }}>24/7 Support</motion.li>
        </ul>
        </motion.section>
      </main>
    <Footer />
    </div>
  );
}