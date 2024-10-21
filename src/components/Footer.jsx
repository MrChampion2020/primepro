import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";



export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer
      style={{
        backgroundColor: "#4B0082",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "800",
                marginBottom: "16px",
              }}
            >
              P P L
            </h3>
            <p style={{ fontSize: "14px" }}>
              We are a leading procurement and engineering services company,
              providing high-quality products and solutions to various
              industries.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  to="/products"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Products
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  to="/services"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  to="/about"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  About
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  to="/contact"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Contact Info
            </h3>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              {" "}
              128 Airport Road, Warri, Nigeria
            </p>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              Phone: +234 prime000000
            </p>
            <p style={{ fontSize: "14px" }}>
              Email: info@primeprocurementus.com
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "32px",
            borderTop: "1px solid #666",
            paddingTop: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (min-width: 768px)": {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          }}
        >
          <p style={{ fontSize: "14px", marginBottom: "16px" }}>
            &copy; {currentYear} Prime Procurement Limited. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            {/* Email */}
            <a
              href="mailto:info@primeprocurementus.com"
              style={{ color: "#999", ":hover": { color: "white" } }}
            >
              <span className="sr-only">Email</span>
              <svg
                style={{ height: "24px", width: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Email icon */}
                <path d="M4.5 4h15c.828 0 1.5.672 1.5 1.5v12c0 .828-.672 1.5-1.5 1.5h-15c-.828 0-1.5-.672-1.5-1.5v-12c0-.828.672-1.5 1.5-1.5zm0 1.5v.202l7.5 4.298 7.5-4.298v-.202h-15zm7.5 5.787l-7.5-4.299v9.012h15v-9.012l-7.5 4.299z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+2348037720725?text=Hello,%20Prime%20Procurement%20Limited%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", ":hover": { color: "white" } }}
            >
              <span className="sr-only">WhatsApp</span>
              <svg
                style={{ height: "24px", width: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* WhatsApp icon */}
                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-1.75 0-3.39-.46-4.84-1.26L2 22l1.27-4.75C2.48 15.39 2 13.75 2 12 2 6.48 6.48 2 12 2m.14 2C7.66 4 4 7.66 4 12c0 1.54.5 2.97 1.35 4.15l-1.03 3.83 3.91-1.03A7.982 7.982 0 0012 20c4.42 0 8-3.58 8-8s-3.58-8-8-8m-.65 2.75h.03c.26 0 .47.18.53.43l.57 2.29c.05.19 0 .39-.14.52l-1.14 1.04c.2.4.45.77.76 1.1.31.33.67.61 1.06.82l1.05-1.01c.15-.14.36-.18.56-.11l2.41.8c.24.08.41.3.43.55v.03c.01.28-.14.52-.39.6l-2.3.77c-.11.04-.23.05-.34.03-.85-.14-1.65-.43-2.38-.86-.73-.43-1.35-1-1.87-1.67-.43-.56-.76-1.18-1.02-1.84-.2-.56-.31-1.13-.32-1.72-.01-.17.05-.34.16-.47l1.21-1.42c.1-.12.26-.18.42-.18z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", ":hover": { color: "white" } }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                style={{ height: "24px", width: "24px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* LinkedIn icon */}
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
