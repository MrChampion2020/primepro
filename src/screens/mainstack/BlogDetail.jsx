import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import axios from 'axios';
import API_URL from './config';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchBlogDetail();
  }, [slug]);

  const fetchBlogDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/blog/${slug}`);
      setBlog(response.data);
      
      // Fetch related posts
      const allPostsResponse = await axios.get(`${API_URL}/api/blog`);
      const related = allPostsResponse.data
        .filter(post => post.slug !== slug && post.tags.some(tag => response.data.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (error) {
      console.error('Error fetching blog detail:', error);
      setError('Blog post not found');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this article: ${blog.title}`;
    
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: shareText,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: NAVBAR_HEIGHT }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: '#667eea', marginBottom: '16px' }}>Loading article...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: NAVBAR_HEIGHT }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: '#e74c3c', marginBottom: '16px' }}>Article not found</div>
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Back to Blog
              </motion.button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '80px 5% 60px',
          color: 'white',
          textAlign: 'center'
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
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.2
            }}
          >
            {blog.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              marginBottom: '30px',
              opacity: 0.9,
              maxWidth: '800px',
              margin: '0 auto 30px'
            }}
          >
            {blog.excerpt}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              By {blog.author || 'PrimePro Team'}
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {new Date(blog.date).toLocaleDateString()}
            </span>
            {blog.featured && (
              <span style={{
                background: '#FFA500',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Featured
              </span>
            )}
          </motion.div>
        </div>
      </motion.section>

      <main style={{ flexGrow: 1, marginTop: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          
          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '40px',
              marginBottom: '60px'
            }}
          >
            {/* Main Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  marginBottom: '30px'
                }}
              >
                {blog.image && (
                  <div style={{
                    height: '300px',
                    background: `linear-gradient(135deg, #667eea 0%, #4B0082 100%)`,
                    borderRadius: '16px',
                    marginBottom: '30px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8
                      }}
                    />
                  </div>
                )}

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    marginBottom: '24px',
                    flexWrap: 'wrap'
                  }}>
                    {blog.tags.map((tag, index) => (
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
                )}

                {/* Content */}
                <div style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  color: '#333',
                  marginBottom: '30px'
                }}>
                  {blog.content}
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '12px',
                  flexWrap: 'wrap',
                  borderTop: '1px solid #eee',
                  paddingTop: '20px'
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
                    onClick={handleShare}
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
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                height: 'fit-content',
                position: 'sticky',
                top: '100px'
              }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                Article Info
              </h3>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Author</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{blog.author || 'PrimePro Team'}</div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Published</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Category</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{blog.category || 'General'}</div>
                </div>
                {blog.featured && (
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ color: '#666', fontSize: '14px' }}>Status</span>
                    <div style={{ color: '#FFA500', fontWeight: '600' }}>Featured Article</div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/blog">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    style={{
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '16px',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    Back to Blog
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleShare}
                  style={{
                    background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '16px'
                  }}
                >
                  Share Article
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '30px', textAlign: 'center' }}>
                Related Articles
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost._id}
                    whileHover={{ y: -5 }}
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '25px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      border: '1px solid #f0f0f0'
                    }}
                  >
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                      {relatedPost.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
                      {relatedPost.excerpt}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                      <span style={{
                        background: '#f0f4ff',
                        color: '#667eea',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {relatedPost.category || 'General'}
                      </span>
                      <span style={{
                        background: '#ffe6e6',
                        color: '#e74c3c',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        style={{
                          background: '#667eea',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        Read More
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 