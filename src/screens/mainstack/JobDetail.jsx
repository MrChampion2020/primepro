import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import axios from 'axios';
import API_URL from './config';

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    fetchJobDetail();
  }, [id]);

  const fetchJobDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/jobs/${id}`);
      setJob(response.data);
      
      // Fetch related jobs
      const allJobsResponse = await axios.get(`${API_URL}/api/jobs`);
      const related = allJobsResponse.data
        .filter(j => j._id !== id && j.category === response.data.category)
        .slice(0, 3);
      setRelatedJobs(related);
    } catch (error) {
      console.error('Error fetching job detail:', error);
      setError('Job not found');
    } finally {
      setLoading(false);
    }
  };

  const formatSalary = (salary) => {
    if (!salary) return 'Salary not specified';
    const { min, max, currency } = salary;
    if (min && max) {
      return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
    } else if (min) {
      return `${currency} ${min.toLocaleString()}+`;
    } else if (max) {
      return `Up to ${currency} ${max.toLocaleString()}`;
    }
    return 'Salary not specified';
  };

  const getDaysUntilDeadline = (deadline) => {
    if (!deadline) return 'No deadline';
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Closed';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days left`;
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this job opportunity: ${job.title} at ${job.company}`;
    
    if (navigator.share) {
      navigator.share({
        title: job.title,
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
            <div style={{ fontSize: '24px', color: '#667eea', marginBottom: '16px' }}>Loading job details...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: NAVBAR_HEIGHT }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: '#e74c3c', marginBottom: '16px' }}>Job not found</div>
            <Link to="/jobs">
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
                Back to Jobs
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
            {job.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              marginBottom: '30px',
              opacity: 0.9
            }}
          >
            {job.company} • {job.location}
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
              {job.type}
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {formatSalary(job.salary)}
            </span>
            <span style={{
              background: getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? 'rgba(231, 76, 60, 0.8)' : 'rgba(39, 174, 96, 0.8)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {getDaysUntilDeadline(job.applicationDeadline)}
            </span>
          </motion.div>
        </div>
      </motion.section>

      <main style={{ flexGrow: 1, marginTop: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          
          {/* Job Details */}
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
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                  Job Description
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                  {job.description}
                </p>

                {job.requirements && job.requirements.length > 0 && (
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>
                      Requirements
                    </h3>
                    <ul style={{ color: '#555', lineHeight: '1.8' }}>
                      {job.requirements.map((req, index) => (
                        <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#667eea' }}>•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.benefits && job.benefits.length > 0 && (
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>
                      Benefits
                    </h3>
                    <ul style={{ color: '#555', lineHeight: '1.8' }}>
                      {job.benefits.map((benefit, index) => (
                        <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#FFA500' }}>•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
                Quick Info
              </h3>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Company</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{job.company}</div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Location</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{job.location}</div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Job Type</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{job.type}</div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Salary</span>
                  <div style={{ color: '#333', fontWeight: '600' }}>{formatSalary(job.salary)}</div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Application Deadline</span>
                  <div style={{ 
                    color: getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? '#e74c3c' : '#27ae60', 
                    fontWeight: '600' 
                  }}>
                    {getDaysUntilDeadline(job.applicationDeadline)}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {getDaysUntilDeadline(job.applicationDeadline) === 'Closed' ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    disabled={true}
                    style={{
                      backgroundColor: '#ccc',
                      color: 'white',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '12px',
                      cursor: 'not-allowed',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}
                  >
                    Applications Closed
                  </motion.button>
                ) : (
                  <motion.a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      backgroundColor: '#667eea',
                      color: 'white',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '16px',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    Apply Now
                  </motion.a>
                )}
                
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
                  Share Job
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '30px', textAlign: 'center' }}>
                Related Jobs
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {relatedJobs.map((relatedJob) => (
                  <motion.div
                    key={relatedJob._id}
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
                      {relatedJob.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
                      {relatedJob.company} • {relatedJob.location}
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
                        {relatedJob.type}
                      </span>
                      <span style={{
                        background: getDaysUntilDeadline(relatedJob.applicationDeadline) === 'Closed' ? '#ffe6e6' : '#e6ffe6',
                        color: getDaysUntilDeadline(relatedJob.applicationDeadline) === 'Closed' ? '#e74c3c' : '#27ae60',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {getDaysUntilDeadline(relatedJob.applicationDeadline)}
                      </span>
                    </div>
                    <Link to={`/jobs/${relatedJob._id}`}>
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
                        View Details
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