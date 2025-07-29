import React, { useState, useEffect } from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import chevron from '../../assets/chevron.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from './config';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/blog`);
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Failed to load blog posts');
      // Fallback data for demo
      setBlogPosts([
        {
          id: 1,
          _id: '1',
          slug: 'top-10-remote-tech-companies-hiring-react-developers-2025',
          title: "Top 10 Remote Tech Companies Hiring React Developers in 2025",
          excerpt: "Discover the best remote software engineering jobs for React developers. Work from home tech jobs with competitive salaries and benefits.",
          content: "The demand for React JS jobs remote has skyrocketed in 2025. Companies are actively seeking full stack developer remote jobs and frontend jobs work from home. This comprehensive guide covers the top remote companies hiring developers with React expertise. With the rise of remote work, React developers are in high demand across the globe. This article explores the top companies offering competitive salaries, excellent benefits, and remote work opportunities for React developers. From startups to Fortune 500 companies, we've compiled a comprehensive list of the best places to work remotely as a React developer in 2025.",
          category: 'tech',
          tags: ['React JS jobs remote', 'remote software engineering jobs', 'work from home tech jobs', 'full stack developer remote jobs'],
          date: '2025-01-15',
          readTime: '8 min read',
          image: background,
          featured: true,
          author: 'PrimePro Team'
        },
        {
          id: 2,
          _id: '2',
          slug: 'oil-gas-jobs-nigeria-2025-complete-career-guide',
          title: "Oil & Gas Jobs in Nigeria 2025: Complete Career Guide",
          excerpt: "Comprehensive guide to oil and gas jobs in Nigeria 2025. Find offshore rig jobs and join top paying oil and gas companies.",
          content: "The oil and gas industry in Nigeria continues to offer lucrative opportunities. From instrumentation engineer jobs offshore to maintenance positions, this sector provides some of the highest paying jobs. Learn about the certifications needed for offshore oil jobs. Nigeria's oil and gas sector remains one of the most profitable industries, offering excellent career opportunities for professionals. This comprehensive guide covers everything from entry-level positions to senior management roles, required certifications, and salary expectations. Whether you're a fresh graduate or an experienced professional, this guide will help you navigate the oil and gas job market in Nigeria.",
          category: 'oil-gas',
          tags: ['oil and gas jobs in Nigeria 2025', 'offshore rig jobs', 'top paying oil and gas companies', 'instrumentation engineer jobs offshore'],
          date: '2025-01-12',
          readTime: '12 min read',
          image: background,
          featured: true,
          author: 'PrimePro Team'
        },
        {
          id: 3,
          _id: '3',
          slug: 'how-to-land-first-remote-nodejs-job-2025',
          title: "How to Land Your First Remote Node.js Job in 2025",
          excerpt: "Complete guide for Node JS developer jobs with remote work options. Learn how to find legit work from home jobs 2025.",
          content: "Node JS developer jobs are in high demand for remote work. This guide covers everything from building your portfolio to acing remote interviews. Discover the best practices for securing remote IT jobs hiring now. The Node.js ecosystem has grown exponentially, creating numerous opportunities for developers worldwide. This comprehensive guide walks you through the entire process of landing your first remote Node.js position, from skill development to interview preparation and salary negotiation.",
          category: 'tech',
          tags: ['Node JS developer jobs', 'remote IT jobs hiring now', 'work from home tech jobs', 'legit work from home jobs 2025'],
          date: '2025-01-10',
          readTime: '10 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 4,
          _id: '4',
          slug: 'work-from-home-setup-fullstack-engineers',
          title: "Work from Home Setup for Full-Stack Engineers",
          excerpt: "Essential guide for full stack developer jobs work from home. Optimize your remote work environment for maximum productivity.",
          content: "Creating the perfect work from home setup is crucial for full stack developers. From hardware recommendations to productivity tools, this guide helps you optimize your remote work environment for software engineering jobs. A well-designed home office can significantly impact your productivity and work-life balance. This guide provides detailed recommendations for hardware, software, ergonomics, and productivity tools that every full-stack developer needs for optimal remote work performance.",
          category: 'tech',
          tags: ['full stack developer jobs work from home', 'remote jobs for developers', 'software engineering jobs', 'work from home tech jobs'],
          date: '2025-01-08',
          readTime: '6 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 5,
          _id: '5',
          slug: 'top-7-oil-gas-companies-hiring-africa-2025',
          title: "Top 7 Oil & Gas Companies Hiring in Africa Right Now",
          excerpt: "Discover the leading oil and gas recruitment agencies and companies actively hiring. Find offshore rig jobs with competitive pay.",
          content: "Africa's oil and gas sector is booming with opportunities. From Shell to Chevron, discover which companies are actively hiring and offering the best oil and gas jobs in Nigeria 2025. Learn about offshore rig jobs with no experience requirements. The African oil and gas industry is experiencing unprecedented growth, creating thousands of new job opportunities. This article profiles the top companies actively hiring, their requirements, benefits, and application processes.",
          category: 'oil-gas',
          tags: ['oil and gas recruitment agencies', 'offshore rig jobs with no experience', 'oil and gas jobs in Nigeria 2025', 'top paying oil and gas companies'],
          date: '2025-01-05',
          readTime: '9 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 6,
          _id: '6',
          slug: 'react-native-vs-flutter-which-pays-more-2025',
          title: "React Native vs Flutter: Which Pays More in 2025?",
          excerpt: "Compare mobile app developer jobs 2025 salaries between React Native and Flutter. Find the highest paying mobile development jobs.",
          content: "Mobile app developer jobs 2025 are highly competitive. This comprehensive comparison of React Native vs Flutter salaries helps you choose the most lucrative path. Discover which framework offers better remote work opportunities. The mobile development landscape is constantly evolving, and choosing the right framework can significantly impact your career trajectory and earning potential. This detailed analysis compares React Native and Flutter across multiple dimensions including salary, job opportunities, and career growth.",
          category: 'tech',
          tags: ['mobile app developer jobs 2025', 'React developer job remote', 'highest paying jobs in tech', 'remote software engineering jobs'],
          date: '2025-01-03',
          readTime: '7 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 7,
          _id: '7',
          slug: 'how-to-spot-legit-remote-jobs-2025',
          title: "How to Spot Legit Remote Jobs in 2025",
          excerpt: "Essential tips for finding legit work from home jobs 2025. Avoid scams and find genuine remote IT jobs hiring now.",
          content: "With the rise of remote work, it's crucial to identify legitimate opportunities. This guide helps you spot genuine remote IT jobs hiring now and avoid common scams. Learn the red flags and green flags for work from home tech jobs. The remote job market is flooded with both legitimate opportunities and scams. This comprehensive guide teaches you how to distinguish between real job offers and fraudulent schemes, ensuring you only apply to legitimate positions.",
          category: 'remote',
          tags: ['legit work from home jobs 2025', 'remote IT jobs hiring now', 'work from home tech jobs', 'best remote job sites'],
          date: '2025-01-01',
          readTime: '5 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 8,
          _id: '8',
          slug: 'certifications-needed-offshore-oil-jobs',
          title: "What Certifications Do You Need for Offshore Oil Jobs?",
          excerpt: "Complete guide to certifications required for offshore rig jobs. Essential for oil and gas maintenance engineer jobs.",
          content: "Offshore oil jobs require specific certifications and training. This guide covers all the essential certifications needed for oil and gas maintenance engineer jobs and instrumentation engineer jobs offshore. Working offshore requires specialized training and certifications to ensure safety and compliance with international standards. This guide provides a comprehensive overview of all required certifications, training programs, and career pathways.",
          category: 'oil-gas',
          tags: ['offshore rig jobs', 'oil and gas maintenance engineer jobs', 'instrumentation engineer jobs offshore', 'oil and gas jobs in Nigeria 2025'],
          date: '2024-12-28',
          readTime: '11 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 9,
          _id: '9',
          slug: 'top-20-job-boards-developers-engineers',
          title: "Top 20 Job Boards for Developers and Engineers",
          excerpt: "Comprehensive list of the best remote job sites for developers. Find React developer job boards and Node.js freelancing jobs.",
          content: "Finding the right job board is crucial for developers. This guide covers the top platforms for React developer job boards, Node.js freelancing jobs, and general remote software engineering jobs. The job search process can be overwhelming with hundreds of platforms available. This curated list focuses on the most effective job boards specifically for developers and engineers, with detailed reviews and success rates.",
          category: 'tech',
          tags: ['React developer job boards', 'Node.js freelancing jobs', 'best remote job sites', 'remote software engineering jobs'],
          date: '2024-12-25',
          readTime: '8 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        },
        {
          id: 10,
          _id: '10',
          slug: 'high-demand-skills-remote-jobs-developers',
          title: "High-Demand Skills That Get You Hired Remotely",
          excerpt: "Discover the most in-demand skills for remote jobs for developers. Essential for entry level software jobs work from home.",
          content: "The remote job market is competitive, but certain skills can give you an edge. This guide highlights high-demand skills that employers look for in remote tech jobs, including proficiency in React JS, Node.js, and strong communication for work from home tech jobs. Skill development is crucial for career advancement in the remote work era. This guide identifies the most sought-after technical and soft skills that can significantly increase your employability in remote positions.",
          category: 'tech',
          tags: ['remote jobs for developers', 'entry level software jobs work from home', 'work from home tech jobs', 'highest paying jobs in tech'],
          date: '2024-12-22',
          readTime: '9 min read',
          image: background,
          featured: false,
          author: 'PrimePro Team'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'tech', name: 'Tech Jobs', count: blogPosts.filter(post => post.category === 'tech').length },
    { id: 'oil-gas', name: 'Oil & Gas', count: blogPosts.filter(post => post.category === 'oil-gas').length },
    { id: 'remote', name: 'Remote Work', count: blogPosts.filter(post => post.category === 'remote').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeBlogModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: '#667eea', marginBottom: '16px' }}>Loading blog posts...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: '#e74c3c', marginBottom: '16px' }}>{error}</div>
            <button 
              onClick={fetchBlogPosts}
              style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
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
           Blog Posts
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
            Discover the latest trends in remote jobs, tech careers, and oil & gas opportunities. Expert insights for your career growth.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', zIndex: 2, marginTop: 32 }}
        >
          <Link to="/jobs">
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
              Browse Jobs
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
      
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: selectedCategory === category.id 
                    ? 'linear-gradient(90deg, #667eea 0%, #4B0082 100%)'
                    : 'rgba(255,255,255,0.9)',
                  color: selectedCategory === category.id ? 'white' : '#4B0082',
                  border: '2px solid #667eea',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {category.name}
                <span style={{ 
                  background: selectedCategory === category.id ? 'rgba(255,255,255,0.2)' : '#667eea',
                  color: selectedCategory === category.id ? 'white' : 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: 'bold', 
                color: '#4B0082', 
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Featured Articles
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                gap: '30px' 
              }}>
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)' }}
                    onClick={() => openBlogModal(post)}
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px #667eea22',
                      border: '1.5px solid #e0e7ff',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ 
                      height: '200px', 
                      background: `linear-gradient(135deg, #667eea 0%, #4B0082 100%)`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.8
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'rgba(255,255,255,0.9)',
                        color: '#4B0082',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        Featured
                      </div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} style={{
                            background: '#f0f4ff',
                            color: '#667eea',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '500'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        color: '#4B0082', 
                        marginBottom: '12px',
                        lineHeight: 1.4
                      }}>
                        {post.title}
                      </h3>
                      <p style={{ 
                        color: '#666', 
                        fontSize: '14px', 
                        lineHeight: 1.6,
                        marginBottom: '16px'
                      }}>
                        {post.excerpt}
                      </p>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        fontSize: '12px',
                        color: '#888',
                        marginBottom: '12px'
                      }}>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'flex-end'
                      }}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            const shareUrl = `${window.location.origin}/blog/${post.slug || post._id || post.id}`;
                            console.log('Sharing blog post:', { title: post.title, slug: post.slug, _id: post._id, id: post.id, shareUrl });
                            navigator.share ? navigator.share({
                              title: post.title,
                              text: `Check out this article: ${post.title}`,
                              url: shareUrl
                            }) : navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied to clipboard!'));
                          }}
                          style={{
                            background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Share
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* Regular Posts */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#4B0082', 
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '24px' 
            }}>
              {regularPosts.map((post) => (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(102, 126, 234, 0.1)' }}
                  onClick={() => openBlogModal(post)}
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px #667eea15',
                    border: '1px solid #e0e7ff',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ 
                    height: '160px', 
                    background: `linear-gradient(135deg, #667eea 0%, #4B0082 100%)`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8
                      }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      gap: '8px', 
                      marginBottom: '10px',
                      flexWrap: 'wrap'
                    }}>
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} style={{
                          background: '#f0f4ff',
                          color: '#667eea',
                          padding: '3px 6px',
                          borderRadius: '8px',
                          fontSize: '10px',
                          fontWeight: '500'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#4B0082', 
                      marginBottom: '10px',
                      lineHeight: 1.4
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '13px', 
                      lineHeight: 1.5,
                      marginBottom: '12px'
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontSize: '11px',
                      color: '#888',
                      marginBottom: '8px'
                    }}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      justifyContent: 'flex-end'
                    }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const shareUrl = `${window.location.origin}/blog/${post.slug || post._id || post.id}`;
                          navigator.share ? navigator.share({
                            title: post.title,
                            text: `Check out this article: ${post.title}`,
                            url: shareUrl
                          }) : navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied to clipboard!'));
                        }}
                        style={{
                          background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontSize: '10px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Share
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* SEO Content Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '60px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 8px 32px #667eea22',
              border: '1.5px solid #e0e7ff',
            }}
          >
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#4B0082', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Career Resources & Job Search Tips
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              marginTop: '30px'
            }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea', marginBottom: '15px' }}>
                  🔧 Tech Jobs & Remote Work
                </h3>
                <ul style={{ color: '#666', lineHeight: 1.8 }}>
                  <li>React JS jobs remote opportunities</li>
                  <li>Node JS developer jobs with remote options</li>
                  <li>Full stack developer jobs work from home</li>
                  <li>Frontend jobs work from home</li>
                  <li>Software engineering jobs remote</li>
                  <li>Work from home tech jobs 2025</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea', marginBottom: '15px' }}>
                  ⛽ Oil & Gas Careers
                </h3>
                <ul style={{ color: '#666', lineHeight: 1.8 }}>
                  <li>Oil and gas jobs in Nigeria 2025</li>
                  <li>Offshore rig jobs with competitive pay</li>
                  <li>Top paying oil and gas companies</li>
                  <li>Instrumentation engineer jobs offshore</li>
                  <li>Oil and gas maintenance engineer jobs</li>
                  <li>Oil and gas recruitment agencies</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea', marginBottom: '15px' }}>
                  🌍 Remote Work Opportunities
                </h3>
                <ul style={{ color: '#666', lineHeight: 1.8 }}>
                  <li>Legit work from home jobs 2025</li>
                  <li>Remote IT jobs hiring now</li>
                  <li>Best remote job sites</li>
                  <li>Remote jobs for developers</li>
                  <li>Entry level software jobs work from home</li>
                  <li>Non tech work from home jobs</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Blog Details Modal */}
      {showModal && selectedBlog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={closeBlogModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeBlogModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {/* Blog Image */}
            <div style={{
              height: '300px',
              background: `linear-gradient(135deg, #667eea 0%, #4B0082 100%)`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.8
                }}
              />
            </div>

            {/* Blog Content */}
            <div style={{ padding: '30px' }}>
              {/* Tags */}
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                marginBottom: '16px',
                flexWrap: 'wrap'
              }}>
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} style={{
                    background: '#f0f4ff',
                    color: '#667eea',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#4B0082', 
                marginBottom: '16px',
                lineHeight: 1.3
              }}>
                {selectedBlog.title}
              </h1>

              {/* Meta Info */}
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                marginBottom: '24px',
                fontSize: '14px',
                color: '#666',
                flexWrap: 'wrap'
              }}>
                <span>By {selectedBlog.author || 'PrimePro Team'}</span>
                <span>{selectedBlog.date}</span>
                <span>{selectedBlog.readTime}</span>
                {selectedBlog.featured && (
                  <span style={{ 
                    background: '#FFA500', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ 
                fontSize: '16px', 
                lineHeight: 1.8, 
                color: '#333',
                marginBottom: '24px'
              }}>
                {selectedBlog.content}
              </div>

              {/* Action Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <Link to="/jobs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'linear-gradient(90deg, #667eea 0%, #4B0082 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Browse Related Jobs
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const shareUrl = `${window.location.origin}/blog/${selectedBlog.slug || selectedBlog._id || selectedBlog.id}`;
                    navigator.share ? navigator.share({
                      title: selectedBlog.title,
                      text: `Check out this article: ${selectedBlog.title}`,
                      url: shareUrl
                    }) : navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied to clipboard!'));
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Share Article
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeBlogModal}
                  style={{
                    background: 'transparent',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
} 