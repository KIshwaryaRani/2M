import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: 30, padding: 10, background: "#282c34" }}>
        <NavLink to="/" style={{ color: "white" }}>Home</NavLink>
        <NavLink to="/about" style={{ color: "white" }}>About</NavLink>
        <NavLink to="/contact" style={{ color: "white" }}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}



npm install react react-dom react-router-dom
