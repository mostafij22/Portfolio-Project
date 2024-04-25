import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/Projects/Projects";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="project" element={<Projects />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </>
  );
};

export default App;

