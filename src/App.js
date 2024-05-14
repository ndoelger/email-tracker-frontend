import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { EmailDashboard } from "./pages/EmailDashboard";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<EmailDashboard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
