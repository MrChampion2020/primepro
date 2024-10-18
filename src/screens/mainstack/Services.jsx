import React from 'react'
import { ShoppingCart, Truck, BarChart, Users, Shield, Headphones } from 'lucide-react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Services() {
  const services = [
    { icon: <ShoppingCart size={40} />, title: 'Procurement Management', description: 'Streamline your purchasing processes and reduce costs with our comprehensive procurement management solutions.' },
    { icon: <Truck size={40} />, title: 'Supply Chain Optimization', description: 'Enhance efficiency and reduce lead times with our expert supply chain optimization services.' },
    { icon: <BarChart size={40} />, title: 'Inventory Management', description: 'Optimize your inventory levels and reduce carrying costs with our advanced inventory management systems.' },
    { icon: <Users size={40} />, title: 'Vendor Management', description: 'Improve supplier relationships and performance with our strategic vendor management services.' },
    { icon: <Shield size={40} />, title: 'Risk Management', description: 'Identify and mitigate supply chain risks with our comprehensive risk management solutions.' },
    { icon: <Headphones size={40} />, title: 'Consulting Services', description: 'Get expert advice and tailored strategies to improve your procurement and supply chain operations.' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#4B0082' }}>Our Services</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        {services.map((service, index) => (
          <div key={index} style={{ 
            backgroundColor: '#f8f8f8', 
            borderRadius: '8px', 
            padding: '30px', 
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
            }
          }}>
            <div style={{ color: '#4B0082', marginBottom: '20px' }}>{service.icon}</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#4B0082' }}>{service.title}</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{service.description}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Why Choose Our Services?</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <li style={{ flex: '1 1 200px', maxWidth: '300px', backgroundColor: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px' }}>Expertise in Nigerian Market</li>
          <li style={{ flex: '1 1 200px', maxWidth: '300px', backgroundColor: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px' }}>Customized Solutions</li>
          <li style={{ flex: '1 1 200px', maxWidth: '300px', backgroundColor: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px' }}>Cutting-edge Technology</li>
          <li style={{ flex: '1 1 200px', maxWidth: '300px', backgroundColor: '#4B0082', color: 'white', padding: '20px', borderRadius: '8px' }}>Proven Track Record</li>
        </ul>
      </section>

      <section style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Ready to Optimize Your Supply Chain?</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>Contact us today to discuss how we can help improve your procurement and supply chain operations.</p>
        <a href="/contact" style={{ 
          display: 'inline-block',
          backgroundColor: '#4B0082', 
          color: 'white', 
          padding: '15px 30px', 
          borderRadius: '5px', 
          textDecoration: 'none', 
          fontSize: '18px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
          ':hover': {
            backgroundColor: '#3A006F'
          }
        }}>Get in Touch</a>
      </section>
    </div>
    <Footer />
    </div>
  )
}