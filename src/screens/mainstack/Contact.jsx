import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar, { NAVBAR_HEIGHT } from "../../components/Navbar";
import Footer from "../../components/Footer";
import API_URL from "./config";
import axios from 'axios'; // Ensure axios is imported
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import chevron from '../../assets/chevron.png';
import { Link } from 'react-router-dom'; // Added Link import

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // For showing the processing effect
  // Add local error state for each field
  const [errors, setErrors] = useState({});
  // Add touched state to track if a field has been visited
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // On blur, mark field as touched
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Field validation helpers
  const getFieldError = (name) => {
    if (!touched[name]) return '';
    if (name === 'email') {
      if (!formData.email.trim()) return 'Email is required.';
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Enter a valid email address.';
      return '';
    }
    if (!formData[name].trim()) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    return '';
  };
  const getFieldSuccess = (name) => {
    if (!touched[name]) return '';
    if (name === 'email') {
      if (/^\S+@\S+\.\S+$/.test(formData.email)) return 'Looks good!';
      return '';
    }
    if (formData[name].trim()) return 'Looks good!';
    return '';
  };

  // Enhanced validation on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    let newErrors = {};
    let newTouched = { ...touched };
    // Mark all fields as touched on submit
    ['name', 'email', 'subject', 'message'].forEach(field => {
      newTouched[field] = true;
    });
    setTouched(newTouched);
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setIsProcessing(false);
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
        setTimeout(() => setSubmitStatus(null), 5000); // Auto-dismiss success
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/* Hero Section - visually impactful, no scroll indicator */}
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
        {/* Subtle animated background shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
        {/* Hero Content */}
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
            Get in Touch
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
            Reach out for procurement, partnership, or support. We respond fast!
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
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
          }}
        >
          {/* Animated Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              flex: '1 1 380px',
              minWidth: 320,
              maxWidth: 500,
              background: 'rgba(255,255,255,0.7)',
              boxShadow: '0 8px 32px #667eea22',
              borderRadius: 24,
              padding: '40px 32px',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid #e0e7ff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#4B0082', marginBottom: 18, textAlign: 'center' }}>Contact Form</h2>
            {/* Keep all API logic and input validation as is */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Name Field */}
              <motion.div whileFocus={{ scale: 1.03 }}>
                <label htmlFor="name" style={{ fontWeight: 600, color: '#667eea', marginBottom: 4 }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: 16,
                    border: '1.5px solid #ccc',
                    borderRadius: 8,
                    marginBottom: 6,
                    background: 'rgba(255,255,255,0.9)',
                    outline: 'none',
                  }}
                />
                {getFieldError('name') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', fontSize: 14, marginTop: 2 }}>{getFieldError('name')}</motion.div>}
                {getFieldSuccess('name') && !getFieldError('name') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', fontSize: 14, marginTop: 2 }}>{getFieldSuccess('name')}</motion.div>}
              </motion.div>
              {/* Email Field */}
              <motion.div whileFocus={{ scale: 1.03 }}>
                <label htmlFor="email" style={{ fontWeight: 600, color: '#667eea', marginBottom: 4 }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: 16,
                    border: '1.5px solid #ccc',
                    borderRadius: 8,
                    marginBottom: 6,
                    background: 'rgba(255,255,255,0.9)',
                    outline: 'none',
                  }}
                />
                {getFieldError('email') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', fontSize: 14, marginTop: 2 }}>{getFieldError('email')}</motion.div>}
                {getFieldSuccess('email') && !getFieldError('email') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', fontSize: 14, marginTop: 2 }}>{getFieldSuccess('email')}</motion.div>}
              </motion.div>
              {/* Subject Field */}
              <motion.div whileFocus={{ scale: 1.03 }}>
                <label htmlFor="subject" style={{ fontWeight: 600, color: '#667eea', marginBottom: 4 }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: 16,
                    border: '1.5px solid #ccc',
                    borderRadius: 8,
                    marginBottom: 6,
                    background: 'rgba(255,255,255,0.9)',
                    outline: 'none',
                  }}
                />
                {getFieldError('subject') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', fontSize: 14, marginTop: 2 }}>{getFieldError('subject')}</motion.div>}
                {getFieldSuccess('subject') && !getFieldError('subject') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', fontSize: 14, marginTop: 2 }}>{getFieldSuccess('subject')}</motion.div>}
              </motion.div>
              {/* Message Field */}
              <motion.div whileFocus={{ scale: 1.03 }}>
                <label htmlFor="message" style={{ fontWeight: 600, color: '#667eea', marginBottom: 4 }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: 16,
                    border: '1.5px solid #ccc',
                    borderRadius: 8,
                    minHeight: 120,
                    background: 'rgba(255,255,255,0.9)',
                    outline: 'none',
                  }}
                />
                {getFieldError('message') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', fontSize: 14, marginTop: 2 }}>{getFieldError('message')}</motion.div>}
                {getFieldSuccess('message') && !getFieldError('message') && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', fontSize: 14, marginTop: 2 }}>{getFieldSuccess('message')}</motion.div>}
              </motion.div>
              {/* Submit Button with animation */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                disabled={isProcessing}
                style={{
                  background: isProcessing ? '#8a2be2' : 'linear-gradient(90deg, #667eea 0%, #FFA500 100%)',
                  color: 'white',
                  padding: '14px 0',
                  fontSize: 18,
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: 8,
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  marginTop: 8,
                  boxShadow: '0 2px 8px #667eea22',
                  transition: 'background 0.3s',
                }}
              >
                {isProcessing ? 'Sending...' : 'Send Message'}
              </motion.button>
              {/* Success/Error Feedback */}
              {submitStatus === 'success' && (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#e6ffed', color: '#1a7f37', borderRadius: 8, padding: '10px 16px', marginTop: 10, fontWeight: 600, position: 'relative' }}>
                  <svg width="22" height="22" fill="#1a7f37" viewBox="0 0 24 24"><path d="M20.285 6.709a1 1 0 0 0-1.414-1.418l-8.285 8.293-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l9-9z"/></svg>
                  Message sent successfully!
                  <button onClick={() => setSubmitStatus(null)} style={{ background: 'none', border: 'none', color: '#1a7f37', fontWeight: 700, fontSize: 18, cursor: 'pointer', position: 'absolute', right: 10, top: 6 }} title="Dismiss">×</button>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', fontWeight: 600, marginTop: 10 }}>There was an error sending your message. Please try again.</motion.p>
              )}
            </form>
          </motion.div>
          {/* Animated Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              flex: '1 1 320px',
              minWidth: 280,
              maxWidth: 400,
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 8px 32px #667eea22',
              borderRadius: 24,
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              justifyContent: 'center',
              alignItems: 'flex-start',
              border: '1.5px solid #e0e7ff',
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#4B0082', marginBottom: 10 }}>Contact Information</h2>
            {/* Address */}
            <motion.div whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.96 }} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText('NO. 73, EMEBIREN STREET OKUMAGBA LAYOUT, WARRI, DELTA STATE')} title="Copy address">
              <motion.div whileHover={{ scale: 1.2, color: '#FFA500' }} style={{ display: 'flex', alignItems: 'center' }}>
                {/* <MapPin size={24} color="#667eea" /> */}
              </motion.div>
             
            </motion.div>
            {/* Phone */}
            <motion.div whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.96 }} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText('+2347035918223')} title="Copy phone">
              <motion.div whileHover={{ scale: 1.2, color: '#FFA500' }} style={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={24} color="#FFA500" />
              </motion.div>
              <div>
                <div style={{ fontWeight: 600, color: '#333' }}>+2348057216362</div>
                <div style={{ fontSize: 14, color: '#888' }}>Call Us</div>
              </div>
            </motion.div>
            {/* Email */}
            <motion.div whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.96 }} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText('info@primeprocurementus.com')} title="Copy email">
              <motion.div whileHover={{ scale: 1.2, color: '#667eea' }} style={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={24} color="#667eea" />
              </motion.div>
              <div>
                <div style={{ fontWeight: 600, color: '#333' }}>info@primeprocurementus.com</div>
                <div style={{ fontSize: 14, color: '#888' }}>Email Us</div>
              </div>
            </motion.div>
            {/* Business Hours */}
            <motion.div whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.96 }} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <motion.div whileHover={{ scale: 1.2, color: '#FFA500' }} style={{ display: 'flex', alignItems: 'center' }}>
                <Clock size={24} color="#667eea" />
              </motion.div>
              <div>
                <div style={{ fontWeight: 600, color: '#333' }}>Mon-Fri: 9am - 5pm</div>
                <div style={{ fontSize: 14, color: '#888' }}>Business Hours</div>
              </div>
            </motion.div>
            {/* Social & Quick Actions */}
            <div style={{ display: 'flex', gap: 18, marginTop: 10 }}>
              {/* WhatsApp */}
              <motion.a whileHover={{ scale: 1.2, rotate: 8 }} href="https://wa.me/+2348057216362" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#25D366', boxShadow: '0 2px 8px #25D36633' }}>
                <img src={require('../../assets/whatsapp.png')} alt="WhatsApp" style={{ width: 22, height: 22 }} />
              </motion.a>
              {/* Email */}
              <motion.a whileHover={{ scale: 1.2, rotate: -8 }} href="mailto:info@primeprocurementus.com" title="Email" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#667eea', boxShadow: '0 2px 8px #667eea33' }}>
                <img src={require('../../assets/email.png')} alt="Email" style={{ width: 22, height: 22 }} />
              </motion.a>
              {/* LinkedIn (placeholder) */}
              {/* <motion.a whileHover={{ scale: 1.2, rotate: 8 }} href="#" title="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#0077b5', boxShadow: '0 2px 8px #0077b533' }}>
                <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </motion.a> */}
              {/* Start Chat (opens chat widget) */}
              <motion.button whileHover={{ scale: 1.2, rotate: -8 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Start Chat" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #FFA500 100%)', boxShadow: '0 2px 8px #FFA50033', border: 'none', cursor: 'pointer' }}>
                <img src={require('../../assets/msg.png')} alt="Chat" style={{ width: 22, height: 22 }} />
              </motion.button>
            </div>
          </motion.div>
        </div>
       
      </main>
      <Footer />
    </div>
  );
}
