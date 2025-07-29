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

export default function JobsScreen() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs')
      setJobs(response.data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
      // Fallback data for demo
      setJobs([
        {
          _id: '1',
          title: 'Senior Procurement Specialist',
          company: 'PrimePro Solutions',
          location: 'Lagos, Nigeria',
          type: 'Full-time',
          description: 'We are seeking an experienced procurement specialist to join our team and help drive our procurement excellence initiatives.',
          requirements: ['5+ years experience in procurement', 'Strong negotiation skills', 'Knowledge of supply chain management'],
          benefits: ['Competitive salary', 'Health insurance', 'Professional development'],
          salary: { min: 80000, max: 120000, currency: 'USD' },
          applicationDeadline: new Date('2024-02-15'),
          date: new Date('2024-01-10')
        },
        {
          _id: '2',
          title: 'Engineering Project Manager',
          company: 'PrimePro Solutions',
          location: 'Port Harcourt, Nigeria',
          type: 'Full-time',
          description: 'Lead engineering projects from conception to completion, ensuring quality and timely delivery.',
          requirements: ['Engineering degree', 'Project management certification', '3+ years experience'],
          benefits: ['Flexible work hours', 'Performance bonuses', 'Remote work options'],
          salary: { min: 90000, max: 140000, currency: 'USD' },
          applicationDeadline: new Date('2024-02-20'),
          date: new Date('2024-01-08')
        },
        {
          _id: '3',
          title: 'Quality Assurance Engineer',
          company: 'PrimePro Solutions',
          location: 'Abuja, Nigeria',
          type: 'Contract',
          description: 'Ensure quality standards are met across all our engineering and procurement processes.',
          requirements: ['Quality management experience', 'ISO certification knowledge', 'Attention to detail'],
          benefits: ['Contract renewal opportunities', 'Training programs', 'Competitive rates'],
          salary: { min: 60000, max: 90000, currency: 'USD' },
          applicationDeadline: new Date('2024-02-10'),
          date: new Date('2024-01-05')
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship']

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedType === 'all' || job.type === selectedType
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
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
                      {job.applyLink ? (
                        <a
                          href={job.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            marginTop: 10,
                            background: 'linear-gradient(90deg, #667eea 0%, #FFA500 100%)',
                            color: 'white',
                            padding: '10px 28px',
                            borderRadius: '25px',
                            fontWeight: 600,
                            fontSize: 16,
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px #667eea33',
                            transition: 'background 0.3s, color 0.3s',
                          }}
                        >
                          Apply Now
                        </a>
                      ) : (
                        <a
                          href={`mailto:info@primeprocurementus.com?subject=Application for ${encodeURIComponent(job.title)}`}
                          style={{
                            display: 'inline-block',
                            marginTop: 10,
                            background: 'linear-gradient(90deg, #667eea 0%, #FFA500 100%)',
                            color: 'white',
                            padding: '10px 28px',
                            borderRadius: '25px',
                            fontWeight: 600,
                            fontSize: 16,
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px #667eea33',
                            transition: 'background 0.3s, color 0.3s',
                          }}
                        >
                          Apply Now
                        </a>
                      )}

                      <p style={{
                        color: '#555',
                        lineHeight: '1.6',
                        marginBottom: '20px'
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
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={getDaysUntilDeadline(job.applicationDeadline) === 'Closed'}
                        style={{
                          backgroundColor: getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? '#ccc' : '#667eea',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '25px',
                          cursor: getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? 'not-allowed' : 'pointer',
                          fontWeight: '600',
                          fontSize: '14px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? 'Closed' : 'Apply Now'}
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