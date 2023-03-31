// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router";
import { Topbar } from "./components/Topbar";
import { Home } from "./pages/home.jsx";
import { About } from "./pages/about";
import { Catalogue } from "./pages/catalogue";
import { ContactUs } from "./pages/contactUs";

function App() {
  return (
    <div className="h-screen flex flex-col items-center ">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
