import React from 'react';
import Navbar, { NAVBAR_HEIGHT } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import background from '../../assets/bg.png';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
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
            Disclaimer
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
            Important information about the use of our website and services.
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
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>1. General Disclaimer</h2>
                <p style={{ marginBottom: '15px' }}>
                  The information provided on primeprocurementus.com (the "Website") is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website for any purpose.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from loss of data or profits arising out of, or in connection with, the use of this Website.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>2. No Professional Advice</h2>
                <p style={{ marginBottom: '15px' }}>
                  The information on this Website is not intended to constitute professional advice. The content should not be relied upon as a substitute for professional consultation, advice, or services. You should consult with appropriate professionals for specific advice tailored to your situation.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  We do not provide legal, financial, or professional advice through this Website. Any decisions you make based on the information provided are your sole responsibility.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>3. External Links Disclaimer</h2>
                <p style={{ marginBottom: '15px' }}>
                  Through this Website, you are able to link to other websites which are not under the control of Prime Procurement Limited. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  We are not responsible for the content, privacy policies, or practices of any third-party websites. You access these external websites at your own risk and should review their terms of service and privacy policies.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>4. Product and Service Information</h2>
                <p style={{ marginBottom: '15px' }}>
                  Product descriptions, specifications, and pricing information on this Website are subject to change without notice. We do not warrant that product descriptions or other content on this Website are accurate, complete, reliable, current, or error-free.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Actual products may differ from images shown on the Website. We reserve the right to modify or discontinue any product or service without notice.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>5. Technical Disclaimer</h2>
                <p style={{ marginBottom: '15px' }}>
                  We do not guarantee that the Website will be available at all times or that it will be free from errors or interruptions. We reserve the right to suspend or terminate access to the Website at any time.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  The Website is provided "as is" without any warranties, express or implied. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>6. Limitation of Liability</h2>
                <p style={{ marginBottom: '15px' }}>
                  In no event shall Prime Procurement Limited, its directors, employees, partners, agents, suppliers, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                  <li>Loss of profits, data, or use</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Any damages resulting from the use of our services</li>
                  <li>Any damages resulting from reliance on information provided</li>
                </ul>
                <p style={{ marginBottom: '15px' }}>
                  This limitation of liability applies to the fullest extent permitted by applicable law.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>7. Indemnification</h2>
                <p style={{ marginBottom: '15px' }}>
                  You agree to indemnify and hold harmless Prime Procurement Limited, its directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Website or violation of any terms of service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>8. Copyright and Intellectual Property</h2>
                <p style={{ marginBottom: '15px' }}>
                  All content on this Website, including but not limited to text, graphics, images, logos, and software, is the property of Prime Procurement Limited or its content suppliers and is protected by copyright laws.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Unauthorized use of any content on this Website may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>9. Privacy and Data Protection</h2>
                <p style={{ marginBottom: '15px' }}>
                  While we implement reasonable security measures to protect your information, we cannot guarantee the security of data transmitted over the internet. You acknowledge that you provide information at your own risk.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  For detailed information about how we handle your data, please refer to our Privacy Policy.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>10. Governing Law</h2>
                <p style={{ marginBottom: '15px' }}>
                  This disclaimer shall be governed by and construed in accordance with the laws of Nigeria. Any disputes relating to this disclaimer will be subject to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>11. Changes to Disclaimer</h2>
                <p style={{ marginBottom: '15px' }}>
                  We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after any changes constitutes acceptance of the modified disclaimer.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>12. Contact Information</h2>
                <p style={{ marginBottom: '15px' }}>
                  If you have any questions about this disclaimer, please contact us:
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '10px' }}><strong>Email:</strong> info@primeprocurementus.com</p>
                  <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> +2348057216362</p>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>13. Severability</h2>
                <p style={{ marginBottom: '15px' }}>
                  If any provision of this disclaimer is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the disclaimer will otherwise remain in full force and effect.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>14. Acknowledgment</h2>
                <p style={{ marginBottom: '15px' }}>
                  By using this Website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, you should not use this Website.
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