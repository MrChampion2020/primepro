import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import blue from "../assets/blue.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      className="block text-blue-700 dark:text-blue-400"
      style={{
        backgroundColor: "#0000FF",
        color: "white",
        position: "fixed", // Changed to fixed
        top: 0, // Stick to top of the page
        width: "100%", // Full width of the page
        zIndex: 1000,
        padding: 10,
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => handleNavigation("/")}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {/* <img src="/logo.svg" alt="Logo" style={{ height: '32px', width: '32px' }} /> */}
              <h6
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: 800,
                }}
              >
                CA
              </h6>
            </button>
          </div>
          {!isMobile && (
            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    backgroundColor:
                      location.pathname === item.path
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                color: "white",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          )}
        </div>
      </div>
      {isMobile && isOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            backgroundImage: `url(${blue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ padding: "8px 16px" }}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "white",
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
