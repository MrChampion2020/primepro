import React from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.2
            }}
          >
            Privacy Policy
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
            Your privacy is important to us. Learn how we protect and handle your information.
          </motion.p>
        </div>
      </motion.section>
      
      <main style={{ flexGrow: 1, marginTop: 20, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 24,
              padding: '40px',
              boxShadow: '0 8px 32px #667eea22',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid #e0e7ff',
            }}
          >
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
              <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600', color: '#4B0082' }}>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>1. Introduction</h2>
                <p style={{ marginBottom: '15px' }}>
                  Prime Procurement Limited ("we," "our," or "us") operates the website primeprocurementus.com (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>2. Information We Collect</h2>
                
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#667eea', marginBottom: '15px' }}>2.1 Personal Information</h3>
                <p style={{ marginBottom: '15px' }}>
                  We may collect personal information that you voluntarily provide to us, including but not limited to:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Address and location information</li>
                  <li>Communication preferences</li>
                  <li>Inquiry and support messages</li>
                </ul>

                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#667eea', marginBottom: '15px' }}>2.2 Automatically Collected Information</h3>
                <p style={{ marginBottom: '15px' }}>
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Click patterns and user interactions</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>3. How We Use Your Information</h2>
                <p style={{ marginBottom: '15px' }}>
                  We use the collected information for various purposes:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To fulfill any other purpose for which you provide it</li>
                  <li>To carry out our obligations and enforce our rights</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>4. Cookies and Tracking Technologies</h2>
                <p style={{ marginBottom: '15px' }}>
                  We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Types of cookies we use:</strong>
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p style={{ marginBottom: '15px' }}>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>5. Third-Party Services</h2>
                <p style={{ marginBottom: '15px' }}>
                  We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Third-party services we use include:</strong>
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                  <li><strong>Cloudflare:</strong> For content delivery and security</li>
                  <li><strong>Render:</strong> For hosting our website</li>
                  <li><strong>Email services:</strong> For communication with users</li>
                </ul>
                <p style={{ marginBottom: '15px' }}>
                  These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>6. Data Security</h2>
                <p style={{ marginBottom: '15px' }}>
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>7. Your Rights</h2>
                <p style={{ marginBottom: '15px' }}>
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li><strong>Access:</strong> Request access to your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
                <p style={{ marginBottom: '15px' }}>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>8. Children's Privacy</h2>
                <p style={{ marginBottom: '15px' }}>
                  Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>9. Changes to This Privacy Policy</h2>
                <p style={{ marginBottom: '15px' }}>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>10. Contact Us</h2>
                <p style={{ marginBottom: '15px' }}>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '10px' }}><strong>Email:</strong> info@primeprocurementus.com</p>
                  <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> +2348057216362</p>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>11. International Data Transfers</h2>
                <p style={{ marginBottom: '15px' }}>
                  Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  If you are located outside Nigeria and choose to provide information to us, please note that we transfer the data, including Personal Data, to Nigeria and process it there.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>12. Legal Basis for Processing</h2>
                <p style={{ marginBottom: '15px' }}>
                  We process your personal data based on the following legal grounds:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li><strong>Consent:</strong> When you have given clear consent for us to process your personal data</li>
                  <li><strong>Contract:</strong> When processing is necessary for the performance of a contract</li>
                  <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate interests</li>
                  <li><strong>Legal Obligation:</strong> When processing is necessary for compliance with a legal obligation</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 