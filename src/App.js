// import logo from './logo.svg';
import "./App.css";
import Slider from "./components/slider";
import { Topbar } from "./components/Topbar";
import sliderArr from "./components/sliderArr";
import { LatestProducts } from "./components/LatestProducts";

function App() {
  return (
    <div className="h-screen flex flex-col items-center ">
      <Topbar />
      <Slider sliderArray={sliderArr} />
      <LatestProducts />
    </div>
  );
}

export default App;
