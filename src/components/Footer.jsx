import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import wheel from '../assets/valve.jpg'; // Example gear/wheel image
import logo from '../assets/logo.png';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';
import linkedin from '../assets/profile.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #4B0082 0%, #667eea 60%, #FFA500 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background gears/wheels */}
      <motion.img
        src={wheel}
        alt="Gear Wheel"
        initial={{ rotate: 0, opacity: 0.15 }}
        animate={{ rotate: 360, opacity: 0.15 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: '-80px',
          bottom: '-60px',
          width: '200px',
          zIndex: 0,
          filter: 'blur(1px) grayscale(1)',
        }}
      />
      <motion.img
        src={wheel}
        alt="Gear Wheel"
        initial={{ rotate: 0, opacity: 0.10 }}
        animate={{ rotate: -360, opacity: 0.10 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        style={{
          position: 'absolute',
          right: '-100px',
          top: '-60px',
          width: '180px',
          zIndex: 0,
          filter: 'blur(2px) grayscale(1)',
        }}
      />
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 20px 32px 20px",
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "48px",
        }}>
          <div>
            <img src={logo} alt="Logo" style={{ width: 60, marginBottom: 16, borderRadius: 12, boxShadow: '0 2px 8px #0002' }} />
            <h3 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "12px", color: '#FFA500' }}>
              PrimePro
            </h3>
            <p style={{ fontSize: "15px", opacity: 0.9 }}>
              We are a global procurement and engineering services company, providing high-quality products and solutions to industries worldwide.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: '#FFA500' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[{name:'Home',to:'/'},{name:'Products',to:'/products'},{name:'Services',to:'/services'},{name:'Projects',to:'/projects'},{name:'Blog',to:'/blog'},{name:'Jobs',to:'/jobs'},{name:'About',to:'/about'},{name:'Contact',to:'/contact'}].map(link => (
                <li key={link.name} style={{ marginBottom: "10px" }}>
                  <motion.div
                    whileHover={{ scale: 1.08, background: 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)', color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 18px',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                  >
                    <Link
                      to={link.to}
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: '#FFA500' }}>
              Contact Info
            </h3>
            
            <p style={{ fontSize: "15px", marginBottom: "8px", opacity: 0.9 }}>
              Phone: +2348057216362
            </p>
            <p style={{ fontSize: "15px", marginBottom: "8px", opacity: 0.9 }}>
              Email: info@primeprocurementus.com
            </p>
            <div style={{ display: 'flex', gap: 18, marginTop: 18 }}>
              <motion.a
                href="mailto:info@primeprocurementus.com"
                whileHover={{ scale: 1.2, rotate: 10 }}
                style={{ display: 'inline-block' }}
              >
                <img src={email} alt="Email" style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', padding: 4 }} />
              </motion.a>
              <motion.a
                href="https://wa.me/+2348037720725?text=Hello,%20Prime%20Procurement%20Limited%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                style={{ display: 'inline-block' }}
              >
                <img src={whatsapp} alt="WhatsApp" style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', padding: 4 }} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                style={{ display: 'inline-block' }}
              >
                <img src={linkedin} alt="LinkedIn" style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', padding: 4 }} />
              </motion.a>
            </div>
          </div>
        </div>
        <div style={{
          marginTop: "48px",
          borderTop: "1px solid #fff2",
          paddingTop: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}>
          <p style={{ fontSize: "15px", marginBottom: "8px", opacity: 0.8 }}>
            &copy; {currentYear} Prime Procurement Limited. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
