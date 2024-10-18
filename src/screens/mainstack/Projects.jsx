import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpeg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpeg';
import service5 from '../../assets/service5.jpeg';
import service6 from '../../assets/service6.jpeg';
import { useNavigate, useParams } from "react-router-dom";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: 'Oil & Gas Supply Chain Optimization',
      client: 'Nigerian National Petroleum Corporation',
      description: 'Implemented a comprehensive supply chain optimization solution for NNPC, resulting in a 20% reduction in procurement costs and improved operational efficiency.',
      image: service1,  // Replaced with imported image
    },
    { 
      title: 'Manufacturing Equipment Procurement',
      client: 'Dangote Group',
      description: 'Managed the procurement of state-of-the-art manufacturing equipment for Dangote Group\'s new production facility, ensuring timely delivery and cost-effectiveness.',
      image: service2,  // Replaced with imported image
    },
    { 
      title: 'Healthcare Supplies Management',
      client: 'Lagos State Ministry of Health',
      description: 'Developed and implemented an efficient healthcare supplies management system for Lagos State, improving inventory accuracy and reducing stockouts by 40%.',
      image: service3,  // Replaced with imported image
    },
    { 
      title: 'Telecom Infrastructure Procurement',
      client: 'MTN Nigeria',
      description: 'Coordinated the procurement of telecom infrastructure for MTN Nigeria\'s network expansion project, resulting in faster deployment and cost savings.',
      image: service4,  // Replaced with imported image
    },
    { 
      title: 'Sustainable Agriculture Supply Chain',
      client: 'Nigerian Agricultural Cooperative',
      description: 'Designed and implemented a sustainable supply chain solution for a large agricultural cooperative, improving farmer incomes and reducing food waste.',
      image: service5,  // Replaced with imported image
    },
    { 
      title: 'E-commerce Fulfillment Center Setup',
      client: 'Jumia',
      description: 'Managed the procurement and setup of equipment and systems for Jumia\'s new fulfillment center, optimizing order processing and delivery times.',
      image: service6,  // Replaced with imported image
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#4B0082' }}>Our Projects</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }} onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#4B0082' }}>{project.title}</h3>
                <p style={{ fontSize: '16px', color: '#666' }}>{project.client}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90%',
              overflow: 'auto',
            }}>
              <button onClick={() => setSelectedProject(null)} style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}>&times;</button>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>{selectedProject.title}</h2>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Client: {selectedProject.client}</p>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }} />
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{selectedProject.description}</p>
            </div>
          </div>
        )}

        <section style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>Let's discuss how we can help optimize your procurement and supply chain processes.</p>
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
          }}>Contact Us</a>
        </section>
      </div>
      <Footer />
    </div>
  );
}
