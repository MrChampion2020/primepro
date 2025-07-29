import React from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
            Terms of Service
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
            Please read these terms carefully before using our services.
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
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>1. Acceptance of Terms</h2>
                <p style={{ marginBottom: '15px' }}>
                  By accessing and using the website primeprocurementus.com ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  These Terms of Service ("Terms") govern your use of our website and services operated by Prime Procurement Limited ("Company," "we," "us," or "our").
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>2. Description of Service</h2>
                <p style={{ marginBottom: '15px' }}>
                  Prime Procurement Limited provides procurement and engineering services, including but not limited to:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>Strategic sourcing and procurement services</li>
                  <li>Engineering consulting and project management</li>
                  <li>Quality assurance and control services</li>
                  <li>Logistics and supply chain management</li>
                  <li>Technical support and after-sales services</li>
                  <li>Product sourcing and supplier management</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>3. User Accounts and Registration</h2>
                <p style={{ marginBottom: '15px' }}>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>4. Intellectual Property Rights</h2>
                <p style={{ marginBottom: '15px' }}>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Prime Procurement Limited and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>5. User Conduct</h2>
                <p style={{ marginBottom: '15px' }}>
                  You agree not to use the Service to:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>Use the Service for any commercial purpose without authorization</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>6. Privacy Policy</h2>
                <p style={{ marginBottom: '15px' }}>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  By using our Service, you consent to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>7. Disclaimers and Limitations</h2>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Disclaimer of Warranties:</strong> The information on this Service is provided on an "AS IS" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms whether express or implied.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Limitation of Liability:</strong> In no event shall Prime Procurement Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>8. Indemnification</h2>
                <p style={{ marginBottom: '15px' }}>
                  You agree to defend, indemnify and hold harmless Prime Procurement Limited and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service, or a breach of these Terms.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>9. Third-Party Links</h2>
                <p style={{ marginBottom: '15px' }}>
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by Prime Procurement Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  You further acknowledge and agree that Prime Procurement Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>10. Termination</h2>
                <p style={{ marginBottom: '15px' }}>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>11. Governing Law</h2>
                <p style={{ marginBottom: '15px' }}>
                  These Terms shall be interpreted and governed by the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>12. Changes to Terms</h2>
                <p style={{ marginBottom: '15px' }}>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>13. Contact Information</h2>
                <p style={{ marginBottom: '15px' }}>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '10px' }}><strong>Email:</strong> info@primeprocurementus.com</p>
                  <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> +2348057216362</p>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>14. Severability</h2>
                <p style={{ marginBottom: '15px' }}>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>15. Entire Agreement</h2>
                <p style={{ marginBottom: '15px' }}>
                  These Terms constitute the entire agreement between you and Prime Procurement Limited regarding the use of the Service, superseding any prior agreements between you and Prime Procurement Limited relating to your use of the Service.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 