import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Topbar from "./components/topbarmenu/topbar";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
function App() {
  console.log("hello katia");

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
