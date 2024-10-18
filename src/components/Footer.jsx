import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'


export default function Footer() {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  return (
    <footer style={{
      backgroundColor: '#4B0082',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        }}>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>About Us</h3>
            <p style={{ fontSize: '14px' }}>We are a leading procurement and engineering services company, providing high-quality products and solutions to various industries.</p>
          </div>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Home</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Products</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Services</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>About</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Contact Info</h3>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}> 128 Airport Road, Warri, Nigeria</p>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Phone: +234 prime000000</p>
            <p style={{ fontSize: '14px' }}>Email: info@primeprocurementus.com</p>
          </div>
        </div>
        <div style={{
          marginTop: '32px',
          borderTop: '1px solid #666',
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        }}>
          <p style={{ fontSize: '14px', marginBottom: '16px' }}>&copy; {currentYear} Prime Procurement Limited. All rights reserved.</p>
          <div style={{
            display: 'flex',
            gap: '16px'
          }}>
            <a href="#" style={{ color: '#999', ':hover': { color: 'white' } }}>
              <span className="sr-only">Facebook</span>
              <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" style={{ color: '#999', ':hover': { color: 'white' } }}>
              <span className="sr-only">Twitter</span>
              <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" style={{ color: '#999', ':hover': { color: 'white' } }}>
              <span className="sr-only">LinkedIn</span>
              <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}