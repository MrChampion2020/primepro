<<<<<<< HEAD
import React from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import chevron from '../../assets/chevron.png';
import profile from '../../assets/profile.png';
// import logo from '../../assets/logo.png';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Jane Doe', role: 'CEO', image: profile },
  { name: 'John Smith', role: 'CTO', image: profile },
  { name: 'Mary Johnson', role: 'COO', image: profile },
  { name: 'James Lee', role: 'Lead Engineer', image: profile },
];

const values = [
  { title: 'Innovation', desc: 'We drive progress with creative solutions.' },
  { title: 'Integrity', desc: 'We act with honesty and transparency.' },
  { title: 'Excellence', desc: 'We deliver the highest quality in all we do.' },
  { title: 'Collaboration', desc: 'We achieve more together.' },
];

export default function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/* Hero Section - already present */}
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
            About Us
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
            Learn more about our mission, vision, and team.
          </motion.p>
        </div>
        {/* Remove scroll indicator here */}
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
      <main style={{ flexGrow: 1, marginTop: 10, position: 'relative', zIndex: 2 }}>
        {/* Company Mission & Vision */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '60px 5%', background: '#fff', borderRadius: 20, margin: '20px auto', maxWidth: 1000 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#4B0082' }}>Our Mission & Vision</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center' }}>
            <motion.div whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #667eea22' }} style={{ flex: 1, minWidth: 260, background: '#f8f9fa', borderRadius: 16, padding: 32, margin: 8, boxShadow: '0 2px 8px #0001', transition: 'all 0.3s' }}>
              <h3 style={{ color: '#667eea', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Mission</h3>
              <p style={{ color: '#333', fontSize: 17 }}>To deliver world-class procurement and engineering solutions that empower our clients to achieve excellence and growth.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #667eea22' }} style={{ flex: 1, minWidth: 260, background: '#f8f9fa', borderRadius: 16, padding: 32, margin: 8, boxShadow: '0 2px 8px #0001', transition: 'all 0.3s' }}>
              <h3 style={{ color: '#667eea', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Vision</h3>
              <p style={{ color: '#333', fontSize: 17 }}>To be the preferred global partner for innovative, reliable, and sustainable procurement and engineering services.</p>
            </motion.div>
            </div>
        </motion.section>
        {/* Company Values */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '60px 5%', background: '#f8f9fa', borderRadius: 20, margin: '40px auto', maxWidth: 1000 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#4B0082' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {values.map((val, idx) => (
              <motion.div key={val.title} whileHover={{ y: -8, boxShadow: '0 8px 32px #667eea22' }} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 2px 8px #0001', transition: 'all 0.3s' }}>
                <h3 style={{ color: '#667eea', fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{val.title}</h3>
                <p style={{ color: '#333', fontSize: 16 }}>{val.desc}</p>
              </motion.div>
          ))}
        </div>
        </motion.section>
        {/* Q&A Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '60px 5%', background: '#f8f9fa', borderRadius: 20, margin: '40px auto', maxWidth: 1000 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#4B0082' }}>Frequently Asked Questions</h2>
          <FAQ />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(null);
  const faqs = [
    {
      q: 'What industries do you serve?',
      a: 'We specialize in procurement and engineering services for the oil & gas, energy, and industrial sectors.'
    },
    {
      q: 'How do you ensure product quality?',
      a: 'We partner with certified suppliers and conduct rigorous quality checks to ensure all products meet industry standards.'
    },
    {
      q: 'Can you handle urgent procurement needs?',
      a: 'Yes, our agile team and strong supplier network allow us to fulfill urgent and large-scale procurement requests efficiently.'
    },
    {
      q: 'Do you offer logistics and delivery support?',
      a: 'Absolutely. We provide end-to-end logistics, including shipping, customs clearance, and on-site delivery.'
    },
    {
      q: 'How can I request a quote?',
      a: 'You can contact us via our website form, email, or chat widget for a fast, personalized quote.'
    }
  ];
  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      {faqs.map((item, idx) => (
        <motion.div key={idx} style={{ marginBottom: 18, borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px #667eea11' }}>
          <div
            onClick={() => setOpen(open === idx ? null : idx)}
            style={{ cursor: 'pointer', background: '#fff', padding: '18px 24px', fontWeight: 600, color: '#667eea', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            {item.q}
            <span style={{ fontSize: 22, marginLeft: 12 }}>{open === idx ? '-' : '+'}</span>
          </div>
          <AnimatePresence initial={false}>
            {open === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: '#f8f9fa', color: '#333', padding: '0 24px 18px 24px', fontSize: 16 }}
              >
                {item.a}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
=======
import React from 'react'
import { Users, Target, Award, TrendingUp } from 'lucide-react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  const stats = [
    { icon: <Users size={24} />, title: 'Clients Served', value: '500+' },
    { icon: <Target size={24} />, title: 'Projects Completed', value: '1000+' },
    { icon: <Award size={24} />, title: 'Years of Experience', value: '20+' },
    { icon: <TrendingUp size={24} />, title: 'Annual Growth', value: '25%' },
  ]

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', marginTop: '100px' }}>
      <Navbar />
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '24px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px', color: '#4B0082' }}>About Our Company</h1>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Our Story</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Founded in 2003, our company has grown from a small local operation to a leading procurement and supply chain solutions provider in Nigeria. With a commitment to excellence and innovation, we've consistently delivered value to our clients across various industries.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Our journey has been marked by continuous improvement, strategic partnerships, and a deep understanding of the Nigerian market. Today, we pride ourselves on our ability to offer tailored solutions that meet the unique needs of each client.
        </p>
      </section>

      <section style={{ marginBottom: '60px', backgroundColor: '#f8f8f8', padding: '40px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#4B0082', textAlign: 'center' }}>Company Stats</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', flex: '1 1 200px' }}>
              <div style={{ color: '#4B0082', marginBottom: '10px' }}>{stat.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{stat.title}</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082' }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Our Mission</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Our mission is to empower businesses in Nigeria with world-class procurement and supply chain solutions. We strive to optimize operations, reduce costs, and drive growth for our clients through innovative strategies and cutting-edge technologies.
        </p>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Our Vision</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          We aspire to be the leading procurement and supply chain solutions provider in Africa, known for our expertise, integrity, and commitment to sustainable business practices. Our goal is to contribute to the economic growth of Nigeria and beyond by fostering efficient and resilient supply chains.
        </p>
      </section>

      
    </div>
    <Footer />
    </div>
  )
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
}