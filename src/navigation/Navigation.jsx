import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import {
  Products,
  Services,
  Home, 
  About, 
  Projects, 
  Contact,
  Blog,
  BlogDetail,
  Jobs,
  JobDetail,
  PrivacyPolicy,
  TermsOfService,
  Disclaimer,
  FAQ,
} from "../screens/index";
import {
  AdminDashboard,
  AdminLogin,
  AdminLayout,
  ContactsManagement,
  BlogManagement,
  JobsManagement,
  ChatManagement,
  Settings,
  ProductsManagement,
} from "../screens/admin";

function ScrollRestoration() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

const Navigation = () => {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Route */}
        <Route path="contact" element={<Contact />} />  {/* Contact Route */}
        <Route path="projects" element={<Projects />} /> {/* Projects Route */}
        <Route path="about" element={<About />} />  {/* About Route */}
        <Route path="services" element={<Services />} />  {/* Services Route */}
        <Route path="products" element={<Products />} />  {/* Products Route */}
        <Route path="blog" element={<Blog />} />  {/* Blog Route */}
        <Route path="blog/:slug" element={<BlogDetail />} />  {/* Blog Detail Route */}
        <Route path="jobs" element={<Jobs />} />  {/* Jobs Route */}
        <Route path="jobs/:id" element={<JobDetail />} />  {/* Job Detail Route */}
        {/* Legal and Policy Routes */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="faq" element={<FAQ />} />
        {/* Admin Routes */}
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/dashboard" element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        } />
        <Route path="admin/contacts" element={
          <AdminLayout>
            <ContactsManagement />
          </AdminLayout>
        } />
        <Route path="admin/blogs" element={
          <AdminLayout>
            <BlogManagement />
          </AdminLayout>
        } />
        <Route path="admin/blogs/create" element={
          <AdminLayout>
            <BlogManagement />
          </AdminLayout>
        } />
        <Route path="admin/jobs" element={
          <AdminLayout>
            <JobsManagement />
          </AdminLayout>
        } />
        <Route path="admin/jobs/create" element={
          <AdminLayout>
            <JobsManagement />
          </AdminLayout>
        } />
        <Route path="admin/chat" element={
          <AdminLayout>
            <ChatManagement />
          </AdminLayout>
        } />
        <Route path="admin/settings" element={
          <AdminLayout>
            <Settings />
          </AdminLayout>
        } />
        <Route path="admin/products" element={
          <AdminLayout>
            <ProductsManagement />
          </AdminLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
