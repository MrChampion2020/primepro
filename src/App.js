import React from "react";

import "./App.css";
import Navigation from "./navigation/Navigation";
import Modal from "react-modal";
import { AuthProvider } from "./AuthContext";
<<<<<<< HEAD
import ChatWidget from './components/ChatWidget';
=======
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
function App() {
  return (
    <>
      <AuthProvider>
        <>
        
          <Navigation />
<<<<<<< HEAD
          <Modal />
          <ChatWidget />
=======

          <Modal />
>>>>>>> b353fb77c3405f824c6cff804155131a51508516
        </>
      </AuthProvider>
    </>
  );
}

export default App;

