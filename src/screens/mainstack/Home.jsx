import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import chevron from '../../assets/chevron.png'
import shell from '../../assets/shell.png'
import mobil from '../../assets/mobil.png'
import nnpc from '../../assets/nnpc1.png'
import heritage from '../../assets/heritage.png'
import backgroundImage from '../../assets/bg.png';
import project1 from '../../assets/service1.jpg'; // import your project images
import project2 from '../../assets/service2.jpeg';
import project3 from '../../assets/service3.jpg';
import project4 from '../../assets/service4.jpeg';
import project5 from '../../assets/service5.jpeg';

import { useNavigate, useParams } from "react-router-dom";



export default function HomeScreen() {

  const navigate = useNavigate();

  const products = [
    { name: 'Pipes', icon: '🔧' },
    { name: 'Fittings', icon: '🔩' },
    { name: 'Valves', icon: '🚰' },
    { name: 'Flanges', icon: '⚙️' },
    { name: 'Fasteners', icon: '🔨' },
    { name: 'Gaskets', icon: '🔧' },
  ]

  const services = [
    { name: 'Procurement Management', description: 'Efficient procurement solutions for your business needs.' },
    { name: 'Engineering Services', description: 'Expert engineering services for complex projects.' },
    { name: 'Quality Assurance', description: 'Ensuring the highest standards for all products and services.' },
    { name: 'Logistics Support', description: 'Seamless logistics management for timely deliveries.' },
  ]

  const testimonials = [
    { name: 'Emmason', company: 'Runorx', text: 'Excellent service and high-quality products. Highly recommended!' },
    { name: 'Champion', company: 'Rented pages', text: 'Their procurement solutions have significantly improved our operations.' },
  ]

  const clients = [
    chevron, shell, mobil, nnpc, heritage
  ]

  const projects = [
    project1, project2, project3,
    project4, project5
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          opacity: 0.9
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <div style={{
            maxWidth: '80%',
            margin: '0 auto',
            padding: '30px',
            borderTopRightRadius: '70px',
            borderTopLeftRadius: '70px',
            zIndex: 10,
            color: 'white',
            backgroundColor: 'rgba(75,0,130, 0.3)'
          
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Procurement Excellence</h1>
            <p style={{
              fontSize: '14px',
              marginBottom: '32px'
            }}>Let us help your business by purchasing our best quality products. Partner with us as we provide the best procurement and engineering services you've ever had.</p>
            <Link to="/contact" style={{
              backgroundColor: '#FFA500',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 24px',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              LEARN MORE
            </Link>
          </div>
        </section>

        {/* Products Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#f0f0f0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px'
            }}>Our Products</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '32px'
            }}>
              {products.map((product, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>{product.icon}</div>
                  <h3 style={{ fontWeight: 'bold' }}>{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '64px 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px'
            }}>Our Services</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px'
            }}>
              {services.map((service, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    marginBottom: '8px'
                  }}>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#4B0082',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '32px'
            }}>About Us</h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '18px',
                marginBottom: '32px'
              }}>
                With over 20 years of experience, we are a leading procurement and engineering services company in Nigeria. Our commitment to excellence and innovation has made us the preferred partner for businesses across various industries.
              </p>
              <Link to="/about" style={{
                backgroundColor: 'white',
                color: '#4B0082',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none'
              }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#f0f0f0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px'
            }}>What Our Clients Say</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <p style={{
                    marginBottom: '16px',
                    fontStyle: 'italic'
                  }}>"{testimonial.text}"</p>
                  <p style={{ fontWeight: 'bold' }}>{testimonial.name}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#666'
                  }}>{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section style={{ padding: '64px 0' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px'
            }}>Our Clients</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px'
            }}>
              {clients.map((client, index) => (
                <img key={index} src={client} alt={`Client ${index + 1}`} style={{
                  height: '64px',
                  objectFit: 'contain'
                }} />
              ))}
            </div>
          </div>
        </section>
        <section style={{
      padding: '64px 0',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '48px'
        }}>Our Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {projects.map((project, index) => (
            <img 
              key={index} 
              src={project} 
              alt={`Project ${index + 1}`} 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px'
              }} 
            />
          ))}
        </div>
      </div>
    </section>


        {/* Newsletter Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: 'black',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '32px'
            }}>Subscribe to Our Newsletter</h2>
            <form style={{
              maxWidth: '500px',
              margin: '0 auto',
              display: 'flex'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flexGrow: 1,
                  padding: '12px 16px',
                  fontSize: '16px',
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  border: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#4B0082',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  fontSize: '16px',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}