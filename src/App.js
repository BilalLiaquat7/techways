// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col items-center ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
