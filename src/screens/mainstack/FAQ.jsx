import React, { useState } from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import background from '../../assets/bg.png';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const faqData = {
    general: [
      {
        id: 'general-1',
        question: 'What is Prime Procurement Limited?',
        answer: 'Prime Procurement Limited is a leading procurement and engineering services company based in Nigeria. We specialize in providing high-quality products and comprehensive procurement solutions to industries worldwide, with expertise in oil & gas, energy, and industrial sectors.'
      },
      {
        id: 'general-2',
        question: 'Where is your company located?',
        answer: 'We are based in Nigeria and serve clients globally. We have established partnerships with suppliers and manufacturers worldwide to provide comprehensive procurement and engineering services.'
      },
      {
        id: 'general-3',
        question: 'How long has your company been in business?',
        answer: 'We have been operating in the procurement and engineering services industry for over 7 years, building a strong reputation for reliability, quality, and customer satisfaction.'
      },
      {
        id: 'general-4',
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including oil & gas, energy, manufacturing, construction, mining, marine & offshore, agriculture, healthcare, telecommunications, aerospace, water treatment, food & beverage, textile & apparel, and electronics.'
      }
    ],
    services: [
      {
        id: 'services-1',
        question: 'What procurement services do you offer?',
        answer: 'Our procurement services include strategic sourcing, supplier management, cost optimization, quality assurance, logistics support, supply chain optimization, inventory management, and delivery tracking. We provide end-to-end procurement solutions tailored to your business needs.'
      },
      {
        id: 'services-2',
        question: 'Do you provide engineering services?',
        answer: 'Yes, we offer comprehensive engineering services including design & planning, technical consulting, project management, and engineering support for complex industrial projects. Our team of experienced engineers ensures high-quality solutions.'
      },
      {
        id: 'services-3',
        question: 'Can you handle urgent procurement needs?',
        answer: 'Absolutely. Our agile team and strong supplier network allow us to fulfill urgent and large-scale procurement requests efficiently. We understand that time-sensitive projects require quick turnaround times.'
      },
      {
        id: 'services-4',
        question: 'Do you offer logistics and delivery support?',
        answer: 'Yes, we provide complete logistics support including shipping, customs clearance, and on-site delivery. Our logistics team ensures timely and secure delivery of all procured items.'
      }
    ],
    products: [
      {
        id: 'products-1',
        question: 'What types of products do you procure?',
        answer: 'We procure a wide range of industrial products including pipes, valves, gaskets, screws, cables, oil, gas, stainless steel, wellhead equipment, and many other industrial supplies. We have access to over 150+ products across 15 different categories.'
      },
      {
        id: 'products-2',
        question: 'How do you ensure product quality?',
        answer: 'We partner with certified suppliers and conduct rigorous quality checks to ensure all products meet industry standards. Our quality assurance process includes supplier verification, product testing, and compliance monitoring.'
      },
      {
        id: 'products-3',
        question: 'Can you source custom or specialized products?',
        answer: 'Yes, we can source custom and specialized products based on your specific requirements. Our extensive network of suppliers and manufacturers allows us to find unique solutions for specialized needs.'
      },
      {
        id: 'products-4',
        question: 'Do you provide product warranties?',
        answer: 'Yes, we ensure that all products come with appropriate warranties from manufacturers. We also provide additional support and assistance for warranty claims when needed.'
      }
    ],
    business: [
      {
        id: 'business-1',
        question: 'How can I request a quote?',
        answer: 'You can request a quote by contacting us through our website form, email (info@primeprocurementus.com), or phone (+2348057216362). We provide fast, personalized quotes based on your specific requirements.'
      },
      {
        id: 'business-2',
        question: 'What is your payment process?',
        answer: 'We offer flexible payment terms including advance payment, letter of credit, and other secure payment methods. Payment terms are discussed and agreed upon before order confirmation.'
      },
      {
        id: 'business-3',
        question: 'Do you work with international clients?',
        answer: 'Yes, we work with clients worldwide. We have experience in international trade, customs procedures, and can handle shipments to various global destinations.'
      },
      {
        id: 'business-4',
        question: 'What are your business hours?',
        answer: 'Our business hours are Monday to Friday, 9:00 AM to 5:00 PM (WAT). However, we provide 24/7 support for urgent inquiries and emergency situations.'
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: 'How do you handle technical specifications?',
        answer: 'We have a team of technical experts who review and validate all technical specifications. We ensure that procured items meet your exact technical requirements and industry standards.'
      },
      {
        id: 'technical-2',
        question: 'Can you provide technical support?',
        answer: 'Yes, we provide comprehensive technical support including product selection guidance, installation support, and troubleshooting assistance. Our technical team is available to help with any questions.'
      },
      {
        id: 'technical-3',
        question: 'Do you offer training for equipment?',
        answer: 'Yes, we can arrange training sessions for equipment and systems we procure. This includes operator training, maintenance training, and safety procedures.'
      },
      {
        id: 'technical-4',
        question: 'How do you handle after-sales support?',
        answer: 'We provide ongoing after-sales support including spare parts availability, maintenance services, and technical assistance. We maintain long-term relationships with our clients.'
      }
    ],
    compliance: [
      {
        id: 'compliance-1',
        question: 'What certifications do you have?',
        answer: 'We maintain various industry certifications and comply with international standards. Our suppliers are also certified and meet quality management system requirements.'
      },
      {
        id: 'compliance-2',
        question: 'How do you ensure compliance with regulations?',
        answer: 'We stay updated with all relevant industry regulations and ensure compliance in all our operations. This includes safety standards, environmental regulations, and trade compliance.'
      },
      {
        id: 'compliance-3',
        question: 'Do you provide documentation for customs?',
        answer: 'Yes, we provide all necessary documentation for customs clearance including certificates of origin, commercial invoices, packing lists, and other required documents.'
      },
      {
        id: 'compliance-4',
        question: 'How do you handle quality control?',
        answer: 'Our quality control process includes supplier audits, product inspections, testing, and certification verification. We maintain strict quality standards throughout the procurement process.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: '🏢' },
    { id: 'services', name: 'Our Services', icon: '⚙️' },
    { id: 'products', name: 'Products', icon: '📦' },
    { id: 'business', name: 'Business Process', icon: '💼' },
    { id: 'technical', name: 'Technical Support', icon: '🔧' },
    { id: 'compliance', name: 'Compliance & Quality', icon: '✅' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '70vh',
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
              fontSize: 'clamp(24px, 6vw, 44px)',
              fontWeight: 'bold',
              marginBottom: '10px',
              lineHeight: 1.2
            }}
          >
            Frequently Asked Questions
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
            Find answers to common questions about our services and business operations.
          </motion.p>
        </div>
      </motion.section>
      
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenCategory(category.id)}
                style={{
                  background: openCategory === category.id 
                    ? 'linear-gradient(90deg, #667eea 0%, #4B0082 100%)'
                    : 'rgba(255,255,255,0.9)',
                  color: openCategory === category.id ? 'white' : '#4B0082',
                  border: '2px solid #667eea',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '20px' }}>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            key={openCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 24,
              padding: '40px',
              boxShadow: '0 8px 32px #667eea22',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid #e0e7ff',
            }}
          >
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#4B0082', 
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              {categories.find(cat => cat.id === openCategory)?.name}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqData[openCategory].map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    border: '1px solid #e0e7ff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px #667eea11'
                  }}
                >
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#4B0082',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(102, 126, 234, 0.1)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}
                  >
                    {item.question}
                    <span style={{ 
                      fontSize: '24px', 
                      color: '#667eea',
                      transition: 'transform 0.3s ease',
                      transform: openQuestions[item.id] ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}>
                      +
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openQuestions[item.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: '#f8f9fa',
                          padding: '0 24px',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{ 
                          padding: '20px 0',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#333'
                        }}>
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                marginTop: '40px',
                padding: '30px',
                background: 'linear-gradient(135deg, #667eea 0%, #4B0082 100%)',
                borderRadius: '16px',
                textAlign: 'center',
                color: 'white'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                Still Have Questions?
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.9 }}>
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '30px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 