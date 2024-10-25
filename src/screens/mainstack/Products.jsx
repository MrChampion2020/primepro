
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpeg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpeg';
import service5 from '../../assets/service5.jpeg';
import service6 from '../../assets/service6.jpeg';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industrial Equipment', 'Office Supplies', 'Safety Gear', 'Electronics', 'Chemicals'];

  const products = [
    { name: 'Industrial Pump', category: 'Industrial Equipment', image: service1 },
    { name: 'Office Chair', category: 'Office Supplies', image: service2 },
    { name: 'Safety Helmet', category: 'Safety Gear', image: service3 },
    { name: 'Laptop', category: 'Electronics', image: service4 },
    { name: 'Industrial Cleaner', category: 'Chemicals', image: service5 },
    { name: 'Conveyor Belt', category: 'Industrial Equipment', image: service6 },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#4B0082' }}>Our Products</h1>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Categories</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: selectedCategory === category ? '#4B0082' : '#f0f0f0',
                  color: selectedCategory === category ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((product, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{product.category}</p>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#4B0082' }}>Need a Custom Solution?</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>We offer tailored procurement solutions for your specific needs. Contact us to discuss your requirements.</p>
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
          }}>
            Request a Quote
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
}
