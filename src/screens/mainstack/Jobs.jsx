import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import jobsHero from '../../assets/bg.png'
import wheel from '../../assets/valve.jpg'
import background from '../../assets/bg.png'
import chevron from '../../assets/chevron.png'
import API_URL from './config'

export default function JobsScreen() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/jobs`)
      setJobs(response.data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
      // SEO-optimized fallback data with high-value keywords
      setJobs([
        {
          _id: '1',
          title: 'Senior React JS Developer - Remote Jobs',
          company: 'PrimePro Solutions',
          location: 'Remote / Work from Home',
          type: 'Full-time',
          category: 'tech',
          description: 'Join our team as a Senior React JS Developer for remote software engineering jobs. Perfect for developers seeking work from home tech jobs with competitive salaries.',
          requirements: ['5+ years React JS experience', 'Node.js knowledge', 'Full stack development skills', 'Remote work experience'],
          benefits: ['Competitive remote developer salary', 'Health insurance', 'Professional development', 'Flexible work hours'],
          salary: { min: 80000, max: 120000, currency: 'USD' },
          applicationDeadline: new Date('2025-02-15'),
          applyUrl: 'https://primepro.com/careers/react-developer',
          date: new Date('2025-01-10'),
          tags: ['React JS jobs remote', 'software engineering jobs', 'work from home tech jobs', 'full stack developer remote jobs']
        },
        {
          _id: '2',
          title: 'Oil & Gas Maintenance Engineer - Offshore Jobs',
          company: 'PrimePro Solutions',
          location: 'Port Harcourt, Nigeria',
          type: 'Full-time',
          category: 'oil-gas',
          description: 'Leading oil and gas jobs in Nigeria 2025. Offshore rig jobs with competitive pay. Join top paying oil and gas companies.',
          requirements: ['Engineering degree', 'Offshore experience', 'Oil & gas certifications', '3+ years experience'],
          benefits: ['High salary package', 'Offshore bonuses', 'Health insurance', 'Professional development'],
          salary: { min: 90000, max: 140000, currency: 'USD' },
          applicationDeadline: new Date('2025-02-20'),
          applyUrl: 'https://primepro.com/careers/oil-gas-engineer',
          date: new Date('2025-01-08'),
          tags: ['oil and gas jobs in Nigeria 2025', 'offshore rig jobs', 'top paying oil and gas companies']
        },
        {
          _id: '3',
          title: 'Node JS Developer - Remote Work from Home',
          company: 'PrimePro Solutions',
          location: 'Remote / Work from Home',
          type: 'Full-time',
          category: 'tech',
          description: 'Node JS developer jobs with remote work options. Perfect for developers seeking legit work from home jobs 2025.',
          requirements: ['Node.js expertise', 'JavaScript proficiency', 'API development', 'Remote work capability'],
          benefits: ['Remote work flexibility', 'Competitive salary', 'Performance bonuses', 'Learning opportunities'],
          salary: { min: 70000, max: 110000, currency: 'USD' },
          applicationDeadline: new Date('2025-02-10'),
          applyUrl: 'https://primepro.com/careers/nodejs-developer',
          date: new Date('2025-01-05'),
          tags: ['Node JS developer jobs', 'remote IT jobs hiring now', 'work from home tech jobs']
        },
        {
          _id: '4',
          title: 'Frontend Developer - React Jobs Remote',
          company: 'PrimePro Solutions',
          location: 'Remote / Work from Home',
          type: 'Full-time',
          category: 'tech',
          description: 'Frontend jobs work from home with React expertise. Join our team for remote software engineering jobs.',
          requirements: ['React JS proficiency', 'Frontend development', 'CSS/HTML expertise', 'Remote collaboration'],
          benefits: ['Work from home setup', 'Competitive pay', 'Health benefits', 'Career growth'],
          salary: { min: 65000, max: 100000, currency: 'USD' },
          applicationDeadline: new Date('2025-02-25'),
          applyUrl: 'https://primepro.com/careers/frontend-developer',
          date: new Date('2025-01-12'),
          tags: ['frontend jobs work from home', 'React JS jobs remote', 'remote software engineering jobs']
        },
        {
          _id: '5',
          title: 'Oil & Gas Instrumentation Engineer',
          company: 'PrimePro Solutions',
          location: 'Lagos, Nigeria',
          type: 'Full-time',
          category: 'oil-gas',
          description: 'Instrumentation engineer jobs offshore with leading oil companies. High-demand oil and gas jobs in Nigeria 2025.',
          requirements: ['Instrumentation engineering degree', 'Offshore experience', 'Safety certifications', '5+ years experience'],
          benefits: ['Offshore bonuses', 'Comprehensive insurance', 'Professional training', 'Career advancement'],
          salary: { min: 85000, max: 130000, currency: 'USD' },
          applicationDeadline: new Date('2025-02-28'),
          applyUrl: 'https://primepro.com/careers/instrumentation-engineer',
          date: new Date('2025-01-15'),
          tags: ['instrumentation engineer jobs offshore', 'oil and gas jobs in Nigeria 2025', 'offshore rig jobs']
        },
        {
          _id: '6',
          title: 'Full Stack Developer - Remote Jobs',
          company: 'PrimePro Solutions',
          location: 'Remote / Work from Home',
          type: 'Full-time',
          category: 'tech',
          description: 'Full stack developer jobs work from home. Perfect for developers seeking remote jobs for developers with modern tech stack.',
          requirements: ['Full stack development', 'React & Node.js', 'Database management', 'Remote work experience'],
          benefits: ['Remote work flexibility', 'Competitive salary', 'Health insurance', 'Professional development'],
          salary: { min: 75000, max: 115000, currency: 'USD' },
          applicationDeadline: new Date('2025-03-05'),
          applyUrl: 'https://primepro.com/careers/fullstack-developer',
          date: new Date('2025-01-18'),
          tags: ['full stack developer jobs work from home', 'remote jobs for developers', 'work from home tech jobs']
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']
  const jobCategories = ['all', 'tech', 'oil-gas', 'remote']

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedType === 'all' || job.type === selectedType
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (job.tags && job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    return matchesType && matchesCategory && matchesSearch
  })

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

  const formatSalary = (salary) => {
    if (!salary) return 'Competitive'
    return `${salary.currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`
  }

  const getDaysUntilDeadline = (deadline) => {
    const days = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24))
    if (days < 0) return 'Closed'
    if (days === 0) return 'Today'
    if (days === 1) return 'Tomorrow'
    return `${days} days left`
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
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
            Join Our Team
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
            Discover exciting career opportunities in procurement and engineering
          </motion.p>
        </div>
        {/* Remove scroll indicator here */}
        {/* In the hero section, add a Contact button below the main text, centered, matching other screens */}
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
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        {/* Search and Filter Section */}
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
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Search Bar */}
            <div style={{
              marginBottom: '30px',
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Search jobs by title, company, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '25px',
                  border: '2px solid #e1e5e9',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
              />
            </div>

            {/* Job Type Filter */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center'
            }}>
              {jobTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: 'none',
                    backgroundColor: selectedType === type ? '#667eea' : 'white',
                    color: selectedType === type ? 'white' : '#333',
                    cursor: 'pointer',
                    fontWeight: '500',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Jobs List */}
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
          ) : filteredJobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <h3 style={{ color: '#666', marginBottom: '20px' }}>No jobs found</h3>
              <p style={{ color: '#888' }}>Try adjusting your search criteria</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {filteredJobs.map((job) => (
                <motion.article
                  key={job._id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #e1e5e9',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '20px'
                  }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '15px'
                      }}>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: '#333',
                          margin: 0
                        }}>
                          {job.title}
                        </h3>
                        <span style={{
                          backgroundColor: '#667eea',
                          color: 'white',
                          padding: '5px 12px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {job.type}
                        </span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginBottom: '15px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ color: '#666', fontSize: '16px' }}>
                          <strong>Company:</strong> {job.company}
                        </span>
                        <span style={{ color: '#666', fontSize: '16px' }}>
                          <strong>Location:</strong> {job.location}
                        </span>
                        <span style={{ color: '#666', fontSize: '16px' }}>
                          <strong>Salary:</strong> {formatSalary(job.salary)}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginTop: '15px',
                        flexWrap: 'wrap'
                      }}>
                        <Link to={`/jobs/${job._id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              background: 'linear-gradient(90deg, #667eea 0%, #4B0082 100%)',
                              color: 'white',
                              border: 'none',
                              padding: '10px 20px',
                              borderRadius: '20px',
                              fontWeight: '600',
                              fontSize: '14px',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            View Details
                          </motion.button>
                        </Link>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const shareUrl = `${window.location.origin}/jobs/${job._id}`;
                            navigator.share ? navigator.share({
                              title: job.title,
                              text: `Check out this job opportunity: ${job.title} at ${job.company}`,
                              url: shareUrl
                            }) : navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied to clipboard!'));
                          }}
                          style={{
                            background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Share
                        </motion.button>
                      </div>

                      <p style={{
                        color: '#555',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {job.description}
                      </p>

                      {job.requirements && job.requirements.length > 0 && (
                        <div style={{ marginBottom: '20px' }}>
                          <h4 style={{ color: '#333', marginBottom: '10px' }}>Requirements:</h4>
                          <ul style={{ color: '#666', paddingLeft: '20px' }}>
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.benefits && job.benefits.length > 0 && (
                        <div style={{ marginBottom: '20px' }}>
                          <h4 style={{ color: '#333', marginBottom: '10px' }}>Benefits:</h4>
                          <ul style={{ color: '#666', paddingLeft: '20px' }}>
                            {job.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '15px',
                      minWidth: '150px'
                    }}>
                      <span style={{
                        color: getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? '#e74c3c' : '#27ae60',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}>
                        {getDaysUntilDeadline(job.applicationDeadline)}
                      </span>
                      
                      {getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={true}
                          style={{
                            backgroundColor: '#ccc',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '25px',
                            cursor: 'not-allowed',
                            fontWeight: '600',
                            fontSize: '14px',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Closed
                        </motion.button>
                      ) : (
                        <motion.a
                          href={job.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            backgroundColor: '#667eea',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                            display: 'inline-block'
                          }}
                        >
                          Apply Now
                        </motion.a>
                      )}
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const shareUrl = `${window.location.origin}/jobs/${job._id}`;
                          navigator.share ? navigator.share({
                            title: job.title,
                            text: `Check out this job opportunity: ${job.title} at ${job.company}`,
                            url: shareUrl
                          }) : navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied to clipboard!'));
                        }}
                        style={{
                          background: 'linear-gradient(90deg, #FFA500 0%, #FF6B35 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '12px',
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
          )}
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            padding: '80px 5%',
            backgroundColor: '#1a1a1a',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Don't See the Right Fit?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.8
          }}>
            Send us your resume and we'll keep you in mind for future opportunities
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Submit Resume
          </motion.button>
        </motion.section>
      </main>
      <Footer />
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
} 