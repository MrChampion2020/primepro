import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import wheel from '../assets/valve.jpg' // Example gear/wheel image

export const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav style={{
      background: 'linear-gradient(90deg, #4B0082 0%, #667eea 60%, #FFA500 100%)',
      color: 'white',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: 0,
      minHeight: NAVBAR_HEIGHT,
      boxShadow: '0 2px 16px #0002',
      overflow: 'visible',
    }}>
      {/* Animated background gear/wheel */}
      <motion.img
        src={wheel}
        alt="Gear Wheel"
        initial={{ rotate: 0, opacity: 0.10 }}
        animate={{ rotate: 360, opacity: 0.10 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: '-60px',
          top: '-40px',
          width: '120px',
          zIndex: 0,
          filter: 'blur(1px) grayscale(1)',
          pointerEvents: 'none',
        }}
      />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: NAVBAR_HEIGHT,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={logo} alt="Logo" style={{ width: 40, height: 40, borderRadius: 8, marginRight: 10, boxShadow: '0 2px 8px #0002' }} />
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontWeight: 800, fontSize: 20, letterSpacing: 1 }}
            >
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                {/* Prime Procurement Ltd */}
              </Link>
            </motion.div>
          </div>
          {!isMobile && (
            <div style={{ display: 'flex', gap: '18px' }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    position: 'relative',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: location.pathname === item.path ? '#FFA500' : 'white',
                    background: location.pathname === item.path ? 'rgba(255,255,255,0.10)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'background 0.3s, color 0.3s',
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      color: location.pathname === item.path ? '#FFA500' : 'white',
                      textDecoration: 'none',
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      zIndex: 2,
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)';
                      e.target.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = location.pathname === item.path ? 'rgba(255,255,255,0.10)' : 'transparent';
                      e.target.style.color = location.pathname === item.path ? '#FFA500' : 'white';
                    }}
                  >
                    {item.name}
                  </Link>
                  {/* Run-to-fill effect */}
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: '100%',
                      height: 4,
                      background: 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)',
                      borderRadius: 2,
                      opacity: location.pathname === item.path ? 1 : 0,
                      transition: 'opacity 0.3s',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
          {isMobile && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                color: 'white',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 3,
              }}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </motion.button>
          )}
        </div>
      </div>
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: NAVBAR_HEIGHT,
            left: 0,
            right: 0,
            background: 'linear-gradient(90deg, #4B0082 0%, #667eea 60%, #FFA500 100%)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
          }}
        >
          <div style={{ padding: '8px 16px' }}>
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '17px',
                  fontWeight: '600',
                  color: location.pathname === item.path ? '#FFA500' : 'white',
                  background: location.pathname === item.path ? 'rgba(255,255,255,0.10)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  marginBottom: 6,
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                <Link
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? '#FFA500' : 'white',
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={e => {
                    e.target.style.background = 'linear-gradient(90deg, #FFA500 0%, #667eea 100%)';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = location.pathname === item.path ? 'rgba(255,255,255,0.10)' : 'transparent';
                    e.target.style.color = location.pathname === item.path ? '#FFA500' : 'white';
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
