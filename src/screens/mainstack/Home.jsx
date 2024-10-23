import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import chevron from '../../assets/chevron.png'
import shell from '../../assets/Shell.jpg'
import mobil from '../../assets/mobil.png'
import nnpc from '../../assets/nnpc.jpg'
import heritage from '../../assets/heritage.jpeg'
import backgroundImage from '../../assets/bg.png'
import project1 from '../../assets/service1.jpg'
import project2 from '../../assets/service2.jpeg'
import project3 from '../../assets/service3.jpg'
import project4 from '../../assets/service4.jpeg'
import project5 from '../../assets/service5.jpeg'

export default function HomeScreen() {
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

  const clients = [chevron, shell, mobil, nnpc, heritage]

  const projects = [project1, project2, project3, project4, project5]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      <Navbar />
      <main style={{ flexGrow: 1, marginTop: '100px'}}
      >
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          opacity: 0.9
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            
          }}>

          </div>

          <div style={{
            maxWidth: '90%',
            width: '100%',
            margin: '0 auto',
            padding: '2%',
            borderTopRightRadius: '70px',
            borderTopLeftRadius: '70px',
            zIndex: 10,
            color: 'white',
            backgroundColor: 'rgba(75,0,130, 0.3)',
          }}>
            <h1 style={{
              fontSize: 'clamp(16px, 5vw, 24px)',
              fontWeight: 'bold',
              marginBottom: '16px',
              textAlign: 'center'
            }}>Procurement Excellence</h1>
            <p style={{
              fontSize: 'clamp(14px, 3vw, 24px)',
              marginBottom: '32px'
            }}>Let us help your business by purchasing our best quality products. Partner with us as we provide the best procurement and engineering services you've ever had.</p>
            <Link to="/contact" style={{
              backgroundColor: '#FFA500',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: 'clamp(14px, 2vw, 18px)'
            }}>
              LEARN MORE
            </Link>
          </div>
        </section>

        {/* Products Section */}
<section style={{
  padding: '5%',
  margin: 'auto',
  backgroundColor: '#f0f0f0',
  width: '100%',
  boxSizing: 'border-box', // Ensures padding and width behave as expected
  overflowX: 'auto' // Allows horizontal scrolling on smaller screens
}}>
  <h2 style={{
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: '48px'
  }}>Our Products</h2>
  
  <div style={{
    display: 'flex',
    flexDirection: 'row', // Displays items in a row
    flexWrap: 'nowrap', // Prevents wrapping, all items will stay in a row
    justifyContent: 'flex-start', // Aligns items from the start
    gap: '10px', // Adds spacing between items
    overflowX: 'auto', // Enables horizontal scroll if content overflows
    padding: 10

  }}>
    {products.map((product, index) => (
      <div key={index} style={{
        textAlign: 'center',
        minWidth: '15%', // Ensures a minimum width for each product
        flex: '0 0 auto', // Prevents shrinking or growing beyond the set width
        padding: '10px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          fontSize: 'clamp(40px, 8vw, 60px)',
          marginBottom: '8px'
        }}>{product.icon}</div>
        <h3 style={{
          fontWeight: 'bold',
          fontSize: 'clamp(14px, 2vw, 18px)'
        }}>{product.name}</h3>
      </div>
    ))}
  </div>
</section>


        {/* Services Section */}
        <section style={{ padding: '5% 0' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }}>Our Services</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            padding: '0 5%'
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
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  marginBottom: '8px'
                }}>{service.name}</h3>
                <p style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section style={{
          padding: '5% 0',
          backgroundColor: '#4B0082',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 5%'
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
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
                fontSize: 'clamp(16px, 2vw, 18px)',
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
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: 'clamp(14px, 2vw, 16px)'
              }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{
          padding: '5% 0',
          backgroundColor: '#f0f0f0'
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }}>What Our Clients Say</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            padding: '0 5%'
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
                  fontStyle: 'italic',
                  fontSize: 'clamp(14px, 2vw, 16px)'
                }}>"{testimonial.text}"</p>
                <p style={{ fontWeight: 'bold', fontSize: 'clamp(14px, 2vw, 16px)' }}>{testimonial.name}</p>
                <p style={{
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  color: '#666'
                }}>{testimonial.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section style={{ padding: '5% 0' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }}>Our Clients</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            padding: '0 5%'
          }}>
            {clients.map((client, index) => (
              <img key={index} src={client} alt={`Client ${index + 1}`} style={{
                height: 'clamp(32px, 10vw, 64px)',
                objectFit: 'contain'
              }} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section style={{
          padding: '5% 0',
          backgroundColor: '#f0f0f0'
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }}>Our Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            padding: '0 5%'
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
        </section>

        {/* Newsletter Section */}
        <section style={{
          padding: '5% 0',
          backgroundColor: 'black',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 5%'
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '32px'
            }}>Subscribe to Our Newsletter</h2>
            <form style={{
              maxWidth: '500px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  borderRadius: '4px',
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
                  borderRadius: '4px',
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