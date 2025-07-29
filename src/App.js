import React from "react";

import "./App.css";
import Navigation from "./navigation/Navigation";
import Modal from "react-modal";
import { AuthProvider } from "./AuthContext";
import ChatWidget from './components/ChatWidget';
function App() {
  return (
    <>
      <AuthProvider>
        <>
        
          <Navigation />
          <Modal />
          <ChatWidget />
        </>
      </AuthProvider>
    </>
  );
}

export default App;

