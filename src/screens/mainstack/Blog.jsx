import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar'
import Footer from '../../components/Footer'
import background from '../../assets/bg.png'
import wheel from '../../assets/valve.jpg'
import axios from 'axios'
import API_URL from './config'

export default function BlogScreen() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${API_URL}/api/blog`)
      setBlogPosts(res.data)
    } catch (err) {
      setBlogPosts([])
    } finally {
      setLoading(false)
    }
  }

  // Collect all unique tags for categories
  const categories = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags || [])))]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags?.includes(selectedCategory))

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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', background: '#f8f9fa' }}>
      <Navbar />
      {/* Animated background gear/wheel */}
      <motion.img
        src={wheel}
        alt="Gear Wheel"
        initial={{ rotate: 0, opacity: 0.08 }}
        animate={{ rotate: 360, opacity: 0.08 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        style={{
          position: 'fixed',
          right: '-120px',
          top: '60vh',
          width: '320px',
          zIndex: 0,
          filter: 'blur(2px) grayscale(1)',
          pointerEvents: 'none',
        }}
      />
      {/* Hero Section - Consistent with Home, but 50vh */}
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
            Our Blog
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
            Stay updated with the latest insights, trends, and innovations in procurement and engineering
          </motion.p>
        </div>
        {/* Remove scroll indicator here */}
        {/* In the hero section, move the Contact button to the bottom, below all content, centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', zIndex: 2, marginTop: 32 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                background: 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 700,
                boxShadow: '0 2px 8px #0002',
                cursor: 'pointer',
                marginTop: 10
              }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        {/* Category Filter */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            padding: '40px 5%',
            backgroundColor: '#f8f9fa'
          }}
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, backgroundColor: '#FFA500', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: 'none',
                  backgroundColor: selectedCategory === category ? '#667eea' : 'white',
                  color: selectedCategory === category ? 'white' : '#333',
                  cursor: 'pointer',
                  fontWeight: '500',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            padding: '60px 5%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid #f3f3f3',
                borderTop: '3px solid #667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto'
              }}></div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {filteredPosts.map((post) => (
                <motion.article
                  key={post._id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    height: '200px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>{post.title}</h3>
                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '12px' }}>{post.excerpt || post.content?.slice(0, 120) + '...'}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
                      <span style={{ color: '#888', fontSize: '15px' }}><strong>Author:</strong> {post.author}</span>
                      <span style={{ color: '#888', fontSize: '15px' }}><strong>Date:</strong> {post.date ? new Date(post.date).toLocaleDateString() : ''}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {post.tags && post.tags.map(tag => (
                        <span key={tag} style={{ background: '#e0e7ff', color: '#667eea', borderRadius: '12px', padding: '4px 12px', fontSize: '13px', fontWeight: 500 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.section>
      </main>
      <Footer />
    </div>
  )
} 