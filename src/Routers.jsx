import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./FlipAnimatin";
import Form from "./Form";
function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LoginPage/>} />
        <Route path="/Form" element={<Form/>}/>
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Routers;
