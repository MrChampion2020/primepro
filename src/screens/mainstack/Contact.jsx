// import React, { useState } from "react";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [serverMessage, setServerMessage] = useState(""); // To store server response

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     try {
//       const response = await fetch("http://localhost:8000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setSubmitStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setSubmitStatus("error");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSubmitStatus("error");
//     }
//   };

//   return (
//     <div
//       style={{
//         width: '100%'
//       }}
//     >
//       <Navbar />
//       <div
//         style={{
//           fontFamily: "Arial, sans-serif",
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "40px 20px",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "36px",
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "40px",
//             color: "#4B0082",
//           }}
//         >
//           Contact Us
//         </h1>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "40px",
//             "@media (min-width: 768px)": {
//               flexDirection: "row",
//             },
//           }}
//         >
//           <div
//             style={{
//               flex: "1",
//               "@media (min-width: 768px)": {
//                 marginRight: "40px",
//               },
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 marginBottom: "20px",
//                 color: "#4B0082",
//               }}
//             >
//               Get in Touch
//             </h2>
//             <form
//               onSubmit={handleSubmit}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   style={{
//                     display: "block",
//                     marginBottom: "5px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   style={{
//                     display: "block",
//                     marginBottom: "5px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="subject"
//                   style={{
//                     display: "block",
//                     marginBottom: "5px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Subject:
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   style={{
//                     display: "block",
//                     marginBottom: "5px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Message:
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                     minHeight: "150px",
//                     resize: "vertical",
//                   }}
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: "#4B0082",
//                   color: "white",
//                   padding: "12px 24px",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                   ":hover": {
//                     backgroundColor: "#3A006F",
//                   },
//                 }}
//               >
//                 Send Message
//               </button>
//             </form>
//             {submitStatus === "success" && (
//               <p
//                 style={{
//                   color: "green",
//                   marginTop: "20px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Message sent successfully!
//               </p>
//             )}
//             {submitStatus === "error" && (
//               <p
//                 style={{
//                   color: "red",
//                   marginTop: "20px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 There was an error sending your message. Please try again.
//               </p>
//             )}
//           </div>

//           <div style={{ flex: "1" }}>
//             <h2
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 marginBottom: "20px",
//                 color: "#4B0082",
//               }}
//             >
//               Contact Information
//             </h2>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <MapPin size={24} color="#4B0082" />
//                 <div>
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "bold",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Address
//                   </h3>
//                   <p>123 Procurement Street, Lagos, Nigeria</p>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <Phone size={24} color="#4B0082" />
//                 <div>
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "bold",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Phone
//                   </h3>
//                   <p>+234 123 456 7890</p>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <Mail size={24} color="#4B0082" />
//                 <div>
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "bold",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Email
//                   </h3>
//                   <p>info@procurementcompany.com</p>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <Clock size={24} color="#4B0082" />
//                 <div>
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "bold",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Business Hours
//                   </h3>
//                   <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
//                   <p>Saturday - Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>

//             <div
//               style={{
//                 marginTop: "40px",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   marginBottom: "20px",
//                   color: "#4B0082",
//                 }}
//               >
//                 Our Location
//               </h2>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   backgroundColor: "#f0f0f0",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: "4px",
//                 }}
//               >
//                 {/* Replace this div with an actual map component or embed */}
//                 <p>Map placeholder</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // For showing the processing effect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true); // Start processing

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsProcessing(false); // Stop processing after the response
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
            color: "#4B0082",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            "@media (min-width: 768px)": {
              flexDirection: "row",
            },
          }}
        >
          <div
            style={{
              flex: "1",
              "@media (min-width: 768px)": {
                marginRight: "40px",
              },
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#4B0082",
              }}
            >
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    minHeight: "150px",
                    resize: "vertical",
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: isProcessing ? "#8a2be2" : "#4B0082", // Change color if processing
                  color: "white",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "4px",
                  cursor: isProcessing ? "not-allowed" : "pointer", // Disable button if processing
                  transition: "background-color 0.3s ease",
                  ":hover": {
                    backgroundColor: isProcessing ? "#8a2be2" : "#3A006F",
                  },
                }}
                disabled={isProcessing} // Disable button while processing
              >
                {isProcessing ? "Sending..." : "Send Message"} {/* Text updates during processing */}
              </button>
            </form>

            {submitStatus === "success" && (
              <p
                style={{
                  color: "green",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p
                style={{
                  color: "red",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                There was an error sending your message. Please try again.
              </p>
            )}
          </div>

          <div style={{ flex: "1" }}>
            {/* Contact information */}
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#4B0082",
              }}
            >
              Contact Information
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MapPin size={24} color="#4B0082" />
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Address
                  </h3>
                  <p> 128 Airport Road, Warri, Nigeria</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Phone size={24} color="#4B0082" />
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Phone
                  </h3>
                  <p>+234 prime0000000</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Mail size={24} color="#4B0082" />
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Email
                  </h3>
                  <p>info@primeprocurementus.com</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Clock size={24} color="#4B0082" />
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Business Hours
                  </h3>
                  <p>Mon-Fri: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
