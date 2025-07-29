import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar'
import Footer from '../../components/Footer'
import chevron from '../../assets/chevron.png'
import shell from '../../assets/Shell.jpg'
import mobil from '../../assets/mobil.png'
import nnpc from '../../assets/nnpc.jpg'
import heritage from '../../assets/heritage.jpeg'
import backgroundImage from '../../assets/bg.png'
import project1 from '../../assets/service1.jpg'
import project2 from '../../assets/service2.jpeg'
import project3 from '../../assets/service3.jpg'
import project4 from '../../assets/service4.jpeg'
import project5 from '../../assets/service5.jpeg'
import pipeImg from '../../assets/ball.png';
import valveImg from '../../assets/valve.jpg';
import gasketImg from '../../assets/gasket.jpg';
import screwsImg from '../../assets/screws.jpg';
import cableImg from '../../assets/cable.jpg';
import oilImg from '../../assets/oil.jpeg';
import gasImg from '../../assets/gas.jpg';
import stainlessImg from '../../assets/stainless.jpg';
import wellheadImg from '../../assets/wellhead.jpg';
import heritageImg from '../../assets/heritage.jpeg';
import nnpcImg from '../../assets/nnpc.jpg';
import shellImg from '../../assets/Shell.jpg';
import chevronImg from '../../assets/chevron.png';

