import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import msgIcon from '../assets/msg.png';
import axios from 'axios';
import API_URL from '../screens/mainstack/config';

const autoPrompts = [
  'Hi! How can we help you today?',
  'Ask us about our products, services, or get a quote!',
  'Need support? We’re here for you!'
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const pollingRef = useRef(null);
  const chatEndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Fetch messages from backend
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/chat`);
      setMessages(res.data);
    } catch (err) {
      // fallback to bot prompt if error
      setMessages([{ from: 'bot', text: autoPrompts[0] }]);
    }
  };

  // Send message to backend
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    try {
      await axios.post(`${API_URL}/api/chat`, userMsg);
      fetchMessages();
    } catch (err) {
      // fallback: just show locally
    }
  };

  // Poll for new messages when open
  useEffect(() => {
    if (open) {
      fetchMessages();
      pollingRef.current = setInterval(fetchMessages, 5000);
    } else {
      clearInterval(pollingRef.current);
    }
    return () => clearInterval(pollingRef.current);
  }, [open]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: isMobile ? 20 : 30, 
      right: isMobile ? 20 : 30, 
      left: isMobile ? 20 : 'auto',
      zIndex: 1000 
    }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              width: isMobile ? '100%' : 340,
              background: 'white',
              borderRadius: isMobile ? 16 : 20,
              boxShadow: '0 8px 32px #667eea33',
              overflow: 'hidden',
              marginBottom: 16,
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #667eea'
            }}
          >
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: isMobile ? 12 : 16, 
              fontWeight: 'bold', 
              fontSize: isMobile ? 16 : 18 
            }}>Chat with Us</div>
            <div style={{ 
              flex: 1, 
              padding: isMobile ? 12 : 16, 
              maxHeight: isMobile ? 300 : 260, 
              overflowY: 'auto', 
              background: '#f8f9fa' 
            }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{
                  marginBottom: 10,
                  textAlign: msg.from === 'user' ? 'right' : 'left'
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: msg.from === 'user' ? '#667eea' : msg.from === 'admin' ? '#FFA500' : '#e0e7ff',
                    color: msg.from === 'user' ? 'white' : msg.from === 'admin' ? 'white' : '#333',
                    borderRadius: 16,
                    padding: isMobile ? '6px 12px' : '8px 14px',
                    fontSize: isMobile ? 14 : 15,
                    maxWidth: isMobile ? '85%' : 220,
                    wordBreak: 'break-word'
                  }}>{msg.text}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #eee', background: 'white' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                style={{ 
                  flex: 1, 
                  border: 'none', 
                  padding: isMobile ? 10 : 12, 
                  fontSize: isMobile ? 14 : 15, 
                  outline: 'none', 
                  borderRadius: 0 
                }}
              />
              <button type="submit" style={{ 
                background: '#667eea', 
                color: 'white', 
                border: 'none', 
                padding: isMobile ? '0 14px' : '0 18px', 
                fontWeight: 'bold', 
                fontSize: isMobile ? 14 : 16, 
                cursor: 'pointer', 
                borderRadius: 0 
              }}>Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(o => !o)}
        style={{
          width: isMobile ? 56 : 64,
          height: isMobile ? 56 : 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          boxShadow: '0 4px 16px #667eea33',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1001,
          alignSelf: isMobile ? 'flex-end' : 'auto'
        }}
        aria-label="Open chat"
      >
        <img src={msgIcon} alt="Chat" style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32 }} />
      </motion.button>
    </div>
  );
} 