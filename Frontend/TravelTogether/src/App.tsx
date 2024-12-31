import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => <h2>Home Page</h2>;
const Trips = () => <h2>Trips Page</h2>;
const Budget = () => <h2>Budget Page</h2>;
const About = () => <h2>About Page</h2>;

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />
      <main>
        <Routes>
          {/* Define routes for the application */}
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
