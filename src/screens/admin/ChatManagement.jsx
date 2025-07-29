import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Send, 
  Trash2, 
  User,
  Bot,
  Shield,
  Calendar,
  RefreshCw,
  X
} from 'lucide-react';
import axios from 'axios';
import API_URL from '../mainstack/config';

const ChatManagement = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSender, setFilterSender] = useState('all');
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetchMessages();
    // Set up polling for new messages
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/chat`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      setSending(true);
      await axios.post(`${API_URL}/api/chat`, {
        from: 'admin',
        text: newMessage
      });
      setNewMessage('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        // Note: Backend doesn't have delete endpoint yet, so this is a placeholder
        // await axios.delete(`${API_URL}/api/chat/${id}`);
        setMessages(messages.filter(msg => msg._id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterSender === 'all') return matchesSearch;
    if (filterSender === 'user') return matchesSearch && message.from === 'user';
    if (filterSender === 'admin') return matchesSearch && message.from === 'admin';
    if (filterSender === 'bot') return matchesSearch && message.from === 'bot';
    return matchesSearch;
  });

  const getSenderIcon = (sender) => {
    switch (sender) {
      case 'user':
        return <User className="w-4 h-4" />;
      case 'admin':
        return <Shield className="w-4 h-4" />;
      case 'bot':
        return <Bot className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getSenderColor = (sender) => {
    switch (sender) {
      case 'user':
        return 'bg-blue-500';
      case 'admin':
        return 'bg-purple-500';
      case 'bot':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSenderName = (sender) => {
    switch (sender) {
      case 'user':
        return 'User';
      case 'admin':
        return 'Admin';
      case 'bot':
        return 'Bot';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Chat Management</h1>
            <p className="text-gray-600 mt-1">Monitor and respond to chat messages</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchMessages}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterSender}
              onChange={(e) => setFilterSender(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="all">All Messages</option>
              <option value="user">User Messages</option>
              <option value="admin">Admin Messages</option>
              <option value="bot">Bot Messages</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">Chat Messages</h2>
            <p className="text-sm text-gray-600">Total: {filteredMessages.length} messages</p>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {loading ? (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading messages...</p>
              </div>
            ) : filteredMessages.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No messages found</p>
              </div>
            ) : (
              filteredMessages.map((message, index) => (
                <motion.div
                  key={message._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className={`flex ${message.from === 'admin' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.from === 'admin' ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-center space-x-2 mb-1 ${message.from === 'admin' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-6 h-6 ${getSenderColor(message.from)} rounded-full flex items-center justify-center`}>
                        {getSenderIcon(message.from)}
                      </div>
                      <span className="text-xs text-gray-500">{getSenderName(message.from)}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(message.date).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.from === 'admin' 
                        ? 'bg-purple-500 text-white' 
                        : message.from === 'bot'
                        ? 'bg-green-100 text-green-900'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    {message.from !== 'admin' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDeleteMessage(message._id)}
                        className="text-red-500 hover:text-red-700 text-xs mt-1"
                      >
                        <Trash2 className="w-3 h-3 inline mr-1" />
                        Delete
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Quick Response Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Message</h3>
          
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Type your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending || !newMessage.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Quick Responses */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Responses</h4>
            <div className="space-y-2">
              {[
                "Thank you for your message. How can I help you today?",
                "I'll get back to you as soon as possible.",
                "Is there anything specific you'd like to know about our services?",
                "Thank you for contacting us. We appreciate your interest."
              ].map((response, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setNewMessage(response)}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {response}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Statistics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Messages:</span>
                <span className="font-medium">{messages.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">User Messages:</span>
                <span className="font-medium">{messages.filter(m => m.from === 'user').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Admin Messages:</span>
                <span className="font-medium">{messages.filter(m => m.from === 'admin').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bot Messages:</span>
                <span className="font-medium">{messages.filter(m => m.from === 'bot').length}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatManagement; 