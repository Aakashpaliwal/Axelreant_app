import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
