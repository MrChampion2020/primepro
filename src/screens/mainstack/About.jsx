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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#4B0082' }}>About Our Company</h1>

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
}