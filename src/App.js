// import logo from './logo.svg';
import "./App.css";
import Slider from "./components/slider";
import { Topbar } from "./components/Topbar";
import sliderArr from "./components/sliderArr";
import latestProds from "./components/latestProds";

function App() {
  return (
    <div className="h-screen flex flex-col items-center ">
      <Topbar />
      <Slider sliderArray={sliderArr} />
      <latestProds />
    </div>
  );
}

export default App;