export default function HomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Only 8 products, use real images
  const products = [
    { name: 'Pipes', image: pipeImg },
    { name: 'Valves', image: valveImg },
    { name: 'Gaskets', image: gasketImg },
    { name: 'Screws', image: screwsImg },
    { name: 'Cables', image: cableImg },
    { name: 'Oil', image: oilImg },
    { name: 'Gas', image: gasImg },
    { name: 'Stainless Steel', image: stainlessImg },
  ];

  const services = [
    { 
      name: 'Procurement Management', 
      description: 'End-to-end procurement solutions that optimize costs and streamline processes.',
      icon: '📋',
      features: ['Strategic sourcing', 'Supplier management', 'Cost optimization']
    },
    { 
      name: 'Engineering Services', 
      description: 'Expert engineering solutions for complex industrial projects.',
      icon: '⚙️',
      features: ['Design & planning', 'Technical consulting', 'Project management']
    },
    { 
      name: 'Quality Assurance', 
      description: 'Comprehensive quality control ensuring the highest standards.',
      icon: '✅',
      features: ['Quality testing', 'Compliance monitoring', 'Certification support']
    },
    { 
      name: 'Logistics Support', 
      description: 'Seamless logistics management for timely and efficient deliveries.',
      icon: '🚚',
      features: ['Supply chain optimization', 'Inventory management', 'Delivery tracking']
    },
  ]

  const testimonials = [
    { 
      name: 'Emmanuel', 
      company: 'Runorx', 
      text: 'PrimePro has transformed our procurement process. Their expertise and dedication have significantly improved our operational efficiency.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    { 
      name: 'Champion', 
      company: 'Rented pages', 
      text: 'Their procurement solutions have revolutionized our business operations. The team is professional, responsive, and delivers exceptional results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    { 
      name: 'Sarah Johnson', 
      company: 'TechCorp Industries', 
      text: 'Working with PrimePro has been a game-changer for our engineering projects. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
  ]

  const clients = [chevron, shell, mobil, nnpc, heritage]
  const projects = [project1, project2, project3, project4, project5]

  const stats = [
    { number: '700+', label: 'Projects Completed' },
    { number: '60+', label: 'Happy Clients' },
    { number: '7+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      <Navbar />
      <main style={{ flexGrow: 1, marginTop: NAVBAR_HEIGHT, position: 'relative', zIndex: 2 }}>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{
          position: 'relative',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginTop: 0,
            paddingTop: 0,
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 1.2 }}
            style={{
              position: 'absolute',
              inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
              zIndex: 1
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 7vw, 64px)',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.1,
              color: 'white',
              zIndex: 2,
              letterSpacing: 1.5,
              textShadow: '0 4px 32px #764ba2cc',
            }}
          >
            Procurement Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(16px, 3vw, 28px)',
              marginBottom: '40px',
              opacity: 0.92,
              lineHeight: 1.5,
              color: 'white',
              zIndex: 2,
              maxWidth: 700,
              margin: '0 auto 40px',
              textShadow: '0 2px 16px #667eea99',
            }}
          >
            Let us help your business by purchasing our best quality products. Partner with us as we provide the best procurement and engineering services you've ever had.
          </motion.p>
          {/* In the hero section button group, only include one Contact button in the row with the other main buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', zIndex: 2 }}
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
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: '#fff', color: '#667eea' }}
                whileTap={{ scale: 0.96, rotate: -2 }}
                style={{
                  background: 'transparent',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  border: '2px solid white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '80px 5%',
            backgroundColor: '#f8f9fa'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center'
                }}
              >
                <h3 style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 'bold',
                  color: '#667eea',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </h3>
            <p style={{
                  fontSize: '18px',
                  color: '#666',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            background: 'linear-gradient(135deg, #fff 60%, #667eea11 100%)',
            borderRadius: '0 0 40px 40px',
            marginBottom: 40,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 'bold',
    textAlign: 'center',
                marginBottom: '20px',
                color: '#667eea',
                letterSpacing: 1.2,
                textShadow: '0 2px 16px #764ba244',
                background: 'linear-gradient(90deg, #667eea 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Products
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '30px',
                justifyItems: 'center',
              }}
            >
    {products.map((product, index) => (
                <Link to="/products" key={index} style={{ width: '100%', maxWidth: 320, textDecoration: 'none' }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.09, rotate: 2, boxShadow: '0 8px 32px #667eea33' }}
                    whileTap={{ scale: 0.97, rotate: -2, boxShadow: '0 2px 8px #FFA50055' }}
                    style={{
                      backgroundColor: 'white',
                      padding: '28px 18px',
                      borderRadius: '20px',
        textAlign: 'center',
                      boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                      border: '1.5px solid #f0f0f0',
                      transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                      width: '100%',
                      maxWidth: 320,
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1 * index }}
                      style={{
                        width: '100%',
                        height: 140,
                        objectFit: 'cover',
                        borderRadius: 14,
                        marginBottom: 18,
                        boxShadow: '0 2px 8px #667eea22',
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    />
        <h3 style={{
                      fontSize: '22px',
          fontWeight: 'bold',
                      marginBottom: 0,
                      color: '#333',
                      letterSpacing: 0.5,
                      textShadow: '0 2px 8px #667eea22',
                    }}>
                      {product.name}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
  </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            backgroundColor: '#f8f9fa'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 'bold',
            textAlign: 'center',
                marginBottom: '20px',
                color: '#333'
              }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '18px',
                textAlign: 'center',
                marginBottom: '60px',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto 60px'
              }}
            >
              Comprehensive solutions tailored to your business needs
            </motion.p>
            
          <div style={{
            display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
          }}>
            {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  style={{
                backgroundColor: 'white',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    fontSize: '50px',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    {service.icon}
                  </div>
                <h3 style={{
                    fontSize: '24px',
                  fontWeight: 'bold',
                    marginBottom: '15px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    {service.name}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    {service.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{
                        padding: '8px 0',
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{
                          color: '#667eea',
                          fontSize: '18px'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}>
              About Us
            </h2>
              <p style={{
              fontSize: '18px',
              marginBottom: '40px',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6',
              opacity: 0.9
              }}>
                With over 20 years of experience, we are a leading procurement and engineering services company in Nigeria. Our commitment to excellence and innovation has made us the preferred partner for businesses across various industries.
              </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'white',
                  color: '#667eea',
                  fontWeight: 'bold',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                  Learn More About Us
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            backgroundColor: 'white'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 'bold',
            textAlign: 'center',
                marginBottom: '20px',
                color: '#333'
              }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '18px',
                textAlign: 'center',
                marginBottom: '60px',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto 60px'
              }}
            >
              Don't just take our word for it - hear from our satisfied clients
            </motion.p>
            
          <div style={{
            display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
          }}>
            {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#FFD700', fontSize: '20px' }}>★</span>
                    ))}
                  </div>
                <p style={{
                    marginBottom: '20px',
                  fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#555'
                  }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>{testimonial.name}</p>
                      <p style={{ color: '#666', fontSize: '14px' }}>{testimonial.company}</p>
                    </div>
              </div>
                </motion.div>
            ))}
            </div>
          </div>
        </motion.section>

        {/* Clients Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '80px 5%',
            backgroundColor: '#f8f9fa'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 'bold',
            textAlign: 'center',
              marginBottom: '60px',
              color: '#333'
            }}>
              Our Trusted Clients
            </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
              gap: '60px',
              opacity: 0.7
          }}>
            {clients.map((client, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  src={client}
                  alt={`Client ${index + 1}`}
                  style={{
                    height: 'clamp(40px, 8vw, 80px)',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
                  onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            backgroundColor: 'white'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 'bold',
            textAlign: 'center',
                marginBottom: '20px',
                color: '#333'
              }}
            >
              Our Projects
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '18px',
                textAlign: 'center',
                marginBottom: '60px',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto 60px'
              }}
            >
              Showcasing our successful projects and achievements
            </motion.p>
            
          <div style={{
            display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
          }}>
            {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    position: 'relative',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                src={project} 
                alt={`Project ${index + 1}`} 
                style={{
                  width: '100%',
                      height: '250px',
                  objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                }} 
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
                </motion.div>
            ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '100px 5%',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Stay Updated
            </h2>
            <p style={{
              fontSize: '18px',
              marginBottom: '40px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Subscribe to our newsletter for the latest insights, project updates, and industry trends
            </p>
            <form style={{
              display: 'flex',
              gap: '15px',
              maxWidth: '500px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '15px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.section>
      </main>
      <Footer />
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}