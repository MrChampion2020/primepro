import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Users,
  FileText,
  Briefcase,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  ChevronRight
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SIDEBAR_WIDTH = 256; // 64 * 4 = 256px (16rem)

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAuthenticated(!!token);
    if (!token && location.pathname !== '/admin/login') {
      window.location.href = '/admin/login';
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: Home,
      current: location.pathname === '/admin/dashboard'
    },
    {
      name: 'Contacts',
      href: '/admin/contacts',
      icon: Users,
      current: location.pathname.startsWith('/admin/contacts')
    },
    {
      name: 'Blog Posts',
      href: '/admin/blogs',
      icon: FileText,
      current: location.pathname.startsWith('/admin/blogs')
    },
    {
      name: 'Job Postings',
      href: '/admin/jobs',
      icon: Briefcase,
      current: location.pathname.startsWith('/admin/jobs')
    },
    {
      name: 'Chat Management',
      href: '/admin/chat',
      icon: MessageSquare,
      current: location.pathname.startsWith('/admin/chat')
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      current: location.pathname === '/admin/settings'
    }
  ];

  if (!isAuthenticated && location.pathname !== '/admin/login') {
    return null;
  }

  if (location.pathname === '/admin/login') {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (always visible on desktop) */}
      <aside
        className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-40 bg-white shadow-lg border-r border-gray-200"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Admin</span>
          </div>
        </div>
        <nav className="mt-6 px-3 flex-1 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.current
                    ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`mr-3 h-5 w-5 ${
                  item.current ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-500'
                }`} />
                {item.name}
                {item.current && (
                  <ChevronRight className="ml-auto h-4 w-4 text-purple-600" />
                )}
              </motion.a>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              className="group flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
              Logout
            </motion.button>
          </div>
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6 px-3 flex-1 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.current
                    ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`mr-3 h-5 w-5 ${
                  item.current ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-500'
                }`} />
                {item.name}
                {item.current && (
                  <ChevronRight className="ml-auto h-4 w-4 text-purple-600" />
                )}
              </motion.a>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              className="group flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
              Logout
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Main content area (with left margin for sidebar on desktop) */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Top header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 flex items-center">
            <h1 className="text-lg font-semibold text-gray-900">
              {navigation.find(item => item.current)?.name || 'Admin'}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">A</span>
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
        {/* Page content */}
        <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 